<!--
 * @Author: your name
 * @Date: 2020-11-14 09:36:55
 * @LastEditTime: 2020-11-17 10:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\card.vue
-->


<template>
    <transition name="fade">
        <modal-common :titleImage="titleImage" ref="modal">
            <div class="card">
                <!-- 领取卡片 -->

                <div class="card-iamge">
                    <img class="image" :src="cardImage" >
                </div>

                <div class="gonxi-image">
                    <img class="image" :src="gonxiImage" >
                </div>
                
                <div class="lingqu-image" @click="lingqu">
                    <img class="image" :src="lingquImage" >
                </div>
            </div>
        </modal-common>
    </transition>
</template>

<script>

import titleImage from "@/assets/image/index2/card/神秘卡片.png"

import cardImage0 from "@/assets/image/index2/card/有.png"
import cardImage1 from "@/assets/image/index2/card/恩.png"
import cardImage2 from "@/assets/image/index2/card/感.png"
import cardImage3 from "@/assets/image/index2/card/您.png"
import cardImage4 from "@/assets/image/index2/card/联.png"
import cardImage5 from "@/assets/image/index2/card/亿.png"

import gonxiImage from "@/assets/image/index2/card/恭喜您获得.png"
import lingquImage from "@/assets/image/index2/card/领取卡片.png"

import modalCommon from "./modal-common"

export default {
    components: {
        modalCommon
    },
    data() {
        return {
            titleImage,
            gonxiImage,
            lingquImage,
            cardImage0,
            cardImage1,
            cardImage2,
            cardImage3,
            cardImage4,
            cardImage5,
            cardImage: cardImage0
        }
    },
    methods: {
        show() {
            if(this.$refs.modal.show) {
                return
            }
            this.$refs.modal.show = true

            this.getCard()
        },
        lingqu() {
            alert("领取成功")
            this.$refs.modal.show = false
        },
        getCard() {
            this.index = Math.ceil(Math.random()* 6)

            console.log(this.index)
            
            this.cardImage =  this[`cardImage${this.index}`]
        }
    }
}
</script>

<style lang="scss" scoped>

@function rem($n){
  @return $n/(200)+rem;
}

.card{
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .card-iamge{
        width: rem(304);
        height: rem(304);

    }
    .image{
        width: 100%;
    }
    .gonxi-image{
        margin: rem(50) 0;
        width: rem(346);
        height: rem(108);
    }
    .lingqu-image{
        margin-top: rem(100);
        width: rem(237);
        height: rem(64);
    }
}
</style>