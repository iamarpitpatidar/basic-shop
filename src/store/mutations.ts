import { Product, RootState } from "@/store/interface";

const mutations = {
    openModal(state:RootState, modalData:Product) {
        state.isModalOpen = true
        state.modalData = modalData
    },
    closeModal(state:RootState) {
        state.isModalOpen = false
    },
    addToCart(state:RootState, productId:number) {
        state.cart[productId] = (state.cart[productId] ?? 0) + 1;
    },
    removeFromCart(state:RootState, productId:number) {
        if (state.cart[productId]) {
            if (state.cart[productId] === 1) delete state.cart[productId]
            else state.cart[productId] --
        }
    }
}

export default mutations
