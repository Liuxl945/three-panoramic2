export default class Camera {
    constructor(width, height, fov = 40) {
        this.width = width
        this.height = height
        this.fov = fov

        this.init()
    }

    init() {
        this.instance = new THREE.PerspectiveCamera(this.fov, this.width / this.height, 0.1, 1000)
        this.instance.position.z = 5
    }
}