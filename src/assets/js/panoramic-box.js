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

export default class PanoramicBox {
    constructor(width = 20, modulus = 20) {

        this.width = width
        this.modulus = modulus
        this.materialArr = []

        this.init()
    }

    init() {
        let textureLoader = new THREE.TextureLoader()
        let texture = textureLoader.load(background1)
        let material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            clipShadows: true
        })
        
        this.box = new THREE.SphereGeometry(this.width, this.width, this.modulus)
        this.box.scale(-1, 1, 1)
        
        this.instance = new THREE.Mesh(this.box, material)
    }
}