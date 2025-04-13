import React from 'react'
import ProductDetails from '../components/ProductDetails'
import { getProductDetails } from '@/sanity/actions/queryActions'
// import { imageUrlFor } from '@/sanity/config/SanityImageUrl'


const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const productDetails = await getProductDetails((await params).slug);

  console.log("productDetails===========", productDetails)

  return (
    <div>
      <ProductDetails productDetails={
        productDetails
        // images: productDetails.images ? productDetails.images.map(image => imageUrlFor(image).url()) : []
      } />
    </div>
  )
}

export default ProductDetailsPage
