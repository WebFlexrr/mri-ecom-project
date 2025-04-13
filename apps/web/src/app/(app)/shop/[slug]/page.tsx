import React from 'react'
import ProductDetails from '../components/ProductDetails'
import { getProductDetails } from '@/sanity/actions/queryActions'

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const productDetails = await getProductDetails((await params).slug);

  console.log("productDetails===========", productDetails)

  return (

    <ProductDetails productDetails={
      productDetails

    } />

  )
}

export default ProductDetailsPage
