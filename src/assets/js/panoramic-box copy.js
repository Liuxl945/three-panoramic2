import nx from "@/assets/image/cube/nx.jpg"
import ny from "@/assets/image/cube/ny.jpg"
import nz from "@/assets/image/cube/nz.jpg"
import px from "@/assets/image/cube/px.jpg"
import py from "@/assets/image/cube/py.jpg"
import pz from "@/assets/image/cube/pz.jpg"

export default class PanoramicBox {
    constructor(width = 20, modulus = 20) {

        this.width = width
        this.modulus = modulus
        this.pathArr =  [px, nx, py, ny, pz, nz ]
        this.materialArr = []

        this.init()
    }

    init() {
        this.pathArr.forEach(elem => {
            let textureLoader = new THREE.TextureLoader()
            let texture = textureLoader.load(elem)
            let material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.BackSide,
            });
            this.materialArr.push(material)
        })

        this.box = new THREE.BoxGeometry(this.width, this.width, this.modulus)
        this.instance = new THREE.Mesh(this.box, this.materialArr)
    }
}