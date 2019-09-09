import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
};

const getters = {
    duplicateNum: (state) => {
        return state.count * 2
    }
}

const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

const actions = {
    increment({commit}) {
        commit('increment')
    },
    decrement({commit}) {
        setTimeout(() => {
            commit('decrement')
        }, 2000);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})