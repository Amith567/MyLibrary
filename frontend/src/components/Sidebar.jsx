import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaBook } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className='w-[15vw] bg-[#041633] h-screen'>
        <p className='py-10 text-center text-white text-2xl font-bold'>MyLibrary</p>
        <div className='flex flex-col gap-8 pl-5 pr-10'>
        <p className='sidebar-items'><RxDashboard className='sidebar-icons'/>Dashboard</p>
        <p className='sidebar-items'><FaBook className='sidebar-icons'/>Books</p>
        <p className='sidebar-items'><BsFillPersonLinesFill className='sidebar-icons'/>Students</p>
        <p className='sidebar-items '><GrTransaction className='sidebar-icons'/>Transactions</p>
        <p className='sidebar-items '><LuFileSpreadsheet className='sidebar-icons'/>Reports</p>
        <p className='sidebar-items '><IoSettingsSharp className='sidebar-icons'/>Settings</p>
        <p className='sidebar-items '><TbLogout className='sidebar-icons'/>Logout</p>
        </div>
    </div>
  )
}

export default Sidebar
