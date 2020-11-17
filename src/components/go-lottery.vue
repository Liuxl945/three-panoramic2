<!--
 * @Author: your name
 * @Date: 2020-11-17 08:37:36
 * @LastEditTime: 2020-11-17 09:56:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\go-lottery.vue
-->
<template>
<transition name="fade">
    <div class="modal-common modal " v-if="show">
        <div class="lotery" @touchstart.stop @click.stop="lotery">
            
            <img class="image lotterImage" :src="lotterImage" >
            <img class="image lotterImage2" :src="lotterImage2" >
            <img class="image lotterImage3" :src="lotterImage3" >
            <img class="image lotterImage4" :src="lotterImage4" >
        </div>
    </div>
</transition>
</template>



<script>

import lotterImage from "@/assets/image/index2/lottery/恭喜您.png"
import lotterImage2 from "@/assets/image/index2/lottery/分享修改文字.png"
import lotterImage3 from "@/assets/image/index2/lottery/去抽奖.png"
import lotterImage4 from "@/assets/image/index2/lottery/邀请好友参观.png"

export default {
    data() {
        return {
            show: false,
            
            lotterImage,
            lotterImage2,
            lotterImage3,
            lotterImage4,
        }
    },
    methods: {
        lotery() {
            this.$store.commit("SET_INDEX", 4)
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/style/modal.scss");
@function rem($n){
  @return $n/(200)+rem;
}


.lotery{
    width: rem(658);
    height: rem(713);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .image{
        position: absolute;
    }
    .lotterImage{
        width: rem(316);
        height: rem(76);
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10;
    }
    .lotterImage2{
        width: rem(658);
        height: rem(713);
    }
    .lotterImage3{
        width: rem(455);
        height: rem(67);
        position: absolute;
        bottom: rem(180);
        left: 50%;
        transform: translateX(-50%);
    }
    .lotterImage4{
        width: rem(455);
        height: rem(67);
        bottom: rem(80);
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>