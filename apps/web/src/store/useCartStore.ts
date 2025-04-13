import { Products } from '@/types/sanity';
import { create } from 'zustand'

interface CartItem {
  productId: string;
  productName:string;
  productImage:string;
  productSlug:string;
  quantity: number;
  size: string;
  color: string;
  price:number;
}

export type CartState = {
  cart:CartItem[];
}

export type CartActions = {
  addToCart: ({product,quantity,size, color}:{product: Products,quantity?:number,size:string, color:string} ) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

}

export type CartStore = CartState & CartActions
export const defaultInitState: CartState = {
  cart: []
}

export const useCartStore = create<CartStore>((set,get) => ({
...defaultInitState,  
addToCart: ({product, size, color, quantity = 1}) => 
    set((state) => {
      const existingItem = state.cart.find(item => item.productId === product._id);
      
      if (existingItem) {
        return {
          cart: state.cart.map(item => 
            item.productId === product._id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }else return { cart: [...state.cart, {
  productId: product._id,
  productName:product.name,
  productImage: product.images && product.images[0],
  productSlug:product.slug?.current,
  quantity,
  size,
  color,
  price:product.price
}] }
    }),

   removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.productId !== productId) });
  },
  updateCartItemQuantity: (productId, quantity) => {
    set({
      cart: get().cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    });
  },
    clearCart: () => set({ cart: [] }),
  
  
}))