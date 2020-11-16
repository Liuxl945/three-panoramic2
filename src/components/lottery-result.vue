<!--
 * @Author: your name
 * @Date: 2020-11-14 10:39:44
 * @LastEditTime: 2020-11-14 11:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\lottery-result.vue
-->

<template>
    <div class="modal lottery-result" v-if="show">
        <div class="bg-image">

            <div class="gongxi-image">
                <img class="image" :src="yihanImage" v-if="index === 0">
                <img class="image" :src="gongxiImage" v-else>
            </div>
            <!-- 奖品图片 -->
            <div class="aiqiyi-image">
                <img class="image" :src="lotteryImage">
            </div>
            
            <div class="btn">
                <div class="left" @click="again">
                    <img class="image" :src="zailaiImage">
                </div>
                <div class="width" v-if="index !== 0 "></div>
                <div class="right" @click="receive" v-if="index !== 0 ">
                    <img class="image" :src="lingquImage">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import gongxiImage from "@/assets/image/index2/lottery/恭喜您.png"
import aiqiyiImage from "@/assets/image/index2/lottery/会员月卡.png"
import huaweiImage from "@/assets/image/index2/lottery/儿童手表.png"
import huafeiImage from "@/assets/image/index2/lottery/浮窗.png"
import pingbanImage from "@/assets/image/index2/lottery/APPLE IPAD.png"
import lingquImage from "@/assets/image/index2/lottery/立即领取1.png"
import zailaiImage from "@/assets/image/index2/lottery/再来一次1.png"
import yihanbgImage from "@/assets/image/index2/lottery/很遗憾bg.png"
import yihanImage from "@/assets/image/index2/lottery/很遗憾.png"

export default {
    // 1== 5元话费  
    props: {
        show: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 1 
        }
    },
    data() {
        return {
            gongxiImage,
            yihanImage,
            aiqiyiImage,
            huaweiImage,
            huafeiImage,
            pingbanImage,
            lingquImage,
            zailaiImage,
        }
    },
    methods: {
        again() {
            this.$emit("again")
        },
        receive() {
            
        }
    },
    computed: {
        lotteryImage() {
            return  this.index === 0 ? yihanbgImage : 
                    this.index === 1 ? huafeiImage : 
                    this.index === 2 ? aiqiyiImage : 
                    this.index === 3 ? huaweiImage : 
                    this.index === 4 ? huafeiImage : 
                    
                    this.index === 5 ? pingbanImage : ""
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/style/modal.scss");
@function rem($n){
  @return $n/(200)+rem;
}

.lottery-result{
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: rem(658);
    }
    .gongxi-image{
        width: rem(316);
        height: rem(76);
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .aiqiyi-image{
        width: rem(658);
        height: rem(713);
    }
    .image{
        width: 100%;
    }
    .btn{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: rem(60);
        display: flex;
        .width{
            width: rem(50);
        }
        .left,.right{
            width: rem(204);
            height: rem(55);
        }
    }
}

</style>