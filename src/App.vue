<!--
 * @Author: your name
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-16 09:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\App.vue
-->
<template>
    <div id="app">
        <index-0 v-if="indexState === 0 && !loading"></index-0>
        <index-1 v-if="indexState === 1 && !loading"></index-1>
        <index-2 v-if="indexState === 2 && !loading"></index-2>
        <index-3 v-if="indexState === 3 && !loading"></index-3>
        <index-4 v-if="indexState === 4 && !loading"></index-4>
        <index-5 v-if="indexState === 5 && !loading"></index-5>

        <v-loading v-if="loading" :progress="progress" :tips="loadingTips"></v-loading>

    </div>
</template>

<script>
import Index0 from "@/views/Index0"
import Index1 from "@/views/Index1"
import Index2 from "@/views/Index2"
import Index3 from "@/views/Index3"
import Index4 from "@/views/Index4"
import Index5 from "@/views/Index5"
import Loading from '@/components/loading'

import { mapState } from "vuex"
import { Loader } from 'resource-loader'
import { IMAGE_URLS } from "@/assets/js/constants"

export default {
    components: {
        Index0,
        Index1,
        Index2,
        Index3,
        Index4,
        Index5,
        "v-loading": Loading
    },
    data() {
      return {
        loadingTips: "程序加载中",
        loading: true,
        progress: 0
      }
    },
    mounted() {
      let loader = new Loader()

      Object.keys(IMAGE_URLS).forEach(name => {
        loader.add(name, IMAGE_URLS[name])
      })

      loader.onProgress.add(() => {
        this.progress = Math.round(loader.progress)
      })

      loader.onComplete.add(() => {
        setTimeout(() =>{
          this.loading = false

          let loading = document.querySelector("#apploading")
          loading.remove()
        },20)
      })
      loader.load()
      window.loader = loader
        
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
    overflow-y: scroll;
    width: 100% !important;
}

@import url("./assets/style/reset.scss");

</style>
