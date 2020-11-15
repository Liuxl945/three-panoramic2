/*
 * @Author: your name
 * @Date: 2020-10-30 10:49:48
 * @LastEditTime: 2020-11-14 20:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\panoramic-box.js
 */
import background1 from "@/assets/image/cube/1.jpg"
import background2 from "@/assets/image/cube/2.jpg"
import background3 from "@/assets/image/cube/3.jpg"
import background4 from "@/assets/image/cube/4.jpg"
import background5 from "@/assets/image/cube/5.jpg"
import background6 from "@/assets/image/cube/6.jpg"

// import { SPRITE_IAMGE_URLS } from "./constants"

export default class PanoramicBox {
    constructor(width = 20, modulus = 32) {

        this.width = width
        this.modulus = modulus
        this.materialArr = []

        let textureLoader = new THREE.TextureLoader()
        this.texture = textureLoader.load(background1)
        this.texture1 = textureLoader.load(background3)
        this.texture2 = textureLoader.load(background5)
        this.texture3 = textureLoader.load(background4)
        this.texture4 = textureLoader.load(background2)
        this.texture5 = textureLoader.load(background6)

        this.init()
    }

    init() {
        
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
            // side: THREE.BackSide,
            side: THREE.FrontSide,
            clipShadows: true
        })
        
        this.box = new THREE.SphereGeometry(this.width, this.modulus, this.modulus)
        this.box.scale(-1, 1, 1)
        
        this.instance = new THREE.Mesh(this.box, this.material)
    }
}