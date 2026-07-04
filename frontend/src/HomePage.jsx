import { HomeListCardItemsDataF, HomeListCardItemsDataS,HomeCardData } from './data'
import React, { useEffect, useState } from 'react'
import API from './axios'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import HomeCard from './components/HomeCard'
import HomeListCard from './components/HomeListCard'




const HomePage = () => {
return (
<div className='break-all'>
<div className='w-full flex gap-10 flex-wrap '>
{HomeCardData.map((data)=>(
<HomeCard key={data.id} item={data}/>
))}
</div>

<div className='w-full mt-6 flex flex-col items-center lg:flex-row lg:justify-around'>
    <HomeListCard heading={"Recently Added Books"} HomeListCardItemsData={HomeListCardItemsDataF}/>
    <HomeListCard heading={"Recently Returned Books"} HomeListCardItemsData={HomeListCardItemsDataS}/>
</div>
</div>
    )
}

export default HomePage


    // <div className="home-box bg-[#3c82f6]">
    //     <p className='text-3xl text-white'>1200</p>
    //     <p className='mt-3 text-gray-100'>Total Books</p>
    // </div>
    // <div className="home-box bg-[#0ea23b]">
    //             <p className='text-3xl text-white'>850</p>
    //     <p className='mt-3 text-gray-100'>Available Books</p>
    // </div>
    // <div className="home-box bg-[#f98500]">
    //             <p className='text-3xl text-white'>230</p>
    //     <p className='mt-3 text-gray-100'>Borrowed Books</p>
    // </div>
    // <div className="home-box bg-[#6D28D9]">
    //             <p className='text-3xl text-white'>450</p>
    //     <p className='mt-3 text-gray-100'>Students</p>
    // </div>
    // <div className="home-box bg-[#0598AF]">
    //             <p className='text-3xl text-white'>56</p>
    //     <p className='mt-3 text-gray-100'>Active Transactions</p>
    // </div>
    // <div className="home-box bg-[#E5362A]">
    //             <p className='text-3xl text-white'>18</p>
    //     <p className='mt-3 text-gray-100'>Overdue Books</p>
    // </div>
