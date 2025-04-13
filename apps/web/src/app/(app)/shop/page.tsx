import React from 'react'
import ShopPage from './components/ShoppingPage'
import { getProducts } from '@/sanity/actions/queryActions';

const Shop = async () => {
  const products = await getProducts();
  console.log("Products=======", products)
  return (
    
      <ShopPage products={products} />
    
  )
}

export default Shop