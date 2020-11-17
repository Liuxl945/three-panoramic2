<!--
 * @Author: your name
 * @Date: 2020-11-17 18:27:50
 * @LastEditTime: 2020-11-17 19:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\rules2.vue
-->

<template>
    <transition name="fade">
        <div class="modal-common modal" v-if="show">
            <div class="rules2">

                

                <img class="image" :src="bgImage">

                <div class="content" v-if="index === 1">
                    <div class="title-image">
                        <img class="image" :src="titleImage">
                    </div>
                    
                    <p>1. 活动期间：2020年11月20日0:00至2020年11月30日23:59。</p>
                    <p>2. 本活动共四期，每期活动均配有不同礼品，用户参与前三期活动可抽奖和收集卡片，参与第四期活动抽奖需要集齐前三期收集的卡片，未收集或收集不全的用户，可以通过分享好友集齐所有卡片。</p>
                    <p>3. 中奖奖品发放：
  礼品将在每期活动开展完成后5个工作日内进行礼品发放。
 电子礼品：话费直接充值，腾讯月卡、爱奇艺月卡、京东E卡将以短信形式发放兑换码。
 实物礼品：客户需填写正确的收获地址和联系方式，若由于地址或联系方式填错导致实物无法送达，亿联银行将有权取消对应的实物奖励资格。
  礼品派发后,个别客户可能存在未收到短信或者话费充值失败的情况,活动方有权替换为同等价值奖品,如有疑问可拨打电话400-819-6883 ，服务时间：工作日8:00-19:00（亿联银行发奖合作商:上海宜员网络技术有限公司）</p>
                    <p>4.如您有任何违反法律、法规等或违反亿联银行平台规则的情形，或存在作弊领取，刷量、恶意套现、使用虚假账号等行为，亿联银行将有权取消您的活动资格，并有收回相关奖品及权益。</p>
                </div>

                <div class="content" v-else>
                    <div class="title-image">
                        <img class="image" :src="titleImage1">
                    </div>

                    <div class="list">
                        <div class="title">
                            <img class="image" :src="iconImage1">
                            <span>展出时间：</span>
                        </div>
                        <p>2020年11月20日-2020年11月30日</p>
                    </div>

                    <div class="list">
                        <div class="title">
                            <img class="image" :src="iconImage2">
                            <span>抽奖奖品：</span>
                        </div>
                        <p>一等奖（1名）：Apple ipad 2019-10.2</p>
                        <p>二等奖（1名）：华为儿童手表3X</p>
                        <p>三等奖（50名）：爱奇艺视频会员月卡</p>
                    </div>

                    <div class="list">
                        <div class="title">
                            <img class="image" :src="iconImage3">
                            <span>参观规则：</span>
                        </div>
                        <p>1、用户点击进入活动首页后，根据页面提示下逐一浏览各个主题展厅。</p>
                        <p>2、未关注公众号的用户，可关注【亿联银行】微信公众号后进入活动首页。</p>
                        <p>3、本次展览共设“发展历程”、“公益事业”、“荣誉成绩”、“产品业务”、“科技实力”5个主题展厅，用户在浏览每个展厅时会随机弹出卡片，用户点击卡片即可领取，收集到的卡片将会作为后期活动道具。</p>
                        <p>4、所有展厅浏览结束后会弹出盲盒，点击即可进入盲盒抽取环节。</p>
                        <p>5、每个微信ID拥有3次盲盒抽取机会，分享好友可额外获得1次盲盒抽取机会。</p>
                        <p>6、所有奖品将在活动结束后的7个工作日内分发给获奖用户。</p>
                        <p>7、本次活动的最终解释权归亿联银行所有。</p>
                    </div>
                </div>

                <div class="close-image" @click="show = false">
                    <img class="image" :src="closeImage">
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import bgImage from "@/assets/image/index2/规则.png"
import titleImage from "@/assets/image/index2/规则说明.png"
import titleImage1 from "@/assets/image/index2/·活动说明·.png"
import iconImage1 from "@/assets/image/index2/时间(1).png"
import iconImage2 from "@/assets/image/index2/奖品.png"
import iconImage3 from "@/assets/image/index2/规则文档.png"
import closeImage from "@/assets/image/index2/history/关闭.png"

export default {
    props: {
        index: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            show: false,
            bgImage,
            titleImage,
            titleImage1,
            iconImage1,
            iconImage2,
            iconImage3,
            closeImage
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/style/modal.scss");
@function rem($n){
  @return $n/(200)+rem;
}

.rules2{
    width: rem(630);
    height: rem(1050);
    overflow: hidden;
    border-radius: rem(20);
    position: relative;

    .close-image{
        z-index: 1000;
        position: absolute;
        right: rem(23);
        top: rem(23);
        width: rem(46);
        height: rem(46);
    }
    
    .content{
        position: absolute;
        width: rem(630);
        height: rem(1050);
        overflow-y: scroll;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: rem(40);

        font-size: rem(30);
        color: #ffffff;

        p{
            text-align: justify;
            line-height: rem(44);
            margin-bottom: rem(20);
            font-size: rem(28);
        }

        .title-image{
            width: rem(253);
            height: rem(60);
            margin-bottom: rem(20);
        }
    }

    .image{
        width: 100%;
    }
    
    .list{
        width: 100%;
        margin-bottom: rem(20);
        .title{
            display: flex;
            align-items: center;
            margin-bottom: rem(20);
            font-size: rem(34);
        }
        .image{
            margin-right: rem(20);
            width: rem(36);
            height: rem(36);
        }
    }
}

</style>