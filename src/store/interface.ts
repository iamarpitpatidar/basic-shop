export interface RootState {
    products: Array<Product>
    isModalOpen: boolean,
    modalData: Product,
    cart: Order
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

interface Order {
    [key: number]: number
}
