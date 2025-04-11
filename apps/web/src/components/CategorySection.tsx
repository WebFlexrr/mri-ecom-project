import React, { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCategory } from '@/types/product';

interface CategoryCardProps {
  category: ProductCategory;
  imageUrl: string;
  title: string;
  description: string;
}

const categoryData: CategoryCardProps[] = [
  {
    category: "planners",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-be297c7bb253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Planners",
    description: "Organize your days with intention and purpose",
  },
  {
    category: "journals",
    imageUrl:
      "https://images.unsplash.com/photo-1555117389-402de1d1470b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Journals",
    description: "Document your journey and capture meaningful moments",
  },
  {
    category: "self-care",
    imageUrl:
      "https://images.unsplash.com/photo-1555117389-402de1d1470b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Self-Care",
    description: "Small rituals that make a big difference",
  },
  {
    category: "bundles",
    imageUrl:
      "https://images.unsplash.com/photo-1555117389-402de1d1470b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bundles",
    description: "Curated collections for a complete experience",
  },
];

const CategoryCard: React.FC<CategoryCardProps> = ({ category, imageUrl, title, description }) => {
  return (
    <Link href={`/products?category=${category}`}>
      <Card className="overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <Image
            src={imageUrl || ""} 
            alt={title} 
            width={100}
            height={0}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-medium mb-1">{title}</h3>
          <p className="text-bloom-gray text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="section-padding bg-bloom-cream">
      <div className="w-full max-w-6xl  mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">Shop by Category</h2>
          <p className="text-bloom-gray max-w-2xl mx-auto">
            Find the perfect companion for your personal growth journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.map((category) => (
            <CategoryCard key={category.category} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
