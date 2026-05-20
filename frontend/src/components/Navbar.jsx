import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const [navBtn, setNavBtn] = useState(false)
  const onLogout=()=>{
    localStorage.clear("isLoggined")
    navigate('/login')
    
  }

  return (
    <>
    
      <div className='w-full bg-[#1E293B] p-3 flex justify-between items-center fixed top-0'>

        <p className='text-3xl text-[#F8FAFC] font-bold cursor-pointer'>
          <Link to="/">MyLibrary</Link>
        </p>

        <div
          className='text-white text-3xl cursor-pointer'
          onClick={() => setNavBtn(!navBtn)}
        >
          ☰
        </div>

      </div>

      {navBtn && (
        <div className='w-full flex flex-col bg-[#1E293B] mt-12 p-4 gap-3 text-gray-200'>
          <p>Home</p>
          <p>Profile</p>
          <p>Search</p>
          <button onClick={onLogout} className='bg-slate-500 p-1 rounded-md hover:bg-slate-400 hover:text-[#f8fafc]'>Logout</button>
          
        </div>
      )}

    </>
  )
}

export default Navbar