
import Image from "next/image"
import Link from "next/link"



const CustomBrandComponent = ({brands, brandName, className }) => {
  return (
    <div className='py-0 max-sm:px-0 bg-violet-100 my-0 md:my-4 max-w-6xl  flex flex-col gap-0 md:py-0 lg:py-0  md:pb-0 lg:pb-0'>
    <div className=' flex flex-row justify-between text-orange-950 md:rounded-t-md bg-gray-300 p-2 items-center'>
        <h1 className={'text-lg p-1 md:p-0 md:text-4xl'&& className}>{brandName}</h1>
        <Link href={`/products?brand=${brandName}`}>See all</Link>
    </div>
    <div className=' flex flex-row px-2 md:px-4 transition-all border-none rounded-b-md bg-violet-50  py-6 overflow-x-auto custom-scrollbar-track custom-scrollbar rounded-none'>
        <div className=' flex flex-row gap-4 '>

        {brands.map((b, idx) => (
          <Link key={idx} href={`/products?b=${b.name}`}>
            <div  className=' flex  p-4 flex-col gap-2  w-[200px] bg-gray-50 shadow-sm h-[300px] md:w-[200px] bg-blend-luminosity hover:translate-x-1 hover:transition-all  '>
                <div className=' h-[150px] self-center '>
                    <Image src={b.image} height={1000} width={1000} quality={100} alt='ps image' className=' object-cover h-[150px] w-[150px]' />
                </div>
                <div className=' flex flex-row items-center justify-between'>
                 <h1 className='  text-center'>{b.name}</h1>
                 <h2>4GB RAM</h2>
                </div>
                <h1 className='  text-center'>N35000</h1>
                <h1 className='  text-center'>N45000</h1>
            </div>
          </Link>
        ))}

        </div>
    </div>
</div>
  )
}

export default CustomBrandComponent