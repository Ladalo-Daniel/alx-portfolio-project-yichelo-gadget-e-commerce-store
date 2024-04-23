'use client'

import { Loader } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'

const MiniLoader = () => {
    const colors = useMemo(() => {
        const colors = ['blue', 'blue', 'yellow', 'red', 'pink', 'orange']
        return colors
    }, [])

    const [colorI, setColorI] = useState(0)
    const [color, setColor] = useState(colors[colorI])

    useEffect(() => {
        const interval = setInterval(() => {
            setColorI((prev) => prev + 1 )
        }, 1000)
        try {
            setColor(colors[colorI])
        } catch (err) {
            return () => clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [color, colorI, colors])
  return (
    <div className=" max-md max-md:pt-14 text-gray-700 flex items-center justify-center bg-white max-sm:pt-5 p-9 m-9 ">
        <Loader className='animate-spin' style={{color}} />
    </div>
  )
}

export default MiniLoader