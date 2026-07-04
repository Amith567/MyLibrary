import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-[85vw]  h-20 border-b-1 border-gray-200 shadow-sm flex items-center justify-between px-10'>
        <span className='flex gap-2'><input type="text"  className=' outline-none px-3 py-2 rounded-full w-80 shadow-t-xl  border-gray-200 border-y-1 text-sm' placeholder='Search...'/><CiSearch className='mt-1 w-9 h-9 bg-gray-50 rounded-full p-1'/></span>
        <div className='flex gap-3 '>
        <FaRegBell className='w-5 h-5'/>
        <img src="profile.jpg" alt="" className='w-6 h-6 rounded-full' />
        <p className='font-bold text-sm mt-1'>Amith P</p>
        </div>
    </div>
  )
}

export default Navbar