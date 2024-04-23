"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchForm = () => {

    // const strigifyData = JSON.stringify(data)

    const [searchTerm, setSearchTerm] = useState('');
    // const [renderedData, setRenderedData] = useState([])
    const router = useRouter()

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // // const parsedData = JSON.parse(strigifyData); // Parse the JSON string back into an array
        // const data = filteredData.filter(item => 
        //     item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     item.tags.toLowerCase().includes(searchTerm.toLowerCase())
        // );
        // setRenderedData(data)
        // console.log(data)
        // const blogId = filteredData.map(item => item.id)
        // console.log('Filtered data:', filteredData);
        // console.log('Blog ID:', blogId);
        router.push(`/blogs?q=${searchTerm}&tag=${searchTerm}&cat=${searchTerm}`)
        // console.log('Search term:', searchTerm);
    };
    // console.log("RENDERED:",renderedData)


    // console.log("SEARCH:" + strigifyData)

  return (
    <>
       <form
        onSubmit={handleSearch} 
        className=" px-4 ">
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-[#00A8DC] left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
                type="search"
                placeholder="Search for posts..."
                className="w-[75vw] md:w-[400px] lg:w-[400px] py-3 pl-12 pr-4 text-gray-900 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-blue-200"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
        </form>
  </>
  )
}

export default SearchForm