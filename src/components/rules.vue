<!--
 * @Author: your name
 * @Date: 2020-11-14 13:36:26
 * @LastEditTime: 2020-11-17 09:26:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\components\kejishili.vue
-->


<template>
    <modal-common :titleImage="titleImage" ref="modal" @again="again">
        <div class="rule">
            <p>1. 活动期间：2020年11月20日0:00至2020年11月30日23:59。</p>
            <p>2. 本活动共四期，每期活动均配有不同礼品，用户参与前三期活动可抽奖和收集卡片，参与第四期活动抽奖需要集齐前三期收集的卡片，未收集或收集不全的用户，可以通过分享好友集齐所有卡片。</p>
            <p>3. 中奖奖品发放：
  礼品将在每期活动开展完成后5个工作日内进行礼品发放。
 电子礼品：话费直接充值，腾讯月卡、爱奇艺月卡、京东E卡将以短信形式发放兑换码。
 实物礼品：客户需填写正确的收获地址和联系方式，若由于地址或联系方式填错导致实物无法送达，亿联银行将有权取消对应的实物奖励资格。
  礼品派发后,个别客户可能存在未收到短信或者话费充值失败的情况,活动方有权替换为同等价值奖品,如有疑问可拨打电话400-819-6883 ，服务时间：工作日8:00-19:00（亿联银行发奖合作商:上海宜员网络技术有限公司）</p>


            <p>4.如您有任何违反法律、法规等或违反亿联银行平台规则的情形，或存在作弊领取，刷量、恶意套现、使用虚假账号等行为，亿联银行将有权取消您的活动资格，并有收回相关奖品及权益。</p>
        </div>
    </modal-common>
</template>

<script>

import modalCommon from "./modal-common"
import titleImage from "@/assets/规则说明.png"

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
        },
        again() {
            this.$emit("again")
        }
    }
}
</script>

<style lang="scss" scoped>
@function rem($n){
  @return $n/(200)+rem;
}

.rule{
    height: 75vh;
    overflow-y: scroll;
    padding: rem(40);
    p{
        font-size: rem(28);
        color: #ffffff;
        line-height: rem(40);
        margin-bottom: rem(20);
        text-align: justify;
    }
}

</style>