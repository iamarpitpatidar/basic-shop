import { RootState } from './interface';

export const state: RootState = {
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
    cart: []
}
