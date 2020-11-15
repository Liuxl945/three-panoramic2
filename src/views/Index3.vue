
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
        
        <div class="back" @touchstart.stop @click.stop="backHome" v-if="vrIndex">返回主页</div>
        <div class="lotery" @touchstart.stop @click.stop="lotery" v-if="activeIndex.length === 5">
            <img class="image" :src="lotterImage" alt="抽检">
        </div>

        <history ref="history"></history>
        <yewu ref="yewu"></yewu>
        <gongyi ref="gongyi"></gongyi>
        <kejishili ref="kejishili"></kejishili>
        <rongyu ref="rongyu"></rongyu>

        <canvas-loading v-if="loading"></canvas-loading>
    </div>
</template>


<script>
import * as THREE from "three"
import TWEEN from "tween.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import lotterImage from "@/assets/image/index2/选我.png"

import Scene from "@/assets/js/scene"
import Camera from "@/assets/js/camera"
import PanoramicBox from "@/assets/js/panoramic-box"
import PanoramicBox1 from "@/assets/js/panoramic-box1"
import Sprite from "@/assets/js/sprite"
import { LOCATIONS, SPRITE_CHILDREN } from "@/assets/js/constants"
// import { deepClone } from "@/assets/js/utils"

let spriteArr = LOCATIONS.map(item => {
    return item.name
})


import history from "@/components/history"
import yewu from "@/components/yewu"
import gongyi from "@/components/gongyi"
import kejishili from "@/components/kejishili"
import rongyu from "@/components/rongyu"
import canvasLoading from "@/components/canvas-loading"

export default {
    components: {
        history,
        yewu,
        gongyi,
        kejishili,
        rongyu,
        canvasLoading
    },
    name: "index3",
    data() {
        return {
            vrIndex: null,
            activeIndex: [],
            lotterImage,
            loading: false
        }
    },
    mounted() {
        this.init()
        this.animate()

        this.animateSprite()
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
            // this.renderer.setPixelRatio( window.devicePixelRatio ) //设置这个会造成卡顿
            this.renderer.setPixelRatio( 2 ) //设置这个会造成卡顿

            this.panoramicBox = new PanoramicBox()
            let helper = new THREE.AxesHelper(100)


            let spriteGroup = this.spriteGroup = new THREE.Group()

            // 精灵模型
            LOCATIONS.forEach(item => {
                this.[item.name + "sprite"] = new Sprite({
                    position: item.position,
                    imageName: item.name,
                    name: item.name,
                    index: item.index
                })
                // this.[item.name + "sprite"].instance
                //     index: item.index

                spriteGroup.add(this[item.name + "sprite"].instance)
                // 场景
                
            })

            this.scene.instance.add(spriteGroup)
            this.scene.instance.add(this.panoramicBox.instance)
            this.scene.instance.add(helper)

            this.controls = new OrbitControls(this.camera.instance,this.renderer.domElement)//创建控件对象

            this.controls.enabled = true
            this.controls.enableZoom = false
            this.controls.autoRotate = true
            this.controls.autoRotateSpeed = 0.5

            
            // this.controls.enablePan = false

            document.querySelector("#index3").appendChild(this.renderer.domElement) //body元素中插入canvas对象

            window.addEventListener( "touchstart", this.onClick, false )
        },
        animate() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene.instance,this.camera.instance)
            this.controls.update()
            
            TWEEN.update()

            const number = 5

            if(this.camera.instance.position.z < -25 + number && this.camera.instance.position.z > -25 - number   ) {
                this.spriteGroup.remove(this["gongyi"+ "sprite"].instance) 
                // return
            }else if(this.spriteGroup.children.length < 5){
                this.spriteGroup.add(this["gongyi"+ "sprite"].instance) 
                // return
            }

            if(this.camera.instance.position.z > 25 - number && this.camera.instance.position.z < 25 + number   ) {
                this.spriteGroup.remove(this["licheng"+ "sprite"].instance) 
                // return
            }else if(this.spriteGroup.children.length < 5){
                this.spriteGroup.add(this["licheng"+ "sprite"].instance) 
                // return
            }


            if(this.camera.instance.position.x > 25 - number && this.camera.instance.position.x < 25 + number ) {
                this.spriteGroup.remove(this["yewu"+ "sprite"].instance) 
                // return
            }else if(this.spriteGroup.children.length < 5){
                this.spriteGroup.add(this["yewu"+ "sprite"].instance) 
                // return
            }

            if(this.camera.instance.position.z > -18 - number && this.camera.instance.position.z < -18 + number  
                && this.camera.instance.position.x < 18 + number && this.camera.instance.position.x > 18 - number
            ) {
                this.spriteGroup.remove(this["keji"+ "sprite"].instance) 
                // return
            }else if(this.spriteGroup.children.length < 5){
                this.spriteGroup.add(this["keji"+ "sprite"].instance) 
                // return
            }

            if(this.camera.instance.position.z < 18 + number && this.camera.instance.position.z > 18 - number  
                && this.camera.instance.position.x < 18 + number && this.camera.instance.position.x > 18 - number
            ) {
                this.spriteGroup.remove(this["rongyu"+ "sprite"].instance) 
                // return
            }else if(this.spriteGroup.children.length < 5){
                this.spriteGroup.add(this["rongyu"+ "sprite"].instance) 
                // return
            }


            if(this.vrIndex) {
                if(this.camera.instance.position.x < -25 + number && this.camera.instance.position.x > -25 - number) {
                    this.scene.instance.remove(this[`sprite${this.vrIndex}`])
                    this.scene.instance.remove(this[`sprite${this.vrIndex}`])
                }else{
                    this.scene.instance.add(this[`sprite${this.vrIndex}`])
                    this.scene.instance.add(this[`sprite${this.vrIndex}`])
                }
            }

            
        },

        // 精灵模型上下动画
        animateSprite() {
            let that = this

            this.animateSpriteFunc = new TWEEN.Tween(that[LOCATIONS[0].name + "sprite"].instance.position)
            .to({
                y: 0
            }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                // that.sprite.instance.position.y = this.y

                LOCATIONS.forEach(item => {
                    that[item.name + "sprite"].instance.position.y = this.y
                })
                
            }).start()

            this.animateSpriteEndFunc = new TWEEN.Tween(that[LOCATIONS[0].name + "sprite"].instance.position)
            .to({
                y: -2
            }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                // that.sprite.instance.position.y = this.y

                LOCATIONS.forEach(item => {
                    that[item.name + "sprite"].instance.position.y = this.y
                })
            })
            .start()

            this.animateSpriteFunc.chain(this.animateSpriteEndFunc)
            this.animateSpriteEndFunc.chain(this.animateSpriteFunc)
        },

        onClick(event) {
            event.preventDefault()
            const width1 = event.clientX !== undefined ? event.clientX : event.touches[0].clientX
            const height2 = event.clientY !== undefined ? event.clientY : event.touches[0].clientY

            this.mouse.x = ( width1 / this.width ) * 2 - 1
            this.mouse.y = - ( height2 / this.height ) * 2 + 1


            this.raycaster.setFromCamera( this.mouse, this.camera.instance )


            let spriteGroup = this.scene.instance.children.filter(item => {
                return item.type === "Group"
            })
            
            const intersects = this.raycaster.intersectObjects( spriteGroup[0] ? spriteGroup[0].children : [])
            



            if ( intersects.length > 0 ) {

                const object = intersects[ 0 ].object

                if(this.vrIndex){
                    
                    
                    // 如果是切换了场景  到5个场景中的其中一个场景去了
                    if(this.vrIndex === 5) {
                        this.$refs.history.show()

                        
                    }else if(this.vrIndex === 3){
                        this.$refs.yewu.show()
                    }else if(this.vrIndex === 1){
                        this.$refs.gongyi.show()
                    }
                    else if(this.vrIndex === 4){
                        this.$refs.rongyu.show()
                    }else if(this.vrIndex === 2){
                        this.$refs.kejishili.show()
                    }

                }else if(spriteArr.includes(object.name)) {
                    
                    // let that = this
                    // new TWEEN.Tween(that.camera.instance)
                    // .to({
                    //     fov: 10
                    // }, 1000)
                    // .easing(TWEEN.Easing.Quadratic.Out)
                    // .onUpdate(function() {
                    //     that.camera.instance.fov = this.fov
                    //     that.camera.instance.updateProjectionMatrix()
                    //     that.controls.autoRotate = false
                    // })
                    // .onComplete(() => {
                    //     this.changeVr(object.index)
                    //     that.camera.instance.fov = 40

                    //     // that.controls.autoRotate = true
                    //     that.camera.instance.updateProjectionMatrix()
                    // })
                    // .start()
                    this.loading = true
                    this.controls.autoRotate = false

                    this.changeVr(object.index)
                    setTimeout(() => {
                        this.loading = false    
                        this.controls.autoRotate = true
                    }, 500)
                    
                }
            }
        },
        // 切换AI场景
        changeVr(index) {
            this.vrIndex = index
            this.scene.instance.remove(this.spriteGroup)
            this.panoramicBox.instance.material.map = this.panoramicBox["texture" + index]

            let that = this
            this.oldPosition = this.camera.instance.position
            // this.oldPosition = {
            //     x: this.camera.instance.position.x,
            //     y: this.camera.instance.position.y,
            //     z: this.camera.instance.position.z
            // }

            
            // new TWEEN.Tween(this.camera.instance.position)
            // .to({
            //     x: 17.9,
            //     y: -3,
            //     z: 0,
            // }, 1500)
            // .easing(TWEEN.Easing.Quadratic.Out)
            // .onUpdate(function() {
            //     that.camera.instance.position.z = this.z
            //     that.camera.instance.position.x = this.x
            //     that.camera.instance.position.y = this.y
            // })
            // .start()

            that.camera.instance.position.z = 0
            that.camera.instance.position.x = 25
            that.camera.instance.position.y = -3


            // 添加sprite元素  // 判断如果有了实例 不要在new sprite了
            // let arr = SPRITE_CHILDREN[index]

            this[`sprite${index}`] = new THREE.Group()

            SPRITE_CHILDREN[index - 1 ].forEach(item => {
                let sprite = new Sprite({
                    position: item.position,
                    imageName: item.name,
                    name: item.name,
                    index: item.index
                })

                sprite.instance.scale.set(630/63 /1.5, 970/ 63 / 1.5, 1)
                this[`sprite${index}`].add(sprite.instance)
            })

            this.scene.instance.add(this[`sprite${index}`])


            // 统计进入的场景
            if(!this.activeIndex.includes(this.vrIndex)) {
                this.activeIndex.push(this.vrIndex)
            }
        },
        backHome() {
            this.scene.instance.remove(this[`sprite${this.vrIndex}`])
            this.vrIndex = null
            this.scene.instance.add(this.spriteGroup)

            let that = this
            // new TWEEN.Tween(this.camera.instance.position)
            // .to(this.oldPosition, 1500)
            // .easing(TWEEN.Easing.Quadratic.Out)
            // .onUpdate(function() {
            //     that.camera.instance.position.z = this.z
            //     that.camera.instance.position.x = this.x
            //     that.camera.instance.position.y = this.y
            // })
            // .onComplete(() => {
            //     this.controls.autoRotate = true
            // })
            // .start()

            that.camera.instance.position.x = this.oldPosition.x
            that.camera.instance.position.y = this.oldPosition.y
            that.camera.instance.position.z = this.oldPosition.z


            this.panoramicBox.instance.material.map = this.panoramicBox["texture"]
        },

        lotery() {
            this.$store.commit("SET_INDEX", 4)
        }
    }
}
</script>


<style lang="scss" scoped>

@function rem($n){
  @return $n/(200)+rem;
}

.back{
    width: rem(100);
    height: rem(100);
    background: #ffffff;
    position: fixed;
    left: rem(40);
    top: rem(40);
    font-size: rem(36);
    text-align: center;
    padding: rem(10);
    z-index: 10;
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