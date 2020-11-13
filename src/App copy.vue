<template>
    <div id="app">
    </div>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import Scene from "@/assets/js/scene"
import Camera from "@/assets/js/camera"
import PanoramicBox from "@/assets/js/panoramic-box"
import Sprite from "@/assets/js/sprite"



export default {
    mounted() {
        this.init()
        this.animate()
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
            this.sprite = new Sprite({
                position: [9.5, 1, 0],
                imageName: "logo"
            })
            
            this.scene.instance.add(this.panoramicBox.instance)
            this.scene.instance.add(this.sprite.instance)
            // this.scene.instance.add(helper)

            new OrbitControls(this.camera.instance,this.renderer.domElement);//创建控件对象
            document.querySelector("#app").appendChild(this.renderer.domElement); //body元素中插入canvas对象

            window.addEventListener( "touchstart", this.onClick, false )
        },
        animate() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene.instance,this.camera.instance)
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

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
</style>
