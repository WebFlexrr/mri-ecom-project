
export type ProductCategory = 'planners' | 'journals' | 'self-care' | 'bundles';

export type ProductPurpose = 'students' | 'creators' | 'professionals' | 'personal-growth';

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string; // Emotional headline
  price: number;
  discountPrice?: number;
  images: string[];
  description: string;
  features: string[];
  benefits: string[]; // How it improves life
  category: ProductCategory;
  purposes: ProductPurpose[];
  badges?: ('bestseller' | 'new' | 'limited')[];
  stock: number;
  reviews: ProductReview[];
  related: string[]; // Related product IDs
}
