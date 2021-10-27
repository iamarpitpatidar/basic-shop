import { RootState } from './interface'

const Getters = {
    products: (state:RootState) => (productId:Number) => {
        return productId
    }
}

export default Getters
