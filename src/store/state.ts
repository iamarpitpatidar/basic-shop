import { RootState } from './interface';
import config from '@/config'

const state: RootState = {
    products: config.shop.products,
    isModalOpen: false,
    modalData: {
        id: 0,
        name: "Product Name",
        description: "Description",
        price: 20,
        currency: "USD",
        image: "null",
        quantity: {
            min: 0,
            max: 0
        },
        tags: [''],
        salePrice: 0,
    },
    // cart: [],
    cart: {
        1: 2,
        2: 1
    }
}

export default state
