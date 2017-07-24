import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';


Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks'
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        increment: ({commit}) => {
            commit('increment');
        },
        decrement: ({commit}) => {
            commit('decrement');
        },
        asynIncrement: ({comit}) => {
            setTimeout(() => {
                commit('increment');
            }, 1000)
        }

    }
});


