import React, { useEffect, useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'
import API from './axios'

const LoginPage = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate('')
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    useEffect(() => {
    API.get("api/account/csrf/");
},[]);
    const handleClick=async(e)=>{
        setError('')
        setLoading(true)
        e.preventDefault()
        try{
            await API.post("api/account/login/",{"username":userName,"password":password})
            navigate('/home',{replace:true})
        }catch (err) {
            if (err.response) {
                if (err.response.status === 403) {
                    setError("CSRF token missing or invalid.");
                } else if (typeof err.response.data === "object") {
                    const firstError = Object.values(err.response.data)[0];
                    setError(Array.isArray(firstError) ? firstError[0] : firstError);
                } else {
                    setError("Request failed.");
                        }
            } else {
                setError("Something went wrong.");
                }
        }finally{
            setLoading(false)
        }
    }

return (
    <div className='flex'>
        <div className='w-[60vw] h-screen'>
            <img src="/login_library_img.jpg" alt="image"  className='w-full h-screen object-cover brightness-80'/>
        </div>
        <div className='flex items-center justify-center w-[40vw] h-screen bg-gray-100'>
        <form onSubmit={handleClick} className='w-md rounded-md bg-white p-5'>
            <p className=' text-2xl font-bold'>Welcome Back</p>
            <p className='text-sm font-light'>Login to your account</p>
            { error && <p className='text-sm pt-2 text-red-500 text-center'>{error}.</p>}
            <div className='mt-3'>
                <label htmlFor="username" className='text-sm font-light'>Username :</label>
                <input type="text" name="username"  id="username" value={userName} className='w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none' onChange={(e)=>{setUserName(e.target.value)}} required/>
            </div>
            <div className='mt-3'>
                <label htmlFor="password" className='text-sm font-light'>Password :</label>
                <input type="text" name="password" id="password" value={password}  className='w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none ' onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
            <div className='pt-5'>
                <p className='text-right text-blue-600 pr-2 text-sm'>Forgot password ?</p>
            </div>
            <div className='pt-3 flex'>
                <button className='w-full bg-blue-700 text-white px-3 py-2 rounded-md hover:bg-blue-600' >{loading ? "Logging..." : "Login" }</button>
            </div>
        </form>

        </div>

    </div>
)
}

export default LoginPage