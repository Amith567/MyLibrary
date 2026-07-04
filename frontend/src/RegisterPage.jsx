import React, { useState } from 'react'
const RegisterPage = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')
    const handleClick=()=>{

    }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-200'>
        <form onSubmit={handleClick} className='w-md rounded-md bg-white p-5'>
            <p className='text-center text-2xl font-bold'>Register</p>
            <div className='mt-3'>
                <label htmlFor="username" className='text-sm'>Username :</label>
                <input type="text" name="username" id="username" value={userName} className='w-full px-3 py-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none' onChange={(e)=>{setUserName(e.target.value)}} required/>
            </div>
            <div className='mt-3'>
                <label htmlFor="password" className='text-sm'>Password</label>
                <input type="text" name="password" id="password" value={password} className='w-full px-3 py-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none ' onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div className='mt-3'>

            <select name="role" id="role" value={role} className='w-full px-3 py-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm'onChange={(e)=>{setRole(e.target.value)}} required>
                <option value="" disabled>Select an option</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
            </select>
            
            </div>
            <div className='pt-5 flex'>
                <button className='w-full bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700' type='submit'>Submit</button>
            </div>            
        </form>
    </div>
  )
}

export default RegisterPage