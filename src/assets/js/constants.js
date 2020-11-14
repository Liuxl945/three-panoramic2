/*
 * @Author: your name
 * @Date: 2020-11-14 19:08:58
 * @LastEditTime: 2020-11-14 19:52:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\assets\js\animate-image.js
 */

import yewu from "@/assets/image/cube/产品业务.png"
import licheng from "@/assets/image/cube/发展历程.png"
import gongyi from "@/assets/image/cube/公益事业.png"
import keji from "@/assets/image/cube/科技能力.png"
import rongyu from "@/assets/image/cube/荣誉成绩.png"

export const IMAGE_URLS = {
    yewu,
    licheng,
    gongyi,
    keji,
    rongyu
}

export const SPRITE_IAMGE_URLS= {
    yewu,
    licheng,
    gongyi,
    keji,
    rongyu
}

export const LOCATIONS = [
    {
        name: "yewu",
        position: [-18, -0.5, -0.1]
    },
    {
        name: "licheng",
        position: [0, -0.5 , 18]
    },
    {
        name: "gongyi",
        position: [0, -0.5 , -18]
    },
    {
        name: "keji",
        position: [-10, -0.5, -10]
    },
    {
        name: "rongyu",
        position: [-10, -0.5, 10]
    }
]