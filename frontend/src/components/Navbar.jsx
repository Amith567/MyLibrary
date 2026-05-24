import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [navBtn, setNavBtn] = useState(false)

  const onLogout = () => {
    localStorage.removeItem("isLoggined")
    navigate('/login')
  }

  return (
    <>
      {/* Navbar */}
      <div className='w-full h-16 bg-[#1E293B] px-5 flex justify-between items-center fixed top-0 left-0 z-50'>

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

      {/* Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-[#1E293B] text-gray-200 
        overflow-hidden transition-all duration-500 ease-in-out z-40
        ${navBtn ? 'max-h-60 p-4 opacity-100' : 'max-h-0 opacity-0 p-0'}
        `}
      >
        <div className='flex flex-col gap-3'>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>Profile</p>
          <p className='cursor-pointer'>Search</p>

          <button
            onClick={onLogout}
            className='bg-slate-500 p-2 rounded-md hover:bg-slate-400'
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar