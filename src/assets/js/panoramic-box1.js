import nx from "@/assets/image/cube/1_f.jpg"
import ny from "@/assets/image/cube/1_d.jpg"
import nz from "@/assets/image/cube/1_r.jpg"
import px from "@/assets/image/cube/1_b.jpg"
import py from "@/assets/image/cube/1_u.jpg"
import pz from "@/assets/image/cube/1_l.jpg"

export default class PanoramicBox {
    constructor(width = 20, modulus = 20) {

        this.width = width
        this.modulus = modulus
        // this.pathArr =  [px, nx, py, ny, pz, nz ]

        // 左右 上下 后前
        this.pathArr =  [nz, pz, py, ny, nx, px]
        this.materialArr = []

        this.init()
    }

    init() {
        this.pathArr.forEach(elem => {
            let textureLoader = new THREE.TextureLoader()
            let texture = textureLoader.load(elem)
            let material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.FrontSide
            })

            this.materialArr.push(material)
        })
        
        this.box = new THREE.BoxGeometry(this.width, this.width, this.modulus)

        this.box.scale(-1,1,1)

        this.instance = new THREE.Mesh(this.box, this.materialArr)
    }
}