
import React from 'react';
import { Product } from '@/types/product';
import ProductGrid from './ProductGrid';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';



interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  linkTo?: string;
  linkText?: string;
  bgColor?: string;
}

const FeaturedSection = ({
  title,
  subtitle,
  products,
  linkTo,
  linkText,
  bgColor = "bg-white",
}: FeaturedSectionProps) => {
  return (
    <section className={`section-padding py-20 ${bgColor}`}>
      <div className="w-full max-w-6xl mx-auto">
        <ProductGrid products={products} title={title} subtitle={subtitle} />

        {linkTo && linkText && (
          <div className="mt-10 text-center">
            <Link href={linkTo}>
              <Button variant="outline" className="btn-secondary">
                {linkText}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
