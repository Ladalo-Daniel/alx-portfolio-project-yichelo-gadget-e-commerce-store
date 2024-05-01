import React from 'react'
import CustomBrandComponent from './CustomBrandComponent'
import { popularProductsData } from '../../utils/fake-data/data'

const RelatedProducts = () => {
  return (
    <div className=' flex flex-col'>
        <CustomBrandComponent
           brands={popularProductsData}
           brandName={"Similar Products you may be interested in"}
           className=" text-3xl" 
         />
        <CustomBrandComponent
           brands={popularProductsData}
           brandName={"Recommended for you"}
           className=" text-3xl" 
         />
    </div>
  )
}

export default RelatedProducts