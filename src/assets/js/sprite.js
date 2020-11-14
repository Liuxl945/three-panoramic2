/*
 * @Author: your name
 * @Date: 2020-10-30 10:56:04
 * @LastEditTime: 2020-11-14 19:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\sprite.js
 */

import { SPRITE_IAMGE_URLS } from "./constants"


export default class Sprite {
    constructor(location) {
        this.spriteMaterial = new THREE.SpriteMaterial({
            map: new THREE.TextureLoader().load(SPRITE_IAMGE_URLS[location.name] || yewu),
            color: 0xffffff,
            fog: true
        })

        // this.spriteMaterial.map = new THREE.TextureLoader().load(logo)

        this.instance = new THREE.Sprite(this.spriteMaterial)
        this.instance.position.set(location.position[0], location.position[1], location.position[2])

        this.instance.scale.set(5, 4.5, 1)
        
        this.instance.name = location.imageName || "sprite"
    }
}