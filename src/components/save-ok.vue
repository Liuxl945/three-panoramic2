<!--
 * @Author: your name
 * @Date: 2020-11-17 17:16:57
 * @LastEditTime: 2020-11-17 19:05:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\save-ok.vue
-->

<template>
    <div class="modal-common modal " v-if="show">
        <div class="save-ok">
            <div class="bg-image">
                <img class="image" :src="bgImage" alt="">
            </div>
            <div class="btn-image" @click="lotery">
                <img class="image" :src="btnImage" alt="">
            </div>
            <div class="close-image" @click="close">
                <img class="image" :src="closeImage" alt="">
            </div>
        </div>
    </div>
</template>

<script>

import btnImage from "@/assets/image/cube/组19.png"
import bgImage from "@/assets/image/cube/2.5d.png"
import closeImage from "@/assets/image/index2/history/关闭.png"

export default {

    data() {
        return {
            show: false,
            btnImage,
            bgImage,
            closeImage,
        }
    },
    methods: {
        lotery() {
            // this.$store.commit("SET_INDEX", 4)
            this.$emit("comfirm")
            this.show = false
        },
        close() {
            
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

.save-ok{
    width: rem(601);
    height: rem(573);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .image{
        width: 100%;
    }
    .bg-image{
        width: rem(601);
        height: rem(573);
    }
    .close-image{
        width: rem(46);
        height: rem(46);
        top: rem(-46);
        right: rem(-46);
        position: absolute;
    }

    .btn-image{
        width: rem(523);
        height: rem(86);
        position: absolute;
        left: 50%;
        bottom: rem(50);
        transform: translateX(-50%);
    }
}

</style>