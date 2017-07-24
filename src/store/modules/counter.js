const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks'
    }
};

const mutations = {
    increment: (state, playload) => {
        state.counter += playload;
    },
    decrement: state => {
        state.counter--;
    }
};

const actions = {
    increment: ({commit}, playload) => {
        commit('increment', playload);
    },
    decrement: ({commit}, playload) => {
        commit('decrement', playload);
    },
    asynIncrement: ({commit}) => {
        setTimeout(() => {
            commit('increment');
        }, 1000)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
