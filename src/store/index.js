/*
 * @Author: your name
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-16 12:03:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
<<<<<<< HEAD
    indexState: 3, //哪个场景
=======
    indexState: 0, //哪个场景
>>>>>>> 62fc59fcc0144b32b7744fd716316d7364e8798d
}

const mutations = { 
    ["SET_INDEX"](state, index) {
        state.indexState = index
    }
}

const getters = {

}

const actions = {
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})