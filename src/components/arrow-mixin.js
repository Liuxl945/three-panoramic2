/*
 * @Author: your name
 * @Date: 2020-11-17 18:13:24
 * @LastEditTime: 2020-11-17 18:14:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\arrow-mixin.js
 */
import leftImage from "@/assets/image/index2/箭头左.png"

 export default {
     data() {
         return {
            leftImage
         }
     },
     methods: {
        slidePrev() {
            this.swiper.slidePrev()
        },
        slideNext() {
            this.swiper.slideNext()
        },
     }
 }