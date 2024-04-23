"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from 'lucide-react';


const Pagination = ({handlePrev, handleNext, data, startIndex, endIndex, currentPage, setCurrentPage, totalPages, router, handleSkipNext, handleSkipPrev}) => {

  const handlePageClick = (pageNumber) => {
    router.push(`/?page=${pageNumber}`)
    setCurrentPage(pageNumber); 
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 4; // Number of page numbers to show before displaying ellipsis
  
    const ellipsisSpan = (
      <span key="ellipsis" className="text-[#A5A5A5] text-2xl cursor-pointer">
        ...
      </span>
    );
  
    if (totalPages <= maxPageNumbersToShow) {
      // If totalPages is less than or equal to the maximum page numbers to show, display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            className={` text-2xl hover:opacity-60 cursor-pointer ${currentPage === i  ? 'text-black' : 'text-[#A5A5A5]'}`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </span>
        );
        console.log("IDX", i)
      }
    } else {
      // If totalPages is greater than the maximum page numbers to show, display limited numbers with ellipsis
      const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
      const leftOffset = currentPage - halfMaxPageNumbersToShow;
      const rightOffset = currentPage + halfMaxPageNumbersToShow;
  
      if (leftOffset <= 1) {
        // Display page numbers from 1 to maxPageNumbersToShow
        for (let i = 1; i <= maxPageNumbersToShow; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={`text-[#A5A5A5] text-2xl hover:opacity-60 cursor-pointer ${currentPage === i ? 'text-[#0096C4]' : ''}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </span>
          );
        // console.log("IDX", i)

        }
        pageNumbers.push(ellipsisSpan);
      } else if (rightOffset >= totalPages) {
        // Display page numbers from (totalPages - maxPageNumbersToShow + 1) to totalPages
        pageNumbers.push(ellipsisSpan);
        for (let i = totalPages - maxPageNumbersToShow + 1; i <= totalPages; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={`text-[#A5A5A5] text-2xl hover:opacity-60 cursor-pointer ${currentPage === i ? 'text-[#0096C4]' : ''}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </span>
          );
        // console.log("IDX", i)

        }
      } else {
        // Display page numbers centered around currentPage with ellipsis on both ends
        pageNumbers.push(ellipsisSpan);
        for (let i = leftOffset; i <= rightOffset; i++) {
          pageNumbers.push(
            <span
              key={i}
              className={`text-[#A5A5A5] text-2xl hover:opacity-60 cursor-pointer ${currentPage === i ? 'text-[#0096C4]' : ''}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </span>
          );
        // console.log("IDX", i)

        }
        pageNumbers.push(ellipsisSpan);
      }
    }
  
    return pageNumbers;
  };

  // console.log("Sidx",startIndex)
  console.log("Cpage",currentPage)
  
  return (
    <>
      {/* NEXT_PREV_PAGINATION */}
      <section className="flex w-full items-center justify-center gap-5">
        <div className=' flex flex-row gap-2 '>
            <button >
            <ChevronsLeft size={32} className=' text-[#0096C4]  cursor-pointer'  />
            </button>
            <button onClick={handlePrev} disabled={startIndex === 0}>
            <ChevronLeft size={32} className=' text-[#AEDB04] hover:opacity-60 cursor-pointer' />
            </button>
        </div>
        <div className="flex flex-row gap-4">{renderPageNumbers()}</div>
        <div className=' flex flex-row gap-2 '>
            <button onClick={handleNext} disabled={endIndex >= data.length}>
            <ChevronRight size={32} className=' text-[#AEDB04] hover:opacity-60 cursor-pointer'  />
            </button>
            <button >
            <ChevronsRight size={32} className=' text-[#0096C4]  cursor-pointer' />
            </button>
        </div>
     </section>
    </>
  )
}

export default Pagination