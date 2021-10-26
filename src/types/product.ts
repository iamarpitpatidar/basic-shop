export interface Product {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    image: String,
    quantity: Object,
    tags: [String],
    salePrice: {
        type: Number,
        required: true
    }
}
