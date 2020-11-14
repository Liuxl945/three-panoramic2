<!--
 * @Author: your name
 * @Date: 2020-11-14 13:36:26
 * @LastEditTime: 2020-11-14 13:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\rongyu.vue
-->


<template>
    <modal-common :titleImage="titleImage" ref="modal">
        <div class="rongyu">
            
        </div>
    </modal-common>
</template>

<script>

import titleImage from "@/assets/image/index2/rongyu/荣誉成绩.png"

import modalCommon from "./modal-common2"

export default {
    components: {
        modalCommon
    },
    data() {
        return {
            titleImage,
        }
    },
    mounted() {
        this.show()
    },
    methods: {
        show() {
            if(this.$refs.modal.show) {
                return
            }
            this.$refs.modal.show = true
        }
    }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}
</style>