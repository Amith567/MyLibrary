import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHome } from "react-icons/md";  

const Navbar = () => {
  return (
    <div className='h-20 border-b-1 border-gray-200 shadow-sm flex items-center justify-between px-2 lg:px-10'>
        <span className='hidden md:block'><Link to='/'><MdHome className='float-left h-7 w-7 mt-1 mr-3'/></Link><input type="text"  className=' outline-none px-3 py-2 rounded-full w-70 shadow-t-xl  border-gray-200 border-y-1 text-sm' placeholder='Search...'/><CiSearch className=' w-9 h-9  p-1 float-right ml-2'/></span>
        <div className='md:hidden'><GiHamburgerMenu className='w-8 h-8' /></div>
        <div className='flex gap-3 '>
        <FaRegBell className='w-5 h-5'/>
        <img src="profile.jpg" alt="" className='w-6 h-6 rounded-full' />
        <Link to='/profile'><p className='font-bold text-sm mt-1 capitalize'>{localStorage.getItem("username")}</p></Link>
        </div>
    </div>
  )
}

export default Navbar