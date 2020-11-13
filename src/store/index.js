import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    indexState: 4, //哪个场景
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