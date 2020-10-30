
import logo from "@/assets/logo.png"

export default class Sprite {
    constructor(location) {
        this.spriteMaterial = new THREE.SpriteMaterial({
            // map: new THREE.TextureLoader().load(logo),
            color: 0xffff00,
            fog: true
        })

        // this.spriteMaterial.map = new THREE.TextureLoader().load(logo)

        this.instance = new THREE.Sprite(this.spriteMaterial)
        this.instance.position.set(location.position[0], location.position[1], location.position[2])
        
        this.instance.name = location.imageName || "sprite"
    }
}