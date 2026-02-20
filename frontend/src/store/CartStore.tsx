import { create } from "zustand";
import type { Cart, CartItem } from "../types/Cart.types";

interface CartStore extends Cart {
  addItem: (article: CartItem) => void;
  increaseQuantity: (id: number) => void,
}

export const useCartStore = create<CartStore>()((set, get) => ({
  products: JSON.parse(localStorage.getItem("cart") || "[]"),
  addItem: (article) => {
    const { products } = get();
      const exist = products.find(
        (a) => a.product.id === article.product.id,
      );

      if (exist) {
        get().increaseQuantity(exist.product.id)
        return
    
    }
      const updatedProducts = [...products, { ...article, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      set({ products: updatedProducts });
    },

  increaseQuantity: (id: number) => {
    set((state) => {
         const updatedProducts = state.products.map((a) =>
           a.product.id === id
             ? { ...a, quantity: a.quantity + 1 }
             : a,
         );
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    })
  }
}));
