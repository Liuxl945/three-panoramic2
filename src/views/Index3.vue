
<!--
 * @Author: 刘学良
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-14 19:42:39
 * @LastEditors: Please set LastEditors
 * @Description: 场景动画
 * @FilePath: \three-panoramic2\src\App.vue
-->

<template>
    <div class="index3">
        <div id="viewer"></div>
        <div class="back" ></div>
    </div>
    
</template>

<script>
import { Viewer } from "photo-sphere-viewer"
import MarkersPlugin from "photo-sphere-viewer/dist/plugins/markers"

import "photo-sphere-viewer/dist/photo-sphere-viewer.css"
import "photo-sphere-viewer/dist/plugins/markers.css"

import image from "@/assets/image/cube/1.jpg"
import imagegongyi from "@/assets/image/cube/2.jpg"
import imagekeji from "@/assets/image/cube/3.jpg"
import imageyewu from "@/assets/image/cube/4.jpg"
import imagerongyu from "@/assets/image/cube/5.jpg"
import imagelicheng from "@/assets/image/cube/6.jpg"


import yewu from "@/assets/image/cube/产品业务.png"
import licheng from "@/assets/image/cube/发展历程.png"
import gongyi from "@/assets/image/cube/公益事业.png"
import keji from "@/assets/image/cube/科技能力.png"
import rongyu from "@/assets/image/cube/荣誉成绩.png"

import { deepClone } from "@/assets/js/utils"

export default {
    mounted() {
        const viewer = new Viewer({
            container: document.querySelector('#viewer'),
            panorama: image,
            navbar: [],
            defaultLong: Math.PI/2, //左右  0 and 2π
            defaultLat: 0, //上下 -π/2 and π/2

            
            defaultZoomLvl: 20, //Initial zoom level, between 0 (for maxFov) and 100 (for minfov)
            plugins: [
                [ MarkersPlugin, {
                    markers: (() => {
                        let arr = []
                        arr.push({
                            id: 'gongyi',
                            longitude: Math.PI / 2, // 0 and 2π
                            latitude:  -0.1,
                            width: 200,
                            height: 200,
                            image: gongyi,
                        })

                        arr.push({
                            id: 'keji',
                            longitude: Math.PI / 2 + Math.PI /4, // 0 and 2π
                            latitude:  -0.1,
                            width: 200,
                            height: 200,
                            image: keji,
                        })

                        arr.push({
                            id: 'yewu',
                            longitude: Math.PI, // 0 and 2π
                            latitude:  -0.1,
                            width: 200,
                            height: 200,
                            image: yewu,
                        })

                        arr.push({
                            id: 'rongyu',
                            longitude: Math.PI + Math.PI / 4, // 0 and 2π
                            latitude:  -0.1,
                            width: 200,
                            height: 200,
                            image: rongyu,
                        })

                        arr.push({
                            id: 'licheng',
                            longitude: Math.PI + Math.PI / 2, // 0 and 2π
                            latitude:  -0.1,
                            width: 200,
                            height: 200,
                            image: licheng,
                        })


                        return arr
                    })()
                }], 
            ],
        })

        const markersPlugin = viewer.getPlugin(MarkersPlugin)
        
        markersPlugin.on("select-marker",function(e, marker, data) {

            if(marker.id === "yewu"){
                viewer.setPanorama(imageyewu)
            }else if(marker.id === "gongyi") {
                viewer.setPanorama(imagegongyi)
            }else if(marker.id === "licheng") {
                viewer.setPanorama(imagelicheng)
            }else if(marker.id === "keji") {
                viewer.setPanorama(imagekeji)
            }else if(marker.id === "rongyu") {
                viewer.setPanorama(imagerongyu)
            }

            markersPlugin.removeMarker("yewu")
            markersPlugin.removeMarker("licheng")
            markersPlugin.removeMarker("keji")
            markersPlugin.removeMarker("rongyu")
            markersPlugin.removeMarker("gongyi")
            
            // let prop = viewer.prop
            // prop.position = {
            //     latitude: Math.PI,
            //     longitude: Math.PI 
            // }
            
            // viewer.setOption("prop", prop)

        })

    }
}
</script>

<style lang="scss" scoped>
 #viewer {
    width: 100vw;
    height: 100vh;


}
</style>

<style lang="scss">
#viewer{
    .psv-navbar{
        display: none;
    }
}
</style>
