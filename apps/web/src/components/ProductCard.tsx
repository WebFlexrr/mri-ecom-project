// "use client"
import React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Heart } from 'lucide-react';

import { formatCurrency } from '@/lib/formatters';
// import { useStore } from '@/store/useStore';
import Image from 'next/image';
import Link from 'next/link';
// import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Products } from '@/types/sanity';

interface ProductCardProps {
  product: Products;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const { addToWishlist, removeFromWishlist, wishlist } = useStore();

  // const isInWishlist = wishlist.some(item => item.product.id === product.id);

  // const handleWishlistToggle = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   if (isInWishlist) {
  //     removeFromWishlist(product.id);
  //   } else {
  //     addToWishlist(product);
  //   }
  // };

  const renderBadges = () => {
    if (!product.badges || product.badges.length === 0) return null;

    return (
      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
        {product.badges.map((badge) => (
          <Badge key={badge} className={`badge badge-${badge}`}>
            {badge === 'bestseller' ? 'Best Seller' : badge === 'new' ? 'New' : 'Limited'}
          </Badge>
        ))}
      </div>
    );
  };

  return (
    <Link href={`/shop/${product.slug?.current}`}>
      <Card className="product-card h-full py-0 gap-0  rounded-none transition-all hover:-translate-y-1 hover:shadow-md">
        <CardHeader className="relative px-0 overflow-hidden rounded-t-lg">
          {product.images && <Image
            src={product.images[0]
            }
            alt={product.name || ""}
            width={1000}
            height={0}
            // className="h-48 w-full object-cover aspect-square transition-transform hover:scale-105" 
            className=" w-full object-cover  aspect-square transition-transform hover:scale-105"
          />}
          {renderBadges()}
          {/* <Button
            className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 transition-colors hover:bg-white hover:text-bloom-coral"
            onClick={handleWishlistToggle}
          >
            <Heart 
              size={18} 
              className={isInWishlist ? "fill-bloom-coral text-bloom-coral" : ""} 
            />
          </Button> */}
        </CardHeader>

        <CardContent className="p-4 ">
          <h3 className="mb-1 font-medium line-clamp-1">{product.name}</h3>
          {/* <p className="text-sm text-bloom-gray mb-2 line-clamp-1">{product.tagline}</p> */}

          <div className="flex items-baseline justify-between">
            {/* <div>
              {product.discountPrice ? (
                <div className="flex items-center gap-2">
                  <span className="font-medium">{formatCurrency(product.discountPrice)}</span>
                  <span className="text-sm text-bloom-gray line-through">{formatCurrency(product.price)}</span>
                </div>
              ) : (
                <span className="font-medium">{formatCurrency(product.price)}</span>
              )}
            </div> */}
            <div>
              {product.price &&
                <span className="font-medium">{formatCurrency(product.price)}</span>
              }
            </div>

            {/* {product.stock < 10 && product.stock > 0 && (
              <span className="text-xs text-bloom-coral">Only {product.stock} left</span>
            )} */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
