export interface RootState {
    isLoading: boolean,
    products: Array<Product>
    isModalOpen: boolean,
    modalData: Product,
    cart: Order,
    checkoutForm: checkout
}

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    currency: string,
    image: string,
    quantity: object,
    tags: string[],
    salePrice: number | null
}

interface checkout {
    username: string,
    email: string,
    method: string
}

interface Order {
    [key: number]: number
}
