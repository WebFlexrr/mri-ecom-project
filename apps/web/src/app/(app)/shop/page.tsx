import React from 'react'
import ShopPage from './ShoppingPage'
import { getProducts } from '@/sanity/actions/queryActions';

const Shop = async () => {
  const products = await getProducts();


  console.log("Products=======", products)
  return (
    <div>
      <ShopPage products={products} />
    </div>
  )
}

export default Shop