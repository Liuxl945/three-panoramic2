<!--
 * @Author: your name
 * @Date: 2020-11-16 09:04:25
 * @LastEditTime: 2020-11-16 12:05:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\views\Main.vue
-->


<template>
    <div class="index0">
      <div class="bg-image">
        <img class="image" :src="bgImage" >
        <div class="go-index">
          <div class="go-index1" @click="gotoIndex1"></div>
          <div class="go-index2" @click="gotoIndex2"></div>
          <div class="go-index3" @click="gotoIndex3"></div>
          <div class="go-index4" @click="gotoIndex4"></div>
        </div>
      </div>
      <div class="logo">
        <img class="image" :src="logoImage" >
      </div>

      <div class="prize">
        <img class="image" :src="prizeImage" >
      </div>

      <div class="rule">
        <img class="image" :src="ruleImage" >
      </div>
    </div>
</template>

<script>

import bgImage from "@/assets/image/组229.png"
import logoImage from "@/assets/image/图层528.png"
import ruleImage from "@/assets/image/游戏规则.png"
import prizeImage from "@/assets/image/我的奖品.png"

export default {
  name: "index0",
  data() {
    return {
      bgImage,
      logoImage,
      ruleImage,
      prizeImage,
    }
  },
  methods: {
    gotoIndex1() {
      this.$store.commit("SET_INDEX",1)
    },
    gotoIndex2() {
      alert("敬请期待")
    },
    gotoIndex3() {
      alert("敬请期待")
    },
    gotoIndex4() {
      alert("敬请期待")
    }
  }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.index0{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  .image{
    width: 100%;
  }
  .bg-image{
    width: rem(750);
  }
  .logo{
    width: rem(477);
    height: rem(270);
    position: absolute;
    top: rem(300);
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
  }

  .prize,
  .rule{
    z-index: 10;
    width: rem(207);
    height: rem(65);
    position: absolute;
    right: 0;
    top: rem(600);
  }
  .prize{
    top: rem(680);
  }
}

.go-index{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: rem(746);

  .go-index1,
  .go-index2,
  .go-index3,
  .go-index4 {
    width: 100%;
    height: rem(600);
  }
  
}

</style>