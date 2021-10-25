import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            isModalOpen: false
        }
    },
    mutations: {
        modalAction(state, action) {
            state.isModalOpen = action === 'open'
        }
    }
})

export default store
