
<!--
 * @Author: 刘学良
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-14 19:42:39
 * @LastEditors: Please set LastEditors
 * @Description: 场景动画
 * @FilePath: \three-panoramic2\src\App.vue
-->

<template>
    <div id="index3" class="index-common">
        
    </div>
</template>


<script>
import * as THREE from "three"
import TWEEN from "tween.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import Scene from "@/assets/js/scene"
import Camera from "@/assets/js/camera"
import PanoramicBox from "@/assets/js/panoramic-box"
import Sprite from "@/assets/js/sprite"
import { LOCATIONS } from "@/assets/js/constants"

export default {
    name: "index3",
    data() {
        return {
            time: 0
        }
    },
    mounted() {
        this.init()
        this.animate()

        // this.animateSprite()
    },
    methods: {
        init() {
            const width = this.width = window.innerWidth
            const height = this.height = window.innerHeight

            this.raycaster = new THREE.Raycaster()
            this.mouse = new THREE.Vector2()
            this.scene = new Scene()
            this.camera = new Camera(width, height, 40)
            

            this.renderer = new THREE.WebGLRenderer()
            this.renderer.setClearColor(0xb9d3ff, 1)
            this.renderer.setSize( width, height )
            this.renderer.setPixelRatio( window.devicePixelRatio ) //设置这个会造成卡顿

            this.panoramicBox = new PanoramicBox()
            let helper = new THREE.AxesHelper(100)


            // 精灵模型
            LOCATIONS.forEach(item => {
                this.[item.name + "sprite"] = new Sprite({
                    position: item.position,
                    imageName: item.name,
                    name: item.name
                })

                console.log(item.name + "sprite")
                console.log(this[item.name + "sprite"])

                this.scene.instance.add(this[item.name + "sprite"].instance)
            })

            
            this.scene.instance.add(this.panoramicBox.instance)
            // this.scene.instance.add(helper)

            new OrbitControls(this.camera.instance,this.renderer.domElement);//创建控件对象
            document.querySelector("#index3").appendChild(this.renderer.domElement); //body元素中插入canvas对象

            window.addEventListener( "touchstart", this.onClick, false )
        },
        animate() {
            this.time++
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene.instance,this.camera.instance)
            
            TWEEN.update()
        },

        animateSprite() {
            let that = this

            this.animateSpriteFunc = new TWEEN.Tween(that.sprite.instance.position)
            .to({
                y: -4
            }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                that.sprite.instance.position.y = this.y
                
            }).start()

            this.animateSpriteEndFunc = new TWEEN.Tween(that.sprite.instance.position)
            .to({
                y: 0
            }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                that.sprite.instance.position.y = this.y

            })
            .start()

            this.animateSpriteFunc.chain(this.animateSpriteEndFunc)
            this.animateSpriteEndFunc.chain(this.animateSpriteFunc)
        },

        onClick(event) {
            event.preventDefault()
            const width1 = event.clientX !== undefined ? event.clientX : event.touches[0].clientX
            const height2 = event.clientY !== undefined ? event.clientY : event.touches[0].clientY

            this.mouse.x = ( width1 / this.width ) * 2 - 1;
            this.mouse.y = - ( height2 / this.height ) * 2 + 1;


            this.raycaster.setFromCamera( this.mouse, this.camera.instance );
            const intersects = this.raycaster.intersectObjects( this.scene.instance.children );
            
            if ( intersects.length > 0 ) {

                const object = intersects[ 0 ].object
                console.log(object)

                if(object.name === "logo") {
                    alert("操作")
                }
            }
        },
    }
}
</script>