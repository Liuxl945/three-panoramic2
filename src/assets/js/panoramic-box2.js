import nx from "@/assets/image/cube/1_f.jpg"
import ny from "@/assets/image/cube/1_d.jpg"
import nz from "@/assets/image/cube/1_r.jpg"
import px from "@/assets/image/cube/1_b.jpg"
import py from "@/assets/image/cube/1_u.jpg"
import pz from "@/assets/image/cube/1_l.jpg"

export default class PanoramicBox {
    constructor(width = 20, modulus = 20) {
        
        const sides = [
            {
                // 前面
                url: nx,
                position: [ 0, 0, 652 ],
                rotation: [ 0, Math.PI, 0 ]
            },
            {
                // 右边
                url: pz,
                position: [ - 652, 0, 0 ],
                rotation: [ 0, Math.PI / 2, 0 ]
            },
            {
                // 左边
                url: nz,
                position: [ 652, 0, 0 ],
                rotation: [ 0, - Math.PI / 2, 0 ]
            },
            {
                // 顶部
                url: py,
                position: [ 0, 652, 0 ],
                rotation: [ -Math.PI / 2, Math.PI, Math.PI  ]
            },
            {
                // 底部
                url: ny,
                position: [ 0, - 652, 0 ],
                rotation: [ Math.PI / 2, Math.PI , Math.PI ]
            },
            {
                // 后面
                url: px,
                position: [ 0, 0, - 652 ],
                rotation: [ 0, 0, 0 ]
            }
        ]

        

        sides.forEach(side => {
            let element = document.createElement( 'img' )
            element.width = 1304; // 2 pixels extra to close the gap.
            element.src = side.url;

            let object = new CSS3DObject( element)
            object.position.fromArray( side.position)
            object.rotation.fromArray( side.rotation )
            this.scene.add( object )
        })
        

        this.init()
    }

    init() {
        this.pathArr.forEach(elem => {
            let textureLoader = new THREE.TextureLoader()
            let texture = textureLoader.load(elem)
            let material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide
            });

            this.materialArr.push(material)
        })

        this.box = new THREE.BoxGeometry(this.width, this.width, this.modulus)

        this.box.scale(-1,1,1)

        this.instance = new THREE.Mesh(this.box, this.materialArr)
    }
}