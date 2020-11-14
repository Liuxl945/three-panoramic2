<!--
 * @Author: your name
 * @Date: 2020-11-14 12:56:31
 * @LastEditTime: 2020-11-14 13:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\modal-common.vue
-->



<template>
    <div class="modal-common modal">
        <!-- 发展历程 -->
        <div class="content">

            <div class="close-image">
                <img class="image" :src="closeImage">
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
</template>

<script>

import headerImage from "@/assets/image/index2/history/11111.png"
import fotterImage from "@/assets/image/index2/history/展馆签到处2.png"
import centerImage from "@/assets/image/index2/history/展馆签到处3.png"
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
            closeImage
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/style/modal.scss");
@function rem($n){
  @return $n/(200)+rem;
}

.modal-common{
    .content{
        width: rem(633);
        position: relative;
    }

    .close-image{
        position: absolute;
        right: rem(-46);
        top: rem(-46);
        width: rem(46);
        height: rem(46);
    }

    .header{
        width: rem(633);
        height: rem(109);

        .header-image{
            width: rem(633);
            height: rem(109);
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
            transform: translateY(rem(4));
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
        height: rem(87);
    }
    .image{
        width: 100%;
    }
}

</style>