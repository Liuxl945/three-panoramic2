<!--
 * @Author: your name
 * @Date: 2020-11-16 10:49:50
 * @LastEditTime: 2020-11-16 11:45:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\my-lottery.vue
-->


<template>
    <div class="modal-common modal " v-if="show">
        <div class="my-lottery">
            <div class="my-list top">
                <div class="title-tips">
                    <img class="image" :src="titleImage" alt="你可能抽中的有" >
                </div>

                <div class="prize">
                    <div class="left" @click="slidePrev">
                        <img class="image" :src="arrowImage" alt="箭头" >
                    </div>
                    <div class="center kapian-swiper">
                        <div class="swiper-container ">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img class="image" :src="card1" alt="爱奇艺" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="card2" alt="华为手表" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="card3" alt="平板" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="card4" alt="话费" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="card5" alt="话费" >
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="right" @click="slideNext">
                        <img class="image" :src="arrowImage" alt="箭头" >
                    </div>
                </div>
            </div>

            <div class="my-list body">
                <div class="title-tips">
                    <img class="image" :src="titleImage1" alt="你可能抽中的有" >
                </div>

                <div class="prize">
                    <div class="left" @click="slidePrev2">
                        <img class="image" :src="arrowImage" alt="箭头" >
                    </div>
                    <div class="center jianpin-swiper">
                        <div class="swiper-container ">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img class="image" :src="aiqiyiImage" alt="爱奇艺" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="huaweiImage" alt="华为手表" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="pingbanImage" alt="平板" >
                                </div>
                                <div class="swiper-slide">
                                    <img class="image" :src="huafeiImage" alt="话费" >
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="right" @click="slideNext2">
                        <img class="image" :src="arrowImage" alt="箭头" >
                    </div>
                </div>
            </div>

            <div class="my-list bottom">
                <div class="title-tips">
                    <img class="image" :src="titleImage2" alt="你可能抽中的有" >
                </div>

                <div class="list" v-for="item in 5">
                    <p>10%抵扣券</p>
                </div>
            </div>

            <div class="close-image" @click="again">
                <img class="image" :src="closeImage">
            </div>
        </div>

        
        
    </div>
</template>

<script>

import headerImage from "@/assets/image/index2/history/11111.png"

import titleImage from "@/assets/image/index2/lottery/·我的卡片·.png"
import titleImage1 from "@/assets/image/index2/lottery/·我的奖品·拷贝.png"
import titleImage2 from "@/assets/image/index2/lottery/·我的优惠券·.png"
import aiqiyiImage from "@/assets/image/index2/lottery/爱奇艺.png"
import huaweiImage from "@/assets/image/index2/lottery/华为手表.png"
import huafeiImage from "@/assets/image/index2/lottery/话费.png"
import pingbanImage from "@/assets/image/index2/lottery/平板.png"
import arrowImage from "@/assets/image/index2/lottery/进入(1) 拷贝 6.png"
import closeImage from "@/assets/image/index2/history/关闭.png"



import card1 from "@/assets/image/index2/card/联.png"
import card2 from "@/assets/image/index2/card/亿.png"
import card3 from "@/assets/image/index2/card/感.png"
import card4 from "@/assets/image/index2/card/恩.png"
import card5 from "@/assets/image/index2/card/您.png"




import Swiper from "swiper"

export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            headerImage,
            titleImage,
            titleImage1,
            titleImage2,
            aiqiyiImage,
            huaweiImage,
            huafeiImage,
            pingbanImage,
            arrowImage,
            closeImage,

            card1,
            card2,
            card3,
            card4,
            card5,
            show: false
        }
    },
    methods: {
        initSwiper() {
            this.swiper = new Swiper(".top .swiper-container", {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: true,
                slidesPerView : 3,
                spaceBetween : 1
            })
            this.swiper2 = new Swiper(".body .swiper-container", {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: true,
                slidesPerView : 3,
                spaceBetween : 5
            })
        },

        slidePrev() {
            this.swiper.slidePrev()
        },
        slideNext() {
            this.swiper.slideNext()
        },

        slidePrev2() {
            this.swiper2.slidePrev()
        },
        slideNext2() {
            this.swiper2.slideNext()
        },

        again() {
            this.$emit("again")
        },
    },
    watch: {
        show() {
            if(this.show){
                setTimeout(() => {
                    this.initSwiper()
                }, 20)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/style/modal.scss");
@function rem($n){
  @return $n/(200)+rem;
}

.my-lottery{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .image{
        width: 100%;
    }

    
    .my-list{
        // position: absolute;
        // bottom: rem(40);
        margin-top: rem(40);
        &:first-of-type{
            margin-top: 0;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .title-tips{
            // width: rem(408);
            height: rem(61);
            margin-bottom: rem(20);
            .image{
                width: auto;
                height: rem(61);
            }
        }
        .prize{
            width: rem(652);
            height: rem(260);
            background: #0e0e6a;
            border: rem(2) solid #46aef7;
            border-radius: rem(14);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            .center{
                flex: 1;
                max-width: rem(552);
                color: #ffffff;
                font-size: rem(30);
                height: rem(209);
                .swiper-slide{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .image{
                    height: rem(209);
                    width: rem(160);
                }
            }

            
            .left,
            .right{
                width: rem(50);
                padding: rem(20) 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .image{
                    width: rem(20);
                }
            }
            .right{
                .image{
                    transform: rotate(180deg);
                }
            }
        }
        &.top{
            
            .center{
                height: rem(160);
            }
            .swiper-slide{
                .image{
                    height: rem(160) !important;
                }
            }
            
        }
    }

    .bottom{
        .list{
            height: rem(64);
            width: rem(652);
            border: 1px solid #46aef7;
            background: #0e0e6a;
            margin-bottom: rem(20);
            border-radius: rem(10);
            color: #ffffff;
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
    }
}

</style>
