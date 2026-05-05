import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate=useNavigate('')
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">

        <section className="w-full md:w-1/2   flex items-center justify-center">
          <div className="p-5">
            <img
              src="/login.jpg"
              alt="login"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </section>

        <section className="w-full md:w-1/2  flex flex-col items-center justify-around">
          <p className='text-3xl font-bold'>Hi,<span className='text-gray-600'> Welcome to MyLibrary</span></p>
          <form className="flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">



              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-blue-600" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot?
                </a>
              </div>

              <button type='button' className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition" onClick={()=>{navigate('/home')}}>
                Login
              </button>

            </div>
          </form>
        </section>

      </div>
    </>
  )
}

export default AdminLogin