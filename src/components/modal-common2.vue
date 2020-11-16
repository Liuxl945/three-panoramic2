<!--
 * @Author: your name
 * @Date: 2020-11-14 12:56:31
 * @LastEditTime: 2020-11-14 13:26:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\modal-common.vue
-->



<template>
    <transition name="fade">
        <div class="modal-common modal" v-if="show">
            <!-- 发展历程 -->
            <div class="content">

                <div class="close-image">
                    <img class="image" :src="closeImage" @click="show = false">
                </div>

                <div class="header">
                    <div class="header-image">
                        <img class="image" :src="headerImage">
                    </div>
                    
                    <div class="title-image">
                        <img class="image" :src="titleImage">
                    </div>
                    
                </div>

                <div class="center" :style="'background-image: url('+ centerImage +')'">
                    <slot></slot>
                </div>

                <div class="fotter">
                    <img class="image" :src="fotterImage">
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import headerImage from "@/assets/image/index2/yewu/发展历程1.png"
import fotterImage from "@/assets/image/index2/yewu/发展历程11.png"
import centerImage from "@/assets/image/index2/yewu/发展历程111.png"
import closeImage from "@/assets/image/index2/history/关闭.png"

export default {
    props: {
        titleImage: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            headerImage,
            fotterImage,
            centerImage,
            closeImage,
            show: false
        }
    }
}
</script>




<style lang="scss" scoped>
@import url("../assets/style/modal.scss");
@function rem($n){
  @return $n/(200)+rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.modal-common{
    padding-top: 2vh;
    .content{
        width: rem(633);
        position: relative;
    }

    .close-image{
        position: absolute;
        z-index: 100;
        right: rem(-20);
        top: rem(20);
        width: rem(46);
        height: rem(46);
    }

    .header{
        width: rem(633);
        height: rem(192);

        .header-image{
            width: rem(633);
            height: rem(192);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
        }

        display: flex;
        align-items: center;
        justify-content: center;

        .title-image{
            position: relative;
            z-index: 2;
            height: rem(64);
            transform: translateY(rem(-10));
            .image{
                height: rem(64);
                width: auto;
            }
        }
    }

    .center{
        // height: rem(500);
        background-size: contain;
    }

    .fotter{
        width: rem(633);
        height: rem(58);
    }
    .image{
        width: 100%;
    }
}

</style>