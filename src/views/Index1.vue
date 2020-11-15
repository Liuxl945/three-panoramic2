
<!--
 * @Author: 刘学良
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-13 11:27:36
 * @LastEditors: Please set LastEditors
 * @Description: 场景动画
 * @FilePath: \three-panoramic2\src\App.vue
-->

<template>
    <div id="index1"  class="index-common" :style="'background-image: url('+ backgroundImage +');'">

        <img class="background-image" :src="backgroundImage" alt="" srcset="">
        <div class="avatar-image">
            <img class="image" :src="avatarImage" alt="" srcset="">
        </div>
        

        <div class="logo">
            <img class="image" :src="logoImage" alt="logo">
        </div>
        <div class="title">
            <img class="image" :src="titleImage" alt="title">
        </div>
        <div class="btn" @click="gotoIndex3">
            <img class="image" :src="btnImage" alt="btn">
        </div>
    </div>
</template>

<script>

import backgroundImage from "@/assets/image/index1/色相_饱和度1.png"
import titleImage from "@/assets/image/index1/组12.png"
import btnImage from "@/assets/image/index1/组11.png"
import logoImage from "@/assets/image/index1/logo.png"
import avatarImage from "@/assets/image/index1/色相_饱和度1拷贝.png"

export default {
    name: "index2",
    data() {
        return {
            backgroundImage,
            titleImage,
            btnImage,
            logoImage,
            avatarImage
        }
    },
    methods: {
        gotoIndex3() {
            this.$store.commit("SET_INDEX", 3)
        }
    }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}


#index1{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f0f0f0;
	transform: none;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
    background-position: center bottom;

    .background-image{
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
    }
}

.avatar-image{
    width: rem(277);
    height: rem(462);
    left: 50%;
    transform: translateX(-50%);
    bottom: rem(260);
}

.logo{
    width: rem(307);
    height: rem(68);
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: rem(96);
}
.title{
    width: rem(677);
    height: rem(397);
    top: rem(220);
    left: 50%;
    transform: translateX(-50%);
}
.btn{
    width: rem(750);
    height: rem(344);
    bottom: rem(10);
}
.btn,
.logo,
.avatar-image,
.title {
    position: absolute;
    .image{
        width: 100%;
    }
}
</style>