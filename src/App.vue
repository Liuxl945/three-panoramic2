<template>
    <div id="app">
    </div>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import nx from "@/assets/image/cube/nx.jpg"
import ny from "@/assets/image/cube/ny.jpg"
import nz from "@/assets/image/cube/nz.jpg"
import px from "@/assets/image/cube/px.jpg"
import py from "@/assets/image/cube/py.jpg"
import pz from "@/assets/image/cube/pz.jpg"


export default {
    mounted() {
        this.init()
        this.animate()
    },
    methods: {
        init() {
            const width = window.innerWidth
            const height = window.innerHeight

            this.scene = new THREE.Scene()
            this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
            this.camera.position.z = 5

            this.renderer = new THREE.WebGLRenderer()

            let pathArr =  [px, nx, py, ny, pz, nz ]

            let materialArr = []
            pathArr.forEach(elem => {
                let textureLoader = new THREE.TextureLoader()
                let texture = textureLoader.load(elem)
                let material = new THREE.MeshBasicMaterial({
                    map:texture,
                    side:THREE.BackSide,
                });
                materialArr.push(material)
            })

            let box = new THREE.BoxGeometry(20, 20, 20)
            let mesh = new THREE.Mesh(box, materialArr) 

            let helper = new THREE.AxesHelper(100)

            this.renderer.setClearColor(0xb9d3ff, 1)
            this.renderer.setSize( width, height )
            // this.renderer.setPixelRatio( window.devicePixelRatio ) //设置这个会造成卡顿
            
            // this.renderer.domElement.style.position = 'relative'
            // this.renderer.domElement.style.width = width + 'px'
            // this.renderer.domElement.style.height = height+ 'px'
            
            this.scene.add(helper)
            this.scene.add(mesh)

            new OrbitControls(this.camera,this.renderer.domElement);//创建控件对象
            document.querySelector("#app").appendChild(this.renderer.domElement); //body元素中插入canvas对象
        },
        animate() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene,this.camera)
        }
    }
}
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
</style>
