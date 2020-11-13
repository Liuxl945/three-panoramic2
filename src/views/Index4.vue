<template>
    <div id="index4" class="index-common">
        <lottery></lottery>
    </div>
</template>

<script>
import lottery from "@/components/lottery"
export default {
    name: "index4",
    components: {
        lottery
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