<!--
 * @Author: your name
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-13 11:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\App.vue
-->
<template>
    <div id="app">
        <index-1 v-if="indexState === 1"></index-1>
        <index-2 v-if="indexState === 2"></index-2>
        <index-3 v-if="indexState === 3"></index-3>
        <index-4 v-if="indexState === 4"></index-4>
    </div>
</template>

<script>
import Index1 from "@/views/Index1"
import Index2 from "@/views/Index2"
import Index3 from "@/views/Index3"
import Index4 from "@/views/Index4"

import { mapState } from "vuex"

export default {
    components: {
        Index1,
        Index2,
        Index3,
        Index4
    },
    computed: {
        ...mapState({
            indexState: state => state.indexState,
        })
    }
}
</script>

<style lang="scss">

html,
body {
  font-family: Hiragino Sans GB, \5fae\8f6f\96c5\9ed1, "Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  line-height: 1;
  color: #333;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img{
  vertical-align: top;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

#app{
    height: 100%;
    overflow: hidden;
    width: 100% !important;
}

@import url("./assets/style/reset.scss");

</style>
