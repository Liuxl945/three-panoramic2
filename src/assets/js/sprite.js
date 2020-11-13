/*
 * @Author: your name
 * @Date: 2020-10-30 10:56:04
 * @LastEditTime: 2020-11-13 10:13:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\sprite.js
 */

import logo from "@/assets/logo.png"

export default class Sprite {
    constructor(location) {
        this.spriteMaterial = new THREE.SpriteMaterial({
            map: new THREE.TextureLoader().load(logo),
            color: 0xffff00,
            fog: true
        })

        // this.spriteMaterial.map = new THREE.TextureLoader().load(logo)

        this.instance = new THREE.Sprite(this.spriteMaterial)
        this.instance.position.set(location.position[0], location.position[1], location.position[2])

        this.instance.scale.set(3, 3, 1)
        
        this.instance.name = location.imageName || "sprite"
    }
}