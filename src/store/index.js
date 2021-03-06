/*
 * @Author: your name
 * @Date: 2020-10-30 10:02:15
 * @LastEditTime: 2020-11-17 19:54:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \three-panoramic2\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    indexState: 0
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