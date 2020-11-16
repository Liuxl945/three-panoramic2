/*
 * @Author: your name
 * @Date: 2020-11-14 19:08:58
 * @LastEditTime: 2020-11-16 10:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\animate-image.js
 */


import yewu from "@/assets/image/cube/产品业务.png"
import licheng from "@/assets/image/cube/发展历程.png"
import gongyi from "@/assets/image/cube/公益事业.png"
import keji from "@/assets/image/cube/科技能力.png"
import rongyu from "@/assets/image/cube/荣誉成绩.png"
import titleImage from "@/assets/image/index2/rongyu/荣誉成绩.png"
import titleImage1 from "@/assets/image/index2/rongyu/标题.png"
import titleImage2 from "@/assets/image/index2/rongyu/标题2.png"
import circleImage from "@/assets/image/index2/kejishili/椭圆5.png"
import list2Image from "@/assets/image/index2/rongyu/组15.png"
import background1 from "@/assets/image/cube/1.jpg"
import background2 from "@/assets/image/cube/2.jpg"
import background3 from "@/assets/image/cube/3.jpg"
import background4 from "@/assets/image/cube/4.jpg"
import background5 from "@/assets/image/cube/5.jpg"
import background6 from "@/assets/image/cube/6.jpg"
import titleImagesy from "@/assets/image/index2/gongyi/公益事业.png"
import titleImagefz from "@/assets/image/index2/history/发展历程.png"
import dahaiImage from "@/assets/image/index2/history/图层505.png"
import qihanImage from "@/assets/image/index2/history/图层506.png"
import pokeImage from "@/assets/image/index2/history/图层507.png"
import titleImagekj from "@/assets/image/index2/kejishili/科技实力.png"
import titleImagekj1 from "@/assets/image/index2/kejishili/标题.png"
import titleImage3 from "@/assets/image/index2/kejishili/标题12.png"
import listImage1 from "@/assets/image/index2/kejishili/跨地域多活架构.png"
import listImage2 from "@/assets/image/index2/kejishili/私有云.png"
import listImage3 from "@/assets/image/index2/kejishili/数字化运营.png"

import list2Image1 from "@/assets/image/index2/kejishili/曲线1拷贝.png"
import list2Image2 from "@/assets/image/index2/kejishili/大数据和AI引擎.png"
import list3Image1 from "@/assets/image/index2/kejishili/曲线1.png"
import headerImage from "@/assets/image/index2/history/11111.png"
import fotterImage from "@/assets/image/index2/history/展馆签到处2.png"
import centerImage from "@/assets/image/index2/history/展馆签到处3.png"
import closeImage from "@/assets/image/index2/history/关闭.png"
import headerImagelc from "@/assets/image/index2/yewu/发展历程1.png"
import fotterImagelc from "@/assets/image/index2/yewu/发展历程11.png"
import centerImagelc from "@/assets/image/index2/yewu/发展历程111.png"

import circleImagekj from "@/assets/image/index2/kejishili/椭圆5.png"
import list2Imagery from "@/assets/image/index2/rongyu/组15.png"
import titleImageyw from "@/assets/image/index2/yewu/产品业务.png"
import yihedaiImage from "@/assets/image/index2/yewu/合亿贷.png"
import manyicunImage from "@/assets/image/index2/yewu/满亿存.png"
import yidaiImage from "@/assets/image/index2/yewu/亿贷.png"
import yinondaiImage from "@/assets/image/index2/yewu/亿农贷.png"
import qudaoImage from "@/assets/image/index2/yewu/组15.png"
import dituImage from "@/assets/image/index2/yewu/组1.png"
import backgroundImage from "@/assets/image/index1/色相_饱和度1.png"
import titleImagez12 from "@/assets/image/index1/组12.png"
import btnImage from "@/assets/image/index1/组11.png"
import logoImage from "@/assets/image/index1/logo.png"
import avatarImage from "@/assets/image/index1/色相_饱和度1拷贝.png"
import backgroundImageindex2 from "@/assets/image/index2/背景.png"
import titleImageindex2 from "@/assets/image/index2/组7.png"
import btnImagez5 from "@/assets/image/index2/组5.png"

import bgImage11 from "@/assets/image/index2/lottery/背景.png"




import vr from "@/assets/公益事业.jpg"
import vr2 from "@/assets/科技实力.png"
import vr3 from "@/assets/产品业务.png"
import vr4 from "@/assets/荣誉成绩.png"
import vr5 from "@/assets/发展历程.png"

export const IMAGE_URLS = {
    yewu,
    licheng,
    gongyi,
    keji,
    rongyu,
    titleImage,
    titleImage1,
    titleImage2,
    circleImage,
    list2Image,
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    titleImagesy,
    titleImagefz,
    dahaiImage,
    qihanImage,
    pokeImage,
    titleImagekj,
    titleImagekj1,
    titleImage3,
    listImage1,
    listImage2,
    listImage3,
    list2Image1,
    list2Image2,
    list3Image1,
    headerImage,
    fotterImage,
    centerImage,
    closeImage,
    headerImagelc,
    fotterImagelc,
    centerImagelc,
    circleImagekj,
    list2Imagery,
    titleImageyw,
    yihedaiImage,
    manyicunImage,
    yidaiImage,
    yinondaiImage,
    qudaoImage,
    dituImage,
    backgroundImage,
    titleImagez12,
    btnImage,
    logoImage,
    avatarImage,
    backgroundImageindex2,
    titleImageindex2,
    btnImagez5,
    bgImage11,

}

export const SPRITE_IAMGE_URLS= {
    yewu,
    licheng,
    gongyi,
    keji,
    rongyu,
    vr,
    vr2,
    vr3,
    vr4,
    vr5,
}

export const SPRITE_CHILDREN = [
    [
        {
            index: 1,
            name: "vr",
            position: [-17, 3, 0]
        },
        // {
        //     index: 2,
        //     name: "vr2",
        //     position: [-17, 3, -3.5]
        // },
    ],
    [
        {
            index: 1,
            name: "vr2",
            position: [-17, 3, 0]
        },
        // {
        //     index: 2,
        //     name: "vr2",
        //     position: [-17, 3, -3.5]
        // },
    ],
    [
        {
            index: 1,
            name: "vr3",
            position: [-17, 3, 0]
        },
        // {
        //     index: 2,
        //     name: "vr2",
        //     position: [-17, 3, -3.5]
        // },
    ],
    [
        {
            index: 1,
            name: "vr4",
            position: [-17, 3, 0]
        },
        // {
        //     index: 2,
        //     name: "vr2",
        //     position: [-17, 3, -3.5]
        // },
    ],
    [
        {
            index: 1,
            name: "vr5",
            position: [-17, 3, 0]
        },
        // {
        //     index: 2,
        //     name: "vr2",
        //     position: [-17, 3, -3.5]
        // },
    ]
]

export const LOCATIONS = [
    {
        index: 3,
        name: "yewu",
        position: [18, -0.5, -0.1],
        x: -9.999025240093
    },
    {
        // 5
        index: 5,
        name: "licheng",
        position: [0, -0.5 , 18],
        x: 0.026179908872745135
    },
    {
        // 1
        index: 1,
        name: "gongyi",
        position: [0, -0.5 , -18],
        x: 0.1396348
    },
    {
        // 2
        index: 2,
        name: "keji",
        position: [13, -0.5, -13],
        x: -7.366874924747018
    },
    {
        // 4
        index: 4,
        name: "rongyu",
        position: [13, -0.5, 13],
        x: -6.990395791467771
    }
]