<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-14 14:35:49
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-14 17:43:40
 * @FilePath: \basic\src\components\Map\map.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<section class="map-view">
  <div id="mapContainer"></div>
  <a-input id="mapInput"></a-input>
</section>

</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { ref, watch, onMounted } from 'vue'
import { shallowRef } from '@vue/reactivity'
import { JS_API_KEY } from '@/constant'

let map = shallowRef(null);
let AMapObj
onMounted(() => {
  initMap()
})

const initMap = () => {
  AMapLoader.load({
      key: JS_API_KEY,             // 申请好的Web端开发者Key，首次调用 load 时必填
      version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins:['AMap.PlaceSearch','AMap.AutoComplete'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap)=>{
      AMapObj = AMap
      map = new AMap.Map("mapContainer",{  //设置地图容器id
          resizeEnable: true
      });
      let autoOptions = {
        input: "mapInput"
      };
      let auto = new AMap.AutoComplete(autoOptions);
      let placeSearch = new AMap.PlaceSearch({
          map: map
      });  //构造地点查询类
      auto.on("select", select);//注册监听，当选中某条记录时会触发
      function select(e) {
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name);  //关键字查询查询
      }
  }).catch(e=>{
      console.log(e);
  })
}

</script>

<style lang="scss" scoped>
.map-view {
  position: relative;
}
#mapContainer{
    width: 100%;
    height: 660px;
  }
#mapInput {
  width: 520px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -260px;
}
</style>