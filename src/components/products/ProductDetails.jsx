import Image from 'next/image'
import React from 'react'
import Price from './Price'


export const singleProduct = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };

const ProductDetails = () => {
  return (
    <div className=' flex p-4 lg:px-20 xl:px-40 max-md:pt-20 gap-5 mx-auto max-w-7xl h-screen flex-col justify-around items-center text-zinc-700 md:flex-row md:gap-8 bg-zinc-100'>
      {/* IMAGE CONTAINER */}
      <div className=' relative max-md:w-full w-1/2  h-96'>
        <Image 
        src={"/gallery/hp4.jpg"} 
        alt="" 
        className='object-contain rounded-md shadow-2xl  py-8' 
        fill />
      </div>
      {/* TEXt CONTAINER */}
      <div className=' max-md:w-full w-1/2 flex flex-col gap-4'>
        <h1 className=' font-bold uppercase text-3xl text-orange-600'>HP Elitebook</h1>
        <p>Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.</p>
        <Price price={singleProduct?.price} id={singleProduct?.id} options={singleProduct?.options}/>
      </div>
    </div>
  )
}

export default ProductDetails