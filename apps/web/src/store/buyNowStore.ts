import create from 'zustand';
import { Products } from '@/types/sanity';

interface BuyNowState {
  product: Products | null;
  setProduct: (product: Products | null) => void;
}

export const useBuyNowStore = create<BuyNowState>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
})); 