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
        increment: (state, playload) => {
            state.counter += playload;
        },
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        increment: ({commit}, playload) => {
            commit('increment', playload);
        },
        decrement: ({commit}, playload) => {
            commit('decrement', playload);
        },
        asynIncrement: ({comit}) => {
            setTimeout(() => {
                commit('increment');
            }, 1000)
        }

    }
});


