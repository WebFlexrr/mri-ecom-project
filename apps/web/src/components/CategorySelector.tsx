
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  path: string;
}

const categories: Category[] = [
  { id: 'all', name: 'All Products', path: '/products' },
  { id: 'planners', name: 'Planners', path: '/products?category=planners' },
  { id: 'journals', name: 'Journals', path: '/products?category=journals' },
  { id: 'self-care', name: 'Self-Care', path: '/products?category=self-care' },
  { id: 'bundles', name: 'Bundles', path: '/products?category=bundles' }
];

const CategorySelector: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get('category') || 'all';
  
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.path}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentCategory === category.id
              ? 'bg-bloom-coral text-white shadow-sm'
              : 'bg-bloom-pink/30 text-bloom-dark hover:bg-bloom-pink/50'
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategorySelector;
