/*
 * @Author: your name
 * @Date: 2020-10-30 10:45:32
 * @LastEditTime: 2020-11-14 19:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\camera.js
 */
export default class Camera {
    constructor(width, height, fov = 40) {
        this.width = width
        this.height = height
        this.fov = fov

        this.init()
    }

    init() {
        this.instance = new THREE.PerspectiveCamera(this.fov, this.width / this.height, 0.1, 1000)
        // this.instance.position.z = 18
        this.instance.position.z = 17.9
    }
}