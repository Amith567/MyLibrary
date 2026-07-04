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

<div className='w-full mt-6 flex flex-col items-center gap-5 lg:flex-row  lg:justify-around'>
    <HomeListCard heading={"Recently Added Books"} HomeListCardItemsData={HomeListCardItemsDataF}/>
    <HomeListCard heading={"Recently Returned Books"} HomeListCardItemsData={HomeListCardItemsDataS}/>
</div>
</div>
    )
}

export default HomePage
