/*
 * @Author: your name
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-17 10:26:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import * as THREE from "three"

window.THREE = THREE

Vue.config.productionTip = false

import "swiper/swiper-bundle.css"

// import vConsole from "vconsole"

// new vConsole()

new Vue({
        // router,
        store,
        render: h => h(App)
    })
.$mount('#app')