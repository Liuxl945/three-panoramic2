<template>
    <div id="index2" class="index-common" :style="'background-image: url('+ backgroundImage +')'">
        <div class="logo">
            <img class="image" :src="logoImage" alt="logo">
        </div>
        <div class="title">
            <img class="image" :src="titleImage" alt="title">
        </div>
        <div class="btn" >
            <img class="image" :src="btnImage" alt="btn">
        </div>
    </div>
</template>

<script>

import backgroundImage from "@/assets/image/index2/背景.png"
import titleImage from "@/assets/image/index2/组7.png"
import btnImage from "@/assets/image/index2/组5.png"
import logoImage from "@/assets/image/index1/logo.png"

export default {
    name: "index2",
    data() {
        return {
            backgroundImage,
            titleImage,
            btnImage,
            logoImage,
        }
    }
}
</script>


<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.index-common{
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
    bottom: rem(90);
}
.btn,
.logo,
.title {
    position: absolute;
    .image{
        width: 100%;
    }
}
</style>