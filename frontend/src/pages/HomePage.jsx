import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
<Navbar/>
<div className='flex-1 flex justify-around items-center '>
<div className='p-24 bg-blue-900 text-white hover:bg-blue-600 rounded-md text-sm font-bold'>Students</div>
<div className='p-24 bg-blue-900 text-white hover:bg-blue-600 rounded-md text-sm font-bold'>Books</div>
<div className='p-24 bg-blue-900 text-white hover:bg-blue-600 rounded-md text-sm font-bold'>Transactions</div>
</div>
<Footer/>

    </div>
  )
}

export default HomePage