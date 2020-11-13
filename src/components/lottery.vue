

<template>
    <div class="lottery">
        <!-- 领取卡片 -->

        <div class="header-top">
            <div class="left">
                <span>可选次数</span>
                <span class="number">5</span>
                <span>次</span>
            </div>
            <div class="right">
                <span>我的奖品 > </span>
            </div>
        </div>

        <div class="content">
            <div class="go" @click="go">
                <img class="image" :src="goImage" alt="">
            </div>
            <div class="bg-content">    
                <img class="image" :style="rotateStyle" :src="turntableImage" alt="">
            </div>
        </div>

        <div class="bottom">
            <div class="tips">
                <img class="image" :src="titleImage" alt="你可能抽中的有" >
            </div>

            <div class="prize">
                <div class="left" @click="slidePrev">
                    <img class="image" :src="arrowImage" alt="箭头" >
                </div>
                <div class="center">
                    <div class="swiper-container">
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
                <div class="right" @click="slideNext">
                    <img class="image" :src="arrowImage" alt="箭头" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import goImage from "@/assets/image/index2/lottery/组 12.png"
import turntableImage from "@/assets/image/index2/lottery/转盘.png"
import titleImage from "@/assets/image/index2/lottery/·你可能抽中的有·.png"
import aiqiyiImage from "@/assets/image/index2/lottery/爱奇艺.png"
import huaweiImage from "@/assets/image/index2/lottery/华为手表.png"
import huafeiImage from "@/assets/image/index2/lottery/话费.png"
import pingbanImage from "@/assets/image/index2/lottery/平板.png"
import arrowImage from "@/assets/image/index2/lottery/进入(1) 拷贝 6.png"

import Swiper from "swiper"
import "swiper/swiper-bundle.css"


const PRIZE_LIST = 6
const CIRCLE_ANGLE = 360

export default {
    data() {
        return {
            goImage,
            turntableImage,
            titleImage,
            aiqiyiImage,
            huaweiImage,
            huafeiImage,
            pingbanImage,
            arrowImage,
            lottery: [
                {
                    id: 1,
                    name: "1等奖"
                },
                {
                    id: 2,
                    name: "2等奖"
                },
                {
                    id: 3,
                    name: "再接再厉"
                },
                {
                    id: 4,
                    name: "3等奖"
                },
                {
                    id: 5,
                    name: "参与奖"
                },
                {
                    id: 6,
                    name: "5等奖"
                }
            ],
            config: {
                duration: 4000, // 总旋转时间
                circle: 8, // 旋转圈数
                mode: "ease-in-out",
            },
            index: 0,
            rotateAngle: 0, // 旋转角度
        }
    },
    created() {
        this.isRotating = false // 是否正在旋转
    },
    mounted() {
        this.initSwiper()
    },
    methods: {
        slidePrev() {
            this.swiper.slidePrev()
        },
        slideNext() {
            this.swiper.slideNext()
        },
        initSwiper() {
            this.swiper = new Swiper(".swiper-container", {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: true,
                slidesPerView : 3,
                spaceBetween : 5
            })
        },

        async go() {
            this.index = Math.floor(Math.random() * 6 )
            this.rotating() // 开始旋转
        },

        rotating() {
            this.isRotating = true

            // 计算角度
            const angle = this.rotateAngle + this.config.circle * CIRCLE_ANGLE + (- this.rotateAngle % CIRCLE_ANGLE)
            this.rotateAngle = angle + this.index * CIRCLE_ANGLE / PRIZE_LIST

            setTimeout(() => {
                this.rotateOver()
            },this.config.duration + 1000)
        },

        rotateOver() {
            this.isRotating = false

            console.log(this.lottery[this.index].name)
        }
    },
    computed: {
        rotateStyle () {
            return `
                -webkit-transition: transform ${this.config.duration}ms ${this.config.mode};
                transition: transform ${this.config.duration}ms ${this.config.mode};
                -webkit-transform: rotate(${this.rotateAngle}deg);
                    transform: rotate(${this.rotateAngle}deg);`
        }
    }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.lottery{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: rgba($color: #000000, $alpha: 1.0);

    .image{
        width: 100%;
    }
    
    .header-top{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: rem(50);
        width: rem(474);
        padding: rem(4);
        border: 1px solid #46aef7;
        height: rem(56);
        border-radius: 100px;
        display: flex;
        .left{
            font-size: rem(24);
            color: #b1c7e8;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            .number{
                font-size: rem(30);
                color: #ffffff;
                font-weight: 600;
            }
        }
        .right{
            width: rem(230);
            color: #ffffff;
            border: 1px solid #46aef7;
            background: #2323a6;
            border-radius: 100px;
            font-size: rem(24);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .content{
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%,-50%);
        .go{
            width: rem(206);
            height: rem(224);
            z-index: 100;
            position: absolute;
            left: 50%;
            top: 48%;
            transform: translate(-50%,-50%);
        }
        .bg-content{
            width: rem(628);
            height: rem(628);
        }
    }

    .bottom{
        position: absolute;
        bottom: rem(40);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .tips{
            width: rem(408);
            height: rem(61);
            margin-bottom: rem(20);
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
    }

}
</style>