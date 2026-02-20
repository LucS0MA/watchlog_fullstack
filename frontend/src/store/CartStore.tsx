import { create } from "zustand";
import type { Cart, CartItem } from "../types/Cart.types";

interface CartStore extends Cart {
  addItem: (article: CartItem) => void;
  removeItem: (article: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalProducts: () => number;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  products: JSON.parse(localStorage.getItem("cart") || "[]"),
  totalProducts: () => {
    const { products } = get();
    let total = 0;
    products.map((a) => total += a.quantity);
    return total;
  },
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

    removeItem: (article) => {
    const { products } = get();
      const exist = products.find(
        (a) => a.product.id === article.product.id,
      );

      if (exist) {
        get().decreaseQuantity(exist.product.id)
        return
    
    }
      const updatedProducts = [...products, { ...article, quantity: - 1 }];
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
  },
  decreaseQuantity: (id: number) => {
    set((state) => {
         const updatedProducts = state.products.map((a) =>
           a.product.id === id
             ? { ...a, quantity: a.quantity - 1 }
             : a,
         );
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    })
  },
}));
