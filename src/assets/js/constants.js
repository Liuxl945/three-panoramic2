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


import vr from "@/assets/VR展厅11111.png"
import vr2 from "@/assets/荣誉成绩.png"

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
    rongyu,
    vr,
    vr2
}

export const SPRITE_CHILDREN = [
    [
        {
            index: 1,
            name: "vr",
            position: [0, 0, 16]
        },
        {
            index: 2,
            name: "vr2",
            position: [0, 0, -16]
        },
    ],
    [
        {
            index: 1,
            name: "vr",
            position: [0, 0, 16]
        },
        {
            index: 2,
            name: "vr2",
            position: [0, 0, -16]
        },
    ],
    [
        {
            index: 1,
            name: "vr",
            position: [0, 0, 16]
        },
        {
            index: 2,
            name: "vr2",
            position: [0, 0, -16]
        },
    ],
    [
        {
            index: 1,
            name: "vr",
            position: [0, 0, 16]
        },
        {
            index: 2,
            name: "vr2",
            position: [0, 0, -16]
        },
    ],
    [
        {
            index: 1,
            name: "vr",
            position: [0, 0, 16]
        },
        {
            index: 2,
            name: "vr2",
            position: [0, 0, -16]
        },
    ]
]

export const LOCATIONS = [
    {
        index: 3,
        name: "yewu",
        position: [18, -0.5, -0.1]
    },
    {
        // 5
        index: 5,
        name: "licheng",
        position: [0, -0.5 , 18]
    },
    {
        // 1
        index: 1,
        name: "gongyi",
        position: [0, -0.5 , -18]
    },
    {
        // 2
        index: 2,
        name: "keji",
        position: [13, -0.5, -13]
    },
    {
        // 4
        index: 4,
        name: "rongyu",
        position: [13, -0.5, 13]
    }
]