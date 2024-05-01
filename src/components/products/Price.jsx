"use client"


import { Minus, MinusCircle, PlusCircle } from "lucide-react";
import { useState, useEffect } from "react";


export default function Price({ price, id, options }) {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [quantity, selected, options, price])
    

  return (
    <div className=' flex flex-col gap-4'>
        <h1 className=' text-2xl font-bold text-gray-900'>${total.toFixed(2)}</h1>
        {/* OPTIONS CONTAINER */}
        {/* <div className=' flex gap-4'>
            {options?.map((option, index) => (
                <button key={option.title} className=' text-zinc-900 p-2 ring-1 ring-black rounded-md '
                style={{
                    background: selected === index ? "rgb(24 24 27)" : "white",
                    color: selected === index ? "white" : "rgb(24 24 27)"
                }}
                onClick={(e) => setSelected(index)}
                >{option.title}</button>
            ))}
        </div> */}
        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className=' flex flex-col gap-4'>
            {/* QUANTITY */}
            <div className=' flex justify-between w-full p-2 ring-1 ring-black '>
                <span className=" text-2xl">Quantity</span>
                <div className=' flex gap-4 items-center'>
                    <button
                     onClick={(e) => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                    ><MinusCircle className=" text-orange-600" /></button>
                    <span className=" text-2xl">{quantity}</span>
                    <button 
                     onClick={(e) => setQuantity(prev => prev < 9 ? prev + 1 : 9)}
                    ><PlusCircle className=" text-orange-600" /></button>
                </div>
            </div>
            {/* CART BUTTON */}
            <button className=' bg-orange-600 text-white p-2 ring-1 ring-white hover:opacity-90  uppercase w-full'>ADD TO CART</button>
        </div>
    </div>
  )
}
