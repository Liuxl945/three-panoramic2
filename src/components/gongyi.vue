<!--
 * @Author: your name
 * @Date: 2020-11-14 13:36:26
 * @LastEditTime: 2020-11-14 13:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\gongyi.vue
-->


<template>
    <modal-common :titleImage="titleImage" ref="modal">
        <div class="gongyi">
            <div class="list">
                <div class="top">
                    <div class="title-box">
                        <span class="title">“时间银行”公益平台</span>
                    </div>
                </div>
                

                <div class="details">
                    <p>为积极践行我行社会责任，2020年亿联银行围绕利用自身的科技优势，与吉林省青年协愿者协会联合推出了“亿联志愿者时间银行”志愿服务应用平台，提供志愿者和志愿服务组织注册、志愿服务需求对接志愿者激励和权益兑换、志愿服务信用评价等功能 </p>
                    <p>秉承“奉献、友爱、互助、进步”的志愿精神，通过大数据、人脸识别等科技手段，打造“互联网+志愿服务”的信息平台，解决各志愿服务组织需求的同时又可以充分保障志愿者的相关权益，构建一个线上互联线下互动的“ Service Concept智慧公益”生态系统。</p>
                </div>
                
            </div>

            <div class="list">
                <div class="top">
                    <div class="title-box">
                        <span class="title">“垃圾分类我先行”主题公益活动</span>
                    </div>
                </div>

                <div class="details">
                    <p>2019年9月-10月，在长春市南关区鸿城街道、明珠街道等所辖垃圾分类示范社区及优质小区（长春明珠小区、水韵豪庭小区、全安街道、净水山庄小区、万科金域长春）共开展2场公益演出，3场主题宣传活动，推动垃圾分类从家庭开始。活动以文艺演出、垃圾分类模拟、问题抢答等互动方式为主，为社区居民详细讲解了垃圾分类标准，普及垃圾分类知识，活动为期2个月，覆盖南关区人口密度靠前的两个街道共计人口约10万余人，吸引数千户家庭，近万名市民热情参与，共发放环保分类垃圾桶600余个，垃圾袋35000余个，供日常承载垃圾15000余公斤。我行几十名公益志愿者放下了繁忙的业务工作，积极投身公益活动中。 </p>
                </div>
                
            </div>

            <div class="list">
                <div class="top">
                    <div class="title-box">
                        <span class="title">金融知识宣传</span>
                    </div>
                </div>

                <div class="details">
                    <p>为推动银行业健康发展，营造和谐、诚信的金融环境，切实维护金融消费者权益，我行组织了形式多样的金融消费者权益保护主题活动，加强对金融消费者的宣传，普及消费者金融知识，保护消费者权益，履行社会责任，共创和谐金融环境。</p>

                    <p>开设“金融知识云课堂”，截止至9月30日，我行对外直播共计24次，普及人群万余人。其中3.15宣传直播，获得人行长春中支的好评； 拍摄视频、制作宣传品，利用抖音、微信公众号、官网、线下营业厅等渠道，积极开展《网络安全法》、《存款保险宣传》、《防赌反赌 金融守护》等活动宣传；积极参与《五个一百网络正能量》、《防范非法集资抖音挑战赛》、《扫黑除恶》、《法制动漫微视频》、《征信与发展》、《守住钱袋子，防范非法集资》、《金融消费者权益保护十佳品牌评选活动》等宣传活动。</p>
                </div>
                
            </div>
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

.gongyi{
    padding: 0 rem(40);
    height: 70vh;
    overflow-y: scroll;
    .list{
        color: #ffffff;
        font-size: rem(30);
        padding-top: rem(20);
        .top{
            text-align: left;
        }
        
        .title-box{
            display: inline-block;
            background: #0c3eff;
            font-weight: 600;
            padding: rem(10) rem(20);
            transform: skew(0, -2deg);
        }
        .details{
            font-size: rem(28);
            line-height: rem(34);
            padding-top: rem(30);
            border-left: 1px solid #0c3eff;
            border-bottom: 1px solid #0c3eff;
            padding-left: rem(30);
            padding-bottom: rem(30);
            border-bottom-left-radius: rem(80);
            text-align: justify;
            p{
                margin-bottom: rem(20);
                text-indent: 2em;
                &:last-of-type{
                    margin-bottom: 0;
                }
            }

        }
        &:nth-of-type(2n) {
            .top{
                text-align: right;
            }
            .title-box{
                transform: skew(0, 2deg);
            }

            .details{
                border-left: none;
                border-right: 1px solid #0c3eff;
                border-bottom: 1px solid #0c3eff;
                padding-right: rem(30);
                padding-left: 0;
                border-bottom-right-radius: rem(80);
                border-bottom-left-radius: 0;
            }
            
        }
    }
}
</style>