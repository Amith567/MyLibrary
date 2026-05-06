import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
<Navbar/>
<div className='flex-1 flex justify-around items-center bg-black'>
<Link to="/students"><div className='sec-btn'>Students</div></Link>
<Link to="/books"><div className='sec-btn'>Books</div></Link>
<Link to="/transactions"><div className='sec-btn'>Transactions</div></Link>
</div>
<Footer/>

    </div>
  )
}

export default HomePage