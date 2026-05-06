import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
<Navbar/>
<div className='flex-1 flex justify-around items-center '>
<div className='sec-btn'>Students</div>
<div className='sec-btn'>Books</div>
<div className='sec-btn'>Transactions</div>
</div>
<Footer/>

    </div>
  )
}

export default HomePage