
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

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
  // const location = useLocation();
  const params = useParams<{ category: string; item: string }>();
  const currentCategory =  params.category
  // const searchParams = new URLSearchParams(location.search);
  // const currentCategory = searchParams.get('category') || 'all';
  
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.path}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentCategory === category.id
              ? 'bg-primary text-white shadow-sm'
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
