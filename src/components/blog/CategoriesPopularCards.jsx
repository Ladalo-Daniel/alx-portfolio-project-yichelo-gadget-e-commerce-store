"use client"
import React, { useEffect, useState } from 'react'
import { ArrowRight, ArrowRightCircle} from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const cats = [
  {
      cat: "Finance",
      link: '/blogs/?cat=Finance&tag=Finance',
  },
  {
      cat: "Payment gateway",
      link: '/blogs/?cat=Payment gateway&tag=Payment gateway',
  },
  {
      cat: "POS",
      link: '/blogs/?cat=Pos&tag=Pos',
  },
  {
      cat: "Cable Topup",
      link: '/blogs/?cat=Cable Topup&tag=Cable Topup',
  },
  {
      cat: "Security",
      link: '/blogs/?cat=Security&tag=Security',
  },
  {
      cat: "Airtime",
      link: '/blogs/?cat=Airtime&tag=Airtime',
  },
  {
      cat: "Privacy",
      link: '/blogs/?cat=Privacy&tag=Privacy',
  },

]
const tags = [
  {
      tag: "Card",
      link: "/blogs/?tag=Card",
  },
  {
      tag: "CBN",
      link: "/blogs/?tag=CBN",
  },
  {
      tag: "Finance",
      link: "/blogs/?tag=Finance",
  },
  {
      tag: "Cable Topup",
      link: "/blogs/?tag=cable topup",
  },
  {
      tag: "Security",
      link: "/blogs/?tag=Security",
  },
  {
      tag: "Airtime",
      link: "/blogs/?tag=Airtime",
  },
  {
      tag: "Loan",
      link: "/blogs/?tag=loan",
  },
]


const CategoriesPopularCards = () => {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setIsSticky(true);
      } 
      else if(window.screenY > 500){
        setIsSticky(false)
      }
      else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <>
      <div className={`flex flex-row max-lg:justify-between  lg:flex-col gap-4 lg:w-1/4 lg:self-start mt-5 lg:mt-9`}>

        {/* CATEGORIES_CARD */}
        <div className={`flex flex-col gap-2   lg:w-full bg-payWhite rounded-lg p-4`}>
        <div className=' flex flex-row gap-2 items-center'>
            <h1  className=' text-2xl font-bold text-[#00A8DC]'>Blog Topics</h1>
        </div>

        {
          cats.map((cat, idx) =>(
          <div key={idx + cat.link} className=' flex flex-row gap-2 items-center'>
            <Link href={cat.link}  className='  text-[#1E1E1E] hover:text-gray-700'>{cat.cat}</Link>
          </div>
          ))
        }
        </div>

        {/* Popular TAGS */}
        <div className=' flex flex-col gap-2 bg-payWhite rounded-lg p-4'>
        <div className=' flex flex-row gap-2 items-center'>
            <h1  className=' text-lg font-bold text-[#00A8DC]'>Guide and Tools</h1>
        </div>

        {
          tags.map((tag, idx) =>(
          <div key={idx + tag.link} className=' flex flex-row gap-2 items-center'>
            <Link href={tag.link}  className=' text-[#1E1E1E] hover:text-gray-700'>{tag.tag}</Link>
          </div>
          ))
        }
        </div>

     </div>
    </>
  )
}

export default CategoriesPopularCards