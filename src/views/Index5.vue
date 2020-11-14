<!--
 * @Author: your name
 * @Date: 2020-11-14 11:36:12
 * @LastEditTime: 2020-11-14 13:51:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\views\Index5.vue
-->

<template>
    <div id="index5" class="index-common">
        <history></history>
        <!-- <yewu></yewu> -->
        <!-- <gongyi></gongyi> -->
    </div>
</template>

<script>
import history from "@/components/history"
import yewu from "@/components/yewu"
import gongyi from "@/components/gongyi"
export default {
    name: "index5",
    components: {
        history,
        yewu,
        gongyi
    }
}
</script>

<style lang="scss" scoped>
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
</style>