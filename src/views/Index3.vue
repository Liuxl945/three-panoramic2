
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
        <div class="back" @click="backHome" v-if="id">
            <img class="image" :src="backImage" alt="箭头" >
        </div>


        <div class="lotery" @touchstart.stop @click.stop="lotery" v-if="activeId.length === 5">
            <img class="image" :src="lotterImage" alt="抽检">
        </div>

        <history-com ref="licheng"></history-com>
        <yewu-com ref="yewu"></yewu-com>
        <gongyi-com ref="gongyi"></gongyi-com>
        <kejishili-com ref="keji"></kejishili-com>
        <rongyu-com ref="rongyu"></rongyu-com>
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
import fangdaImage from "@/assets/image/cube/放大镜2.png"
import backImage from "@/assets/返回大厅.png"
import lotterImage from "@/assets/image/index2/选我.png"

import { deepClone } from "@/assets/js/utils"

import historyCom from "@/components/history"
import yewuCom from "@/components/yewu"
import gongyiCom from "@/components/gongyi"
import kejishiliCom from "@/components/kejishili"
import rongyuCom from "@/components/rongyu"


export default {
    components: {
        historyCom,
        yewuCom,
        gongyiCom,
        kejishiliCom,
        rongyuCom
    },
    data() {
        return {
            lotterImage,
            backImage,
            id: null,
            activeId: []
        }
    },
    mounted() {

        let that = this
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

                        that.arrMarker = arr

                        return arr
                    })()
                }], 
            ],
        })

        const markersPlugin = viewer.getPlugin(MarkersPlugin)

        this.markers1 = markersPlugin.markers
        this.markersPlugin = markersPlugin
        this.viewer = viewer
        
        markersPlugin.on("select-marker",(e, marker, data) => {
            
            
            if(marker.id === "fangdaImage") {
                
                if(this.id === "yewu") {
                    this.$refs.yewu.show()

                }else if(this.id === "gongyi") {
                    this.$refs.gongyi.show()

                }else if(this.id === "licheng") {
                    this.$refs.licheng.show()

                }else if(this.id === "keji") {
                    this.$refs.keji.show()

                }else if(this.id === "rongyu") {
                    this.$refs.rongyu.show()
                }

                return

            }else if(marker.id === "yewu"){

                this.id = "yewu"
                viewer.setPanorama(imageyewu)

            }else if(marker.id === "gongyi") {
                viewer.setPanorama(imagegongyi)
                this.id = "gongyi"

            }else if(marker.id === "licheng") {
                viewer.setPanorama(imagelicheng)
                this.id = "licheng"

            }else if(marker.id === "keji") {
                viewer.setPanorama(imagekeji)
                this.id = "keji"

            }else if(marker.id === "rongyu") {
                viewer.setPanorama(imagerongyu)
                this.id = "rongyu"

            }
            
            if(!this.activeId.includes(this.id)) {
                this.activeId.push(this.id)
            }

            markersPlugin.removeMarker("yewu")
            markersPlugin.removeMarker("licheng")
            markersPlugin.removeMarker("keji")
            markersPlugin.removeMarker("rongyu")
            markersPlugin.removeMarker("gongyi")

            markersPlugin.addMarker({
                id: 'fangdaImage',
                longitude: Math.PI * 2 , // 0 and 2π
                latitude:  0.25,
                width: 120,
                height: 120,
                image: fangdaImage,
            })

            let { latitude, longitude} = viewer.getPosition()
            this.oldPostion = {
                latitude,
                longitude
            }
            
            viewer.rotate({
                latitude: Math.PI/ 20,
                longitude: 0 
            })

        })

    },
    methods: {
        lotery() {
            this.$store.commit("SET_INDEX", 4)
        },
        backHome() {

            function a() {
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 300)
                })
            }

            this.viewer.setPanorama(image).then( res => {
                this.arrMarker.forEach(item => {
                    this.markersPlugin.addMarker(item)
                })
                this.markersPlugin.removeMarker("fangdaImage")
            })

            setTimeout(() => {
                this.viewer.rotate(this.oldPostion)
            }, 150)

            this.id = null
        }
    }
}
</script>

<style lang="scss" scoped>

@function rem($n){
  @return $n/(200)+rem;
}

 #viewer {
    width: 100vw;
    height: 100vh;

    
}

.back{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    height: rem(129);
    width: rem(406);
    .image{
        width: rem(406);
        width: 100%;
    }
}

.lotery{
    width: rem(188);
    height: rem(193);
    position: fixed;
    bottom: rem(20);
    z-index: 11;
    right: rem(20);
    .image{
        width: 100%;
    }
}
</style>

<style lang="scss">
#viewer{
    .psv-navbar{
        display: none;
    }
}
</style>
