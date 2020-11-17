<!--
 * @Author: your name
 * @Date: 2020-11-16 09:04:25
 * @LastEditTime: 2020-11-17 18:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\views\Main.vue
-->


<template>
    <div class="index0" :style="indexStyle">
      <div class="bg-image">
        <img class="image" :src="bgImage" >
        <div class="go-index">
          <div class="go-index1" @click="gotoIndex1"></div>
          <div class="go-index2" @click="gotoIndex2"></div>
          <div class="go-index3" @click="gotoIndex3"></div>
          <div class="go-index4" @click="gotoIndex4"></div>
        </div>
      </div>

      <div class="info">
        <div class="logo">
          <img class="image" :src="logoImage" >
        </div>

        <div class="btn" @click="show">
          <div class="rule">
            <img class="image rule-image" :src="ruleImage" >
          </div>

          <div class="prize">
            <img class="image prize-image" :src="prizeImage" >
          </div>

        </div>
      </div>
      

      
      <rules ref="showRule" @again="againLottery"></rules>
      <my-lottery :show="showMyLottery" @again="againLottery"></my-lottery>
    </div>
</template>

<script>

import bgImage from "@/assets/image/组229.png"
import logoImage from "@/assets/image/图层528.png"
import ruleImage from "@/assets/image/游戏规则.png"
import prizeImage from "@/assets/image/我的奖品.png"

import myLottery from "@/components/my-lottery"
import rules from "@/components/rules2"
export default {
  components: {
    myLottery,
    rules
  },
  name: "index0",
  data() {
    return {
      bgImage,
      logoImage,
      ruleImage,
      prizeImage,
      showMyLottery: false,
      showrules: false
    }
  },
  computed: {
    indexStyle() {
      return this.showMyLottery || this.showrules ? "overflow-y: hidden;" : ""
    }
  },
  methods: {
    show(e) {

      if( e.target.className === "image rule-image") {
        this.$refs.showRule.show = true
        this.showrules = true // 为了indexStyle改变值
        
      }else if( e.target.className === "image prize-image") {
        this.showMyLottery = true
      }
    },
    againLottery() {
      this.showMyLottery = false
      this.showrules = false
    },
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

  .info{
    width: rem(750);
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    padding-top: rem(260);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .logo{
    width: rem(477);
    height: rem(270);
  }

  .btn{
    width: rem(750);
    position: relative;
    z-index: 15;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
  }

  .prize,
  .rule{
    width: rem(207);
    height: rem(65);
    margin-top: rem(20);
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