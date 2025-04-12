
import React from 'react';

import ProductCard from './ProductCard';
import { Products } from '@/types/sanity';


interface ProductGridProps {
  products: Products[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, subtitle }) => {
  return (
    <section className="fade-in-element">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-2xl md:text-3xl font-medium mb-3">{title}</h2>}
          {subtitle && <p className="text-bloom-gray max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-7 gap-6">
        {products.map((product) => (
          <div key={product._id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProductGrid;
