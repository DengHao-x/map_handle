<template>
  <div id="app">
    <Map></Map>
    <xmlDemo></xmlDemo>
  </div>
</template>

<script>
import Map from './components/map.vue'
import xmlDemo from './components/xmlDemo.vue'
export default {
  name: 'App',
  components: {
    Map,
    xmlDemo
  },
  data() {
    return {
     
    }
  },
  mounted(){
   
  },
  methods:{
    
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
