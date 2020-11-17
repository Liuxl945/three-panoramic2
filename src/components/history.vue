<!--
 * @Author: your name
 * @Date: 2020-11-14 09:36:55
 * @LastEditTime: 2020-11-17 18:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\history.vue
-->


<template>
    <modal-common :titleImage="titleImage" ref="modal">
        <div class="history">

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="data in historyData">
                        <div class="title-image">
                            <img class="image" :src="data.image">
                        </div>

                        <div class="list" v-for="item in data.list">
                            <div class="left">
                                <div class="circle-image">
                                    <img class="image" :src="circleImage">
                                </div>
                                
                                <div class="line"></div>
                            </div>

                            <div class="right">
                                <h3 class="title">{{item.title}}</h3>
                                <p class="detail">{{item.value}}</p>
                            </div>
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
import titleImage from "@/assets/image/index2/history/发展历程.png"
import dahaiImage from "@/assets/image/index2/history/图层505.png"
import qihanImage from "@/assets/image/index2/history/图层506.png"
import pokeImage from "@/assets/image/index2/history/图层507.png"
import circleImage from "@/assets/image/index2/history/椭圆4.png"

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
            dahaiImage,
            qihanImage,
            pokeImage,
            circleImage,
            historyData: [
                {
                    image: dahaiImage,
                    list: [
                        {
                            title: "2019年8月20日",
                            value: "亿联银行与京东数科签署了全面战略合作协议。"
                        },
                        {
                            title: "2019年9月",
                            value: "亿联银行荣获国家级高新技术企业认定。"
                        },
                        {
                            title: "2019年9月",
                            value: "亿联银行荣获国家级高新技术企业认定。"
                        },
                        {
                            title: "2020年1月14日",
                            value: "亿联银行首个平台类互联网线上个人经营贷款产品——美团生意贷正式获批，标志亿联银行普惠金融服务能力、地方经济支持能力进一步增强。"
                        },
                        {
                            title: "2020年3月",
                            value: "亿联银行首个自营个人消费贷款产品——亿贷成功推出；标志着亿联银行自营渠道的产品服务能力进一步加强。"
                        },
                        {
                            title: "2020年4月",
                            value: "亿联银行与百度签署战略合作协议。"
                        },
                        {
                            title: "未来",
                            value: "亿联银行将聚焦普惠金融，坚守发展使命，成为真正意义上的赋能美好生活的数字银行。"
                        }
                    ]
                },
                {
                    image: qihanImage,
                    list: [
                        {
                            title: "2018年5月14日 ",
                            value: "为解决小微企业融资难问题，亿联银行与吉林省地方税务局、微众税银共同合作开发的“易税贷”产品正式投产上线。"
                        },
                        {
                            title: "2018年6月",
                            value: "亿联银行首款消费贷产品获批，成为全国仅有的四家获批线上信贷业务的互联网银行之一。"
                        },
                        {
                            title: "2018年7月18日",
                            value: "亿联银行在美团点评上线第一个平台合作个人消费贷款产品——亿联易贷，这是既是亿联银行业务快速发展的起点，也是开放银行广泛链接模式"
                        },
                        {
                            title: "2018年8月9日",
                            value: "总行营业部正式对外营业，这是助力地方经济、服务本地客户的主阵地。"
                        },
                        {
                            title: "2018年8月29日",
                            value: "第一款平台存款产品“增亿存”在京东金融上线，负债业务进入加速发展期。"
                        },
                        {
                            title: "2018年9月28日",
                            value: "亿联银行亿金山系统上线，可为公司客户/个人客户提供全流程、专业化和个性化的综合金融服务解决方案，亿联开放银行模式有了更稳固、更"
                        },
                        {
                            title: "2018年11月23日",
                            value: "亿联银行“亿农贷”产品完成首笔投放，这是亿联惠农金融业务的开端，也是科技创新金融产品服务地方经济的发端。"
                        }
                    ]
                },
                {
                    image: pokeImage,
                    list: [
                        {
                            title: "2014年11月",
                            value: "中发集团董事局主席戴皓一行拜访省、市政府领导，提出设立民营银行的设想。"
                        },
                        {
                            title: "2015年3月",
                            value: "中发、美团共同成立亿联银行项目筹备组，开始筹建工作。"
                        },
                        {
                            title: "2016年3月12日 ",
                            value: "在全国两会新闻发布会上，吉林亿联银行成为时任银监会主席尚福林所说的“第二批民营银行试点机构率先进入论证阶段的12家”之一。"
                        },
                        {
                            title: "2017年4月6日",
                            value: "亿联银行召开创立大会暨第一次股东大会、第一届董事会和第一届监事会等一系列重要会议。"
                        },
                        {
                            title: "2017年5月16日",
                            value: "亿联银行在长春市东北亚国际金融中心举办盛大开业典礼，这也标志着东北首家民营银行从此诞生。"
                        }
                    ]
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
            })
            
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

.history{
    max-height: 75vh;
    overflow-y: scroll;
    padding: rem(20) 0;

    .right-arrow{
        right: 0;
        transform: rotate(180deg);
    }

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
    
    .swiper-slide{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title-image{
        width: rem(406);
        height: rem(120);
    }

    .list{
        display: flex;
        width: 100%;
        padding: 0 rem(40);
        .left{
            width: rem(20);
            display: flex;
            flex-direction: column;
            align-items: center;
            .circle-image{
                width: rem(19);
                height: rem(19);
            }

            .line{
                width: rem(2);
                border-left: rem(2) dashed #23b7cb;
                flex: 1;
            }
        }
        .right{
            padding-left: rem(20);
            flex: 1;
            font-size: rem(36);
            color: #ffffff;
            
            padding-bottom: rem(50);

            

            .title{
                font-size: rem(32);
                transform: translateY(rem(-6));
                margin-bottom: rem(6);
            }
            .detail{
                font-size: rem(28);
                text-align: justify;
                line-height: rem(36);
            }
        }
        &:last-of-type{
            .right{
                padding-bottom: 0;
            }
        }
    }
}

</style>