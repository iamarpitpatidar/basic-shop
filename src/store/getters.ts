import { RootState } from './interface'

const Getters = {
    products: (state:RootState) => {
        const cartItems = Object.keys(state.cart).map(key => parseInt(key))
        return state.products.filter(product => cartItems.includes(product.id))
    },
    productById: (state:RootState) => (productId:number) => {

    }
}

export default Getters
