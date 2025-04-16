import { Products } from '@/types/sanity';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface WishItem {
  productId: string;
  productName: string;
  productImage: string;
  productSlug: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
}

export type WishState = {
  Wish: WishItem[];
};

export type WishActions = {
  addToWishList: ({ product, quantity, size, color }: { product: Products, quantity?: number, size: string, color: string }) => void;
  removeFromWishList: (productId: string) => void;
  clearWishList: () => void;
};

export type WishStore = WishState & WishActions;

export const defaultInitState: WishState = {
  Wish: []
};

export const useWishStore = create<WishStore>()(
  devtools((set, get) => ({
    ...defaultInitState,
    addToWishList: ({ product, size, color, quantity = 1 }) => {
      set((state) => {
        const existingItem = state.Wish.find(item => item.productId === product._id);

        if (existingItem) {
          return {
            Wish: state.Wish.map(item =>
              item.productId === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          };
        }

        return {
          Wish: [...state.Wish, {
            productId: product._id,
            productName: product.name || 'Unknown Product',
            productImage: product.images && product.images[0] || '/placeholder-image.jpg',
            productSlug: product.slug?.current || 'unknown-slug',
            quantity,
            size,
            color,
            price: product.price || 0
          }]
        };
      });
    },
    removeFromWishList: (productId) => {
      set({ Wish: get().Wish.filter((item) => item.productId !== productId) });
    },
    clearWishList: () => set({ Wish: [] }),
  }))
);