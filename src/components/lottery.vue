

<template>
<transition name="fade">
    <div class="lottery" :style="'background-image: url('+ bgImage +')'">
        <!-- 领取卡片 -->

        <div class="shuomin">
            <div class="shuomin-btn">
                活动说明
            </div>
        </div>

        <div class="title-image">
            <img class="image" :src="titleImagel" alt="">
        </div>

        <div class="content">
            <div class="go" @click="go">
                <img class="image" :src="goImage" alt="">
            </div>
            <div class="bg-content">    
                <img class="image" :style="rotateStyle" :src="turntableImage" alt="">
            </div>
        </div>

        <div class="header-top">
            <div class="left">
                <span>可选次数</span>
                <span class="number">5</span>
                <span>次</span>
            </div>
            <div class="right" @click="showMyLottery = true">
                <span>我的奖品 > </span>
            </div>
        </div>

        <div class="jilu">
            <div class="jilu-content">
                <div class="top">
                    <div class="left">
                        <img class="image" :src="jiluImage" alt="">
                    </div>
                    <div class="title">中奖纪录</div>
                    <div class="right">
                        <img class="image" :src="jiluImage" alt="">
                    </div>
                </div>

                <div class="center">
                    <div class="list" v-for="item in 10">
                        <div class="left">138xxxx54321</div>
                        <div class="right">5元话费</div>
                    </div>
                </div>
            </div>
        </div>



        <lottery-result :show="showLotteryResult" :index="index" @again="againLottery"></lottery-result>
        <my-lottery :show="showMyLottery" @again="againLottery" ></my-lottery>
    </div>
</transition>
</template>

<script>

import lotteryResult from "./lottery-result"

import bgImage from "@/assets/image/index2/lottery/背景.png"
import jiluImage from "@/assets/image/index2/lottery/椭圆79拷贝9.png"
import goImage from "@/assets/image/index2/lottery/组12.png"
import turntableImage from "@/assets/image/index2/lottery/转盘.png"
import titleImage from "@/assets/image/index2/lottery/·你可能抽中的有·.png"
import aiqiyiImage from "@/assets/image/index2/lottery/爱奇艺.png"
import huaweiImage from "@/assets/image/index2/lottery/华为手表.png"
import huafeiImage from "@/assets/image/index2/lottery/话费.png"
import pingbanImage from "@/assets/image/index2/lottery/平板.png"
import arrowImage from "@/assets/image/index2/lottery/进入(1) 拷贝 6.png"

import titleImagel from "@/assets/image/index2/lottery/亿联邀您来抽奖.png"



import myLottery from "./my-lottery"


const PRIZE_LIST = 6
const CIRCLE_ANGLE = 360

export default {
    components: {
        lotteryResult,
        myLottery
    },
    data() {
        return {
            titleImagel,
            jiluImage,
            bgImage,
            goImage,
            turntableImage,
            titleImage,
            aiqiyiImage,
            huaweiImage,
            huafeiImage,
            pingbanImage,
            arrowImage,
            showLotteryResult: false,
            showMyLottery: false,
            lottery: [
                {
                    id: 0,
                    name: "再接再厉"
                },
                {
                    id: 1,
                    name: "5元话费"
                },
                {
                    id: 2,
                    name: "爱奇艺视频会员"
                },
                {
                    id: 3,
                    name: "华为儿童画手表"
                },
                {
                    id: 4,
                    name: "5元话费"
                },
                {
                    id: 5,
                    name: "Apple ipad"
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
    methods: {
        
        async go() {
            // 防止重复点击
            if(this.isRotating) {
                return
            }
            
            this.index = Math.floor(Math.random() * 6 )

            // console.log(this.index)

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

            this.showLotteryResult = true //显示对应的奖品
        },

        againLottery() {
            this.showLotteryResult = false
            this.showMyLottery= false
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

    background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
    background-position: center bottom;

    display: flex;
    flex-direction: column;
    align-items: center;

    .shuomin{
        font-size: rem(30);
        color: #ffffff;
        // height: rem(44);
        display: flex;
        width: 100%;
        padding: rem(30) rem(60) rem(30) 0;
        justify-content: flex-end;

        .shuomin-btn{
            width: rem(218);
            height: rem(44);
            border: 1px solid #ffffff;
            background: #3f80ff;
            border-radius: rem(42);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .title-image{
        width: rem(478);
        height: rem(108);
    }

    .image{
        width: 100%;
    }
    
    .header-top{
        // position: absolute;
        // left: 50%;
        // transform: translateX(-50%);
        // top: rem(50);

        margin: rem(20) 0;
        width: rem(490);
        padding: rem(6);
        border: 1px solid #46aef7;
        height: rem(70);
        border-radius: rem(10);
        background: #0053f9;
        display: flex;
        .left{
            font-size: rem(24);
            color: #ffffff;
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
            width: rem(240);
            color: #ffffff;
            border: 1px solid #ffffff;
            background: #3f80ff;
            border-radius: 100px;
            font-size: rem(24);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .content{
        height: rem(628);
        position: relative;
        margin-top: rem(20);
        // position: absolute;
        // left: 50%;
        // top: 40%;
        // transform: translate(-50%,-50%);
        .go{
            width: rem(171);
            height: rem(209);
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

    .jilu{
        flex: 1;
        width: rem(570);
        background: #4584ff;
        margin-bottom: rem(20);
        padding: rem(15);
        border-radius: rem(10);
        overflow-y: scroll;
        .jilu-content{
            background: #ffffff;
            height: 100%;
            overflow-y: scroll;
            border-radius: rem(10);
            .top{
                padding: rem(20) 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .left,.right{
                    width: rem(72);
                    height: rem(26);
                    transform: translateY(rem(3));
                }
                .right{
                    transform: translateY(rem(3)) rotate(180deg);
                }
                .title{
                    padding: 0 rem(20);
                    font-size: rem(40);
                    color: #f66436;
                }
            }
            .list{
                font-size: rem(30);
                display: flex;
                padding: rem(10) rem(20);

                .left{
                    width: rem(300);
                }
                .right{
                    flex: 1;
                }
            }
        }
    }


}
</style>