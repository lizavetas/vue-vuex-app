import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, playload) => {
            state.value = playload;
        }
    },
    actions: {
        updateValue: ({commit}, playload) => {
            commit('updateValue', playload);
        }

    },
    modules: {
        counter
    }
});


