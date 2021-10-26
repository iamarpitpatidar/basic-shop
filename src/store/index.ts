import { createStore } from 'vuex'
import { RootState, Product } from './interface'
import { state } from './state'

const store = createStore({
    state,
    mutations: {
        openModal(state:RootState, modalData:Product) {
            state.isModalOpen = true
            state.modalData = modalData
        },
        closeModal(state:RootState) {
            state.isModalOpen = false
        },
        addToCart(state:RootState, product:Product) {
            state.cart.push(product)
            console.log(state.cart)
        },
        removeFromCart(state:RootState, id:Number) {
            state.cart.splice(state.cart.findIndex(item => item.id === id), 1)
        }
    }
})

export default store
