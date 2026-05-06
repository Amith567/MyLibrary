import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [navBtn, setNavBtn] = useState(false)

  return (
    <>
    
      <div className='w-full bg-blue-900 p-3 flex justify-between items-center fixed top-0'>

        <p className='text-3xl text-white font-bold cursor-pointer'>
          <Link to="/home">MyLibrary</Link>
        </p>

        <div
          className='text-white text-3xl cursor-pointer'
          onClick={() => setNavBtn(!navBtn)}
        >
          ☰
        </div>

      </div>

      {navBtn && (
        <div className='w-full flex flex-col bg-gray-200 mt-16 p-4 gap-3'>
          <p>Home</p>
          <p>Profile</p>
          <p>Search</p>
        </div>
      )}

    </>
  )
}

export default Navbar