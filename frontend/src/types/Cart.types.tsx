import type { Article } from "./Article.types"

export type CartItem = {
    product: Article,
    quantity: number
}

export type Cart = {
    products: CartItem[];
}