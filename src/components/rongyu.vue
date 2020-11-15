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
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        
                        <div class="title-image">
                            <img class="image" :src="titleImage1" >
                        </div>

                        <div class="list" v-for="item in listData">
                            <div class="left-image">
                                <img class="image" :src="circleImage" >
                            </div>
                            <div class="right">
                                <p>{{item.value}}</p>
                            </div>
                        </div>

                    </div>

                    <div class="swiper-slide">
                        <div class="title-image">
                            <img class="image" :src="titleImage2" >
                        </div>
                        <div class="list-image">
                            <img class="image" :src="list2Image" >
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </modal-common>
</template>

<script>

import titleImage from "@/assets/image/index2/rongyu/荣誉成绩.png"
import titleImage1 from "@/assets/image/index2/rongyu/标题.png"
import titleImage2 from "@/assets/image/index2/rongyu/标题2.png"
import circleImage from "@/assets/image/index2/kejishili/椭圆 5.png"
import list2Image from "@/assets/image/index2/rongyu/组 15.png"

import modalCommon from "./modal-common2"

import Swiper from "swiper" 

export default {
    components: {
        modalCommon
    },
    data() {
        return {
            titleImage,
            titleImage1,
            titleImage2,
            circleImage,
            list2Image,
            listData: [
                {
                    value: "获国家级高新技术企业认证"
                },
                {
                    value: "中国银保监会，“2018年度银行业信息科技风险管理课题二类成果奖”"
                },
                {
                    value: "中国人民银行，2018年度银行“科技发展三等奖”"
                },
                {
                    value: "中国金融认证中心（CFCA），2019中国电子银行金榜奖“最佳开发银行创新奖”，“亿农贷”荣获创新应用银奖；“2020中国金融科技创新大赛”，荣膺最高荣誉，评审团推荐-全场荣耀奖"
                },
                {
                    value: "新华网，2019年、2020年获“金融行业优秀创新案例奖”"
                },
                {
                    value: "《当代金融家》、华夏经济学研究发展基金会，2019年“最佳数字银行奖”"
                },
                {
                    value: "《证券时报》，2019中国智能消费金融先锋上榜银行"
                },
                {
                    value: "《投资时报》，“金禧奖·2019最佳数字化银行”、2020年优秀产品开发能力奖"
                },
                {
                    value: "《中国经营报》“2019卓越竞争力互联网金融银行奖”"
                },
                {
                    value: "华夏机构投资者年会，暨第十三届金蝉奖“2019年度金融科技创新银行”奖"
                },
                {
                    value: "国际零售银行家（RBI），“2020年度最佳创新产品奖”"
                }
            ]
        }
    },
    methods: {
        show() {
            if(this.$refs.modal.show) {
                return
            }
            this.$refs.modal.show = true

            setTimeout(() => {
                this.initSwiper()
            }, 20)
        },
        initSwiper() {
            this.swiper = new Swiper(".swiper-container", {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: true
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.rongyu{
    height: 70vh;
    overflow-y: scroll;
    .image{
        width: 100%;
    }
    .swiper-slide{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title-image{
        width: rem(444);
        height: rem(48);
        margin: 0 0 rem(40) 0;
        .image{
            height: rem(48);
            width: auto;
        }
    }
    .list{
        display: flex;
        width: 100%;
        overflow: hidden;
        padding: 0 rem(40);
        margin-bottom: rem(20);
        .left-image{
            width: rem(15);
            height: rem(15);
            transform: translateY(rem(6));

        }
        .right{
            padding-left: rem(20);
            color: #ffffff;
            flex: 1;
            line-height: rem(36);
            font-size: rem(30);
            text-align: justify;
        }

        
    }
    .list-image{
        width: rem(475);
    }
}
</style>