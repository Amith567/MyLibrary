import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-[85vw]  h-20 border-b-1 border-gray-200 shadow-sm flex items-center justify-between px-10'>
        <span className=''><input type="text"  className=' outline-none px-3 py-2 rounded-full w-80 shadow-t-xl  border-gray-200 border-y-1 text-sm' placeholder='Search...'/><CiSearch className=' w-9 h-9 bg-gray-50 rounded-full p-1 float-right ml-2'/></span>
        <div className='flex gap-3 '>
        <FaRegBell className='w-5 h-5'/>
        <img src="profile.jpg" alt="" className='w-6 h-6 rounded-full' />
        <Link to='/profile'><p className='font-bold text-sm mt-1 capitalize'>{localStorage.getItem("username")}</p></Link>
        </div>
    </div>
  )
}

export default Navbar