/*
 * @Author: your name
 * @Date: 2020-10-30 10:49:48
 * @LastEditTime: 2020-11-13 08:59:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\panoramic-box.js
 */
import background from "@/assets/image/cube/background.png"

export default class PanoramicBox {
    constructor(width = 20, modulus = 20) {

        this.width = width
        this.modulus = modulus
        this.materialArr = []

        this.init()
    }

    init() {
        let textureLoader = new THREE.TextureLoader()
        let texture = textureLoader.load(background)
        let material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,
        });
        this.box = new THREE.SphereGeometry(this.width, this.width, this.modulus)
        this.instance = new THREE.Mesh(this.box, material)
    }
}