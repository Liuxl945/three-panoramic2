<!--
 * @Author: your name
 * @Date: 2020-11-14 13:36:26
 * @LastEditTime: 2020-11-17 18:15:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\kejishili.vue
-->


<template>
    <modal-common :titleImage="titleImage" ref="modal">
        <div class="kejishili">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="title-image">
                            <img class="image" :src="titleImage1" >
                        </div>
                        
                        <div class="list">
                            <div class="list-image">
                                <img class="image" :src="listImage1" >
                            </div>
                            <p>按照两地六中心跨地域分布式多活IT架构设计，适应我行的互联网渠道业务特点，采用客户注册地就近原则。服务请求接入时，我行跨地域分布式多活架构体系能够支持按客户、区域在不同数据中心进行均衡的分流访问和处理。</p>

                            <div class="list-image">
                                <img class="image" :src="listImage2" >
                            </div>
                            
                            <p>我行私有云架构全面采用开源技术建设，通过自主设计、自主建设、自主运维方式，达到私有云技术完全自主可控。整体架构按照数据中心级多活设计，数据库层采用分布式多数派机制进行跨数据中心部署 ，应用层采用分布式服务网格框架实现跨中心多活路由，通过分布式数据库部署和应用微服务分布式网格架构改造，实现了单台设备、一个机柜、一个数据中心级别故障都可以让业务不受影响。</p>


                            <div class="list-image">
                                <img class="image" :src="listImage3" >
                            </div>

                            <p>亿联银行基于银行业务架构和监管要求，合理利用大数据来制定运营策略，着力提升效率。我们目前连接合作的平台(商户)超过70家，累计服务客户超过1000万，其中99%的业务均可线上完成，平均每秒完成86笔完整交易；一次完整的贷款客户授信过程仅需10秒就可完成19个审核步骤，进行73次系统间交互；统一支付和智能路由的应用使系统根据成功率、回盘时间、交易费用等指标智能选择支付通道，代付成功率大于99.9%，结果准确率100%。</p>
                        </div>
                    </div>


                    <div class="swiper-slide">
                        <div class="title-image">
                            <img class="image" :src="titleImage1" >
                        </div>
                        
                        <div class="jiegou-image">
                            <img class="image" :src="list2Image1" >
                        </div>
                        

                        <div class="list">
                            <div class="list-image">
                                <img class="image" :src="list2Image2" >
                            </div>
                            
                            <p>大数据应用依托先进的分布式架构，具有在线/离线数据采集、海量数据加工和存储、数据资产建设、数据资产管理等能力，同时依靠多种数据分析工具，实现全行结构化、非结构化、半结构化数据的集中共享、分析挖掘和信息联动。通过发掘业务应用亮点，深入挖掘数据价值，实现数据价值提升和市场精准定位，支持数据化产品的创新和应用。</p>

                            <p>AI引擎在以数据管理、数据分析挖掘为基础，以数据标签化应用为核心的数据中台服务架构之上，架设出集合AI算法平台、ASR语音转译、NLP自然语义理解、OCR人脸识别等智能应用功能的AI中台，可满足针对智能风控、智能营销、智能客服、智能投顾、智能网点、智能运营等诸多互联网新型银行发展的新需求，提供更丰富、更精准、体验更极致的客户服务。</p>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="title-image">
                            <img class="image" :src="titleImage3" >
                        </div>
                        
                        <div class="jiegou-image">
                            <img class="image" :src="list3Image1" >
                        </div>
                        

                        <div class="list">
                            
                            <p>亿联银行数字化开放银行系统，是以互联、开放、合作、共享为基本理念，结合自身特点，依托分布式+私有云、大数据+人工智能、微服务+数据动态路由等前沿信息技术进行构建的，逐渐形成了面向未来、智能安全、可弹性伸缩的S.M.A.R.T总体应用架构。</p>

                            <div class="item" v-for="item in centerData">
                                <div class="left">
                                    <img class="image" :src="circleImage">
                                </div>
                                <div class="right">
                                    <p>{{item.value}}</p>
                                </div>
                            </div>

                            <p>通过SMART架构的顶层设计，实现了从前到后“敏”+“稳”的服务分层，从而能够根据各类业务场景快速组合出适合我行业务发展的金融产品，使得业务与信息科技系统能够更好的相互融合、相互促进。</p>
                        </div>
                    </div>
                </div>
            </div>

            <img class="left-arrow image" :src="leftImage" @click="slidePrev">
            <img class="right-arrow image" :src="leftImage" @click="slideNext">
        </div>
    </modal-common>
</template>

<script>

import titleImage from "@/assets/image/index2/kejishili/科技实力.png"
import titleImage1 from "@/assets/image/index2/kejishili/标题.png"
import titleImage3 from "@/assets/image/index2/kejishili/标题12.png"
import listImage1 from "@/assets/image/index2/kejishili/跨地域多活架构.png"
import listImage2 from "@/assets/image/index2/kejishili/私有云.png"
import listImage3 from "@/assets/image/index2/kejishili/数字化运营.png"

import list2Image1 from "@/assets/image/index2/kejishili/曲线1拷贝.png"
import list2Image2 from "@/assets/image/index2/kejishili/大数据和AI引擎.png"
import list3Image1 from "@/assets/image/index2/kejishili/曲线1.png"
import circleImage from "@/assets/image/index2/kejishili/椭圆5.png"

import modalCommon from "./modal-common"
import Swiper from "swiper"

import arrowMixin from "./arrow-mixin"

export default {
    mixins: [arrowMixin],
    components: {
        modalCommon
    },
    data() {
        return {
            titleImage,
            titleImage1,
            titleImage3,
            listImage1,
            listImage2,
            listImage3,
            list2Image1,
            list2Image2,
            list3Image1,
            circleImage,
            centerData: [
                {
                    value: "在Service服务层深度挖掘客户需求，不断推出解决客户“痛点”的金融服务；"
                },
                {
                    value: "在Mobile移动渠道层积极创新，把客户体验做到极致；"
                },
                {
                    value: "在AI人工智能引擎层勇于把AI与传统应用相结合，用AI颠覆传统金融；"
                },
                {
                    value: "在Resource能力资源层继续加快完成各类能力服务系统的建设，不断扩大资源能力池，为人工智能引擎打好基础；"
                },
                {
                    value: "在Technology技术平台层，采用主流技术与创新技术相结合的方式为全行应用系统做好支撑；"
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
.kejishili{
    height: 75vh;
    overflow-y: scroll;
    .image{
        width: 100%;
    }
    .left-arrow,
    .right-arrow{
        position: absolute;
        top: 50%;
        height: auto;
        // left: rem(-100);
        width: rem(100);
        z-index: 10;
    }
    .right-arrow{
        right: 0;
        transform: rotate(180deg);
    }
    
    .title-image{
        width: rem(567);
        height: rem(57);
        margin: rem(20) 0;
    }
    .swiper-slide{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .jiegou-image{
        width: rem(580);
        height: rem(205);
    }
    .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 rem(50);
        font-size: rem(30);
        text-align: justify;
        color: #ffffff;
        line-height: rem(44);

        .list-image{
            margin: rem(20) 0;
            .image{
                height: rem(68);
                width: auto;
            }
        }

        .item{
            &:first-of-type{
                margin-top: rem(10);
            }
            display: flex;
            margin-bottom: rem(10);
            .left{
                width: rem(15);
                transform: translateY(rem(14));
            }
            .right{
                padding-left: rem(20);
                flex: 1;
                font-size: rem(26);
            }
        }
    }
}

</style>