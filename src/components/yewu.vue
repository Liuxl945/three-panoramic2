<!--
 * @Author: your name
 * @Date: 2020-11-14 13:04:56
 * @LastEditTime: 2020-11-14 13:47:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\yewu.vue
-->


<template>
    <modal-common :titleImage="titleImage" ref="modal">
        <div class="yewu">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img class="image" :src="yihedaiImage" >
                    </div>
                    <div class="swiper-slide">
                        <img class="image" :src="manyicunImage">
                    </div>
                    <div class="swiper-slide">
                        <img class="image" :src="yidaiImage">
                    </div>
                    <div class="swiper-slide">
                        <img class="image" :src="yinondaiImage">
                    </div>
                    <div class="swiper-slide">
                        <img class="image" :src="qudaoImage">
                    </div>
                    <div class="swiper-slide">
                        <img class="image" :src="dituImage">
                    </div>
                </div>
            </div>
        </div>
    </modal-common>
</template>

<script>
import titleImage from "@/assets/image/index2/yewu/产品业务.png"
import yihedaiImage from "@/assets/image/index2/yewu/合亿贷.png"
import manyicunImage from "@/assets/image/index2/yewu/满亿存.png"
import yidaiImage from "@/assets/image/index2/yewu/亿贷.png"
import yinondaiImage from "@/assets/image/index2/yewu/亿农贷.png"
import qudaoImage from "@/assets/image/index2/yewu/组 15.png"
import dituImage from "@/assets/image/index2/yewu/组 1.png"


import modalCommon from "./modal-common2"

import Swiper from "swiper"

export default {
    components: {
        modalCommon
    },
    data() {
        return {
            titleImage,
            yihedaiImage,
            manyicunImage,
            yidaiImage,
            yinondaiImage,
            qudaoImage,
            dituImage,
        }
    },
    methods: {
        show() {
            if(this.$refs.modal.show) {
                return
            }
            this.$refs.modal.show = true

            setTimeout(() => {
                this.initSwiper()
            }, 20)
        },
        initSwiper() {
            this.swiper = new Swiper(".swiper-container", {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: true
            })
        }
    }
}
</script>



<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.yewu{
    max-height: 70vh;
    overflow-y: scroll;
    padding: 0 rem(20);
    .swiper-slide{
        
        display: flex;
        justify-content: center;
    }
    .image{
        width: 100%;
    }
}

</style>