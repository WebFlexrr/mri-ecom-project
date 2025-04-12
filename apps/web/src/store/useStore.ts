
import { Products } from '@/types/sanity';
import { create } from 'zustand';


interface CartItem {
  product: Products;
  quantity: number;
}

interface WishlistItem {
  product: Products;
}

interface StoreState {
  // Cart state
  cart: CartItem[];
  addToCart: (product: Products, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist state
  wishlist: WishlistItem[];
  addToWishlist: (product: Products) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // UI state
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<StoreState>((set) => ({
  // Cart initial state and actions
  cart: [],
  
  addToCart: (product: Products, quantity = 1) => 
    set((state) => {
      const existingItem = state.cart.find(item => item.product._id === product._id);
      
      if (existingItem) {
        return {
          cart: state.cart.map(item => 
            item.product._id === product._id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      
      return { cart: [...state.cart, { product, quantity }] };
    }),
  
  removeFromCart: (productId: string) => 
    set((state) => ({
      cart: state.cart.filter(item => item.product._id !== productId)
    })),
  
  updateCartItemQuantity: (productId: string, quantity: number) => 
    set((state) => ({
      cart: state.cart.map(item => 
        item.product._id === productId 
          ? { ...item, quantity }
          : item
      )
    })),
  
  clearCart: () => set({ cart: [] }),
  
  // Wishlist initial state and actions
  wishlist: [],
  
  addToWishlist: (product: Products) => 
    set((state) => {
      const existingItem = state.wishlist.find(item => item.product._id === product._id);
      
      if (existingItem) {
        return { wishlist: state.wishlist };
      }
      
      return { wishlist: [...state.wishlist, { product }] };
    }),
  
  removeFromWishlist: (productId: string) => 
    set((state) => ({
      wishlist: state.wishlist.filter(item => item.product._id !== productId)
    })),
  
  isInWishlist: () => {
    // This is a derived state, not stored in Zustand
    // It will be implemented in the component that uses it
    return false;
  },
  
  // UI state
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
