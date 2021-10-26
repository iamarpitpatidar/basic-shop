export interface RootState {
    isModalOpen: Boolean,
    modalData: Product,
    cart: Array<Product>
}

export interface Product {
    id: Number,
    name: String,
    description: String,
    price: Number,
    currency: String,
    image: String,
    quantity: Object,
    tags: [String],
    salePrice: Number
}
