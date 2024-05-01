import React from 'react'
import ProductDetails from '../../components/products/ProductDetails'
import RelatedProducts from '../../components/products/RelatedProducts'

const ProductPage = () => {
  return (
    <div className=" min-h-screen   px- overflow-hidden bg-slate-50  max-lg:pt-9 lg:pt-6 pb-6  w-full flex flex-col justify-center items-center">
      <ProductDetails />
      <RelatedProducts />
    </div>
  )
}

export default ProductPage
