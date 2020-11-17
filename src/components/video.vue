<!--
 * @Author: your name
 * @Date: 2020-11-17 09:48:19
 * @LastEditTime: 2020-11-17 11:53:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\video.vue
-->

<template>
    <transition name="fade">
    <div class="modal-common modal " v-if="show1">

        <div class="video">

            
            <div class="conetent">
                <video v-if="videoSrc" :src="videoSrc" autoplay class="videos"></video>
                <span v-else >视频加载中</span>
            </div>
            
        </div>

        <div class="close-image" @click="again">
            <img class="image" :src="closeImage">
        </div>
    </div>
    </transition>
</template>

<script>

import videoSrc from "@/assets/亿联银行06-2020.5.19.mp4"
import closeImage from "@/assets/image/index2/history/关闭.png"

export default {
    data() {
        return {
            show1: false,
            closeImage,
            videoSrc
        }
    },
    methods: {
        show() {
            this.show1 = true
        },
        again() {
            this.show1 = false
        }
    }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.video{
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;

    .videos{
        width: rem(750);
    }

    .conetent{
        width: rem(750);
        background: #000000;
        font-size: rem(32);
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.close-image{
    z-index: 100;
    position: fixed;
    right: rem(60);
    top: rem(60);
    width: rem(46);
    height: rem(46);
    .image{
        width: 100%;
    }
}
</style>