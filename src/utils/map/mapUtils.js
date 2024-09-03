import mapTools from "./mapTool";

/*火星坐标（高德地图坐标转百度）批量*/
const handleBaiDu = (originalCoordinates) => {
    // 存储转换后的百度地图坐标数组
    const baiduCoordinates = [];
    // 遍历原始坐标数组并转换
    for (let i = 0; i < originalCoordinates.length; i++) {
        const originalCoordinate = originalCoordinates[i];
        //将火星坐标转成百度的坐标
        const baidu = handleMarsTurn(originalCoordinate[0], originalCoordinate[1])
        // 将原始经纬度坐标转换为百度地图坐标
        const point = new BMapGL.Point(baidu.lon, baidu.lat);
        // 存储转换后的百度地图坐标
        baiduCoordinates.push(point);
    }
    return baiduCoordinates
}
const handleMarsTurn = (lon, lat) => {
    //将火星坐标转成百度的坐标
    const baidu = mapTools.marsTobaidu({
        lng: lon,
        lat,
    })
    return {
        lon: baidu.lng,
        lat: baidu.lat
    }
}
export {
    handleBaiDu,
    handleMarsTurn
}
