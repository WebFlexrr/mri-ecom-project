
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCategory } from '@/types/product';

interface CategoryCardProps {
  category: ProductCategory;
  imageUrl: string;
  title: string;
  description: string;
}

const categoryData: CategoryCardProps[] = [
  {
    category: 'planners',
    imageUrl: '/images/category-planners.jpg',
    title: 'Planners',
    description: 'Organize your days with intention and purpose'
  },
  {
    category: 'journals',
    imageUrl: '/images/category-journals.jpg',
    title: 'Journals',
    description: 'Document your journey and capture meaningful moments'
  },
  {
    category: 'self-care',
    imageUrl: '/images/category-self-care.jpg',
    title: 'Self-Care',
    description: 'Small rituals that make a big difference'
  },
  {
    category: 'bundles',
    imageUrl: '/images/category-bundles.jpg',
    title: 'Bundles',
    description: 'Curated collections for a complete experience'
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ category, imageUrl, title, description }) => {
  return (
    <Link to={`/products?category=${category}`}>
      <Card className="overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
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

const CategorySection: React.FC = () => {
  return (
    <section className="section-padding bg-bloom-cream">
      <div className="container mx-auto">
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
