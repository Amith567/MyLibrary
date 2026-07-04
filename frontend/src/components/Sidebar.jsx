import React, { useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaBook } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Sidebar = () => {

  return (
    <div className='w-64 bg-[#041633] sticky top-0 h-screen '>
        <p className='py-10 text-center text-white text-2xl font-bold'>MyLibrary</p>
        <div className='flex flex-col gap-8 pl-5 pr-10'>
        <Link to='/'><p className='sidebar-items'><RxDashboard className='sidebar-icons'/>Dashboard</p></Link>
        <Link to='/book'><p className='sidebar-items'><FaBook className='sidebar-icons'/>Books</p></Link>
        <Link to='/student'><p className='sidebar-items'><BsFillPersonLinesFill className='sidebar-icons'/>Students</p></Link>
        <Link to='/transaction'><p className='sidebar-items '><GrTransaction className='sidebar-icons'/>Transactions</p></Link>
        <Link to='/report'><p className='sidebar-items '><LuFileSpreadsheet className='sidebar-icons'/>Reports</p></Link>
        <Link to='/setting'><p className='sidebar-items '><IoSettingsSharp className='sidebar-icons'/>Settings</p></Link>
        <Link to='/login'><p className='sidebar-items '><TbLogout className='sidebar-icons'/>Logout</p></Link>
        </div>
    </div>
  )
}

export default Sidebar
