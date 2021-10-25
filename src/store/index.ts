import { createStore } from 'vuex'
import { rootState } from './interface'
import { state } from './state'

const store = createStore({
    state,
    mutations: {
        openModal(state:rootState) {
            state.isModalOpen = true
        },
        closeModal(state:rootState) {
            state.isModalOpen = false
        }
    }
})

export default store
