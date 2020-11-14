<!--
 * @Author: your name
 * @Date: 2020-11-14 13:36:26
 * @LastEditTime: 2020-11-14 13:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\gongyi.vue
-->


<template>
    <modal-common :titleImage="titleImage">
        <div class="gongyi">
        </div>
    </modal-common>
</template>

<script>

import titleImage from "@/assets/image/index2/gongyi/公益事业.png"

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
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}
</style>