import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [navBtn, setNavBtn] = useState(false)

  return (
    <>
    
      <div className='w-full bg-gray-900 p-3 flex justify-between items-center fixed top-0'>

        <p className='text-3xl text-gray-200 font-bold cursor-pointer'>
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
        <div className='w-full flex flex-col bg-gray-800 mt-16 p-4 gap-3 text-gray-200'>
          <p>Home</p>
          <p>Profile</p>
          <p>Search</p>
        </div>
      )}

    </>
  )
}

export default Navbar