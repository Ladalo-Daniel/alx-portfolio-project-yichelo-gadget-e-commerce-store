import React from 'react'
import CustomBrandComponent from './CustomBrandComponent'
import { popularProductsData } from '../../utils/fake-data/data'

const FirstBrandsSection = () => {
  return (
    <>
      <CustomBrandComponent 
         brands={popularProductsData}
         brandName={"Apple Iphones"}
         className=""
       />
      <CustomBrandComponent 
         brands={popularProductsData}
         brandName={"Tecno"}
         className=""
       />
      <CustomBrandComponent 
         brands={popularProductsData}
         brandName={"Xioami"}
         className=""
       />
      <CustomBrandComponent 
         brands={popularProductsData}
         brandName={"Redmi"}
         className=""
       />
      <CustomBrandComponent 
         brands={popularProductsData}
         brandName={"Itel"}
         className=""
       />
    </>
  )
}

export default FirstBrandsSection