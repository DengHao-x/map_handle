<template>
  <div id="app">
    <el-input placeholder="请输入内容" v-model="bigLon" style="width: 300px" />
    <el-input placeholder="请输入内容" v-model="bigLat" style="width: 300px" />
    <el-button type="primary" @click="handleMap(bigLon,bigLat)">转换</el-button>
    {{ GCJ02 }}
  </div>
</template>

<script>
import proj4 from 'proj4';
import crs_defs from "./utils/map/crs_defs";
import mapTools from './utils/map/mapTool'
export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
      GCJ02:null,
      bigLon:587526.4732,
      bigLat:3314112.7782
    }
  },
  mounted(){
    crs_defs()
  },
  methods:{
    handleMap(lon,lat) {
      console.log(lon,lat)
      const convert = this.convertCoordinates([Number(lon),Number(lat)])
      //WGS84转火星坐标
      const GCJ02 = this.GCJ02to(convert[0], convert[1])
      this.GCJ02 = GCJ02
      console.log(GCJ02)
    },
    /**
     * WGS84坐标转GCJ02(火星坐标)
     * @param lng
     * @param lat
     * @returns {{lng: *, lat: *}}
     * @constructor
     */
     GCJ02to(lng, lat) {
      const wgsPoint = {lng, lat}
      const marsPoint = mapTools.transformWGS2GCJ(wgsPoint);
      console.log("火星坐标：", marsPoint);
      return marsPoint
    },
    //CGCS2000中国大地坐标转火星坐标(高德经纬度)
    convertCoordinates(CGCS2000Coordinates) {
      // 定义 CGCS2000 坐标系和 GCJ02 坐标系的 Proj4 定义
      const CGCS2000Projection = '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs';
      const gcj02Projection = '+proj=longlat +datum=WGS84 +no_defs';
      // 保留小数点后15位 convertedCoordinates.x = Number(convertedCoordinates.x.toFixed(15)); convertedCoordinates.y = Number(convertedCoordinates.y.toFixed(15));
      // 将 CGCS2000 坐标转换为 GCJ02 坐标
      return proj4(CGCS2000Projection, gcj02Projection, CGCS2000Coordinates)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
