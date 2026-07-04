import React, { useEffect, useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'
import API from './axios'
import Footer from './components/Footer'


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
            const res= await API.post("api/account/login/",{"username":userName,"password":password})
            localStorage.setItem("username",res.data.username)
            navigate('/',{replace:true})
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
    <div className="bg-[url('./bg.png')] bg-cover bg-center bg-no-repeat contrast-125 saturate-125 brightness-80" >
        <div className='flex flex-col md:flex-row items-center justify-around w-full h-screen p-3'>
            <div className='text-gray-100 flex flex-col gap-10'>
                <p className='text-2xl md:text-4xl font-bold '>Welcome To MyLibrary</p>
                <div className='hidden md:block font-light'>
                <p>Simplify the way you manage books, members, and borrowing records.</p>
                <p>Everything your library needs, all in one secure platform.</p>
                </div>
            </div>
            <form onSubmit={handleClick} className='w-[300px] md:w-[400px] lg:[500px] rounded-xl p-5 bg-white/15 backdrop-blur-2xl border border-white/30  shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-white brightness-110'>
                <p className=' text-2xl font-bold'>Welcome Back</p>
                <p className='text-sm font-light'>Login to your account</p>
                { error && <p className='text-sm pt-2 text-red-500 text-center'>{error}.</p>}
                <div className='mt-3'>
                    <label htmlFor="username" className='text-sm font-light'>Username :</label>
                    <input type="text" name="username"  id="username" value={userName} className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none' onChange={(e)=>{setUserName(e.target.value)}} required/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="password" className='text-sm font-light'>Password :</label>
                    <input type="password" name="password" id="password" value={password}  className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none ' onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                <div className='pt-5'>
                    <p className='text-right text-blue-900 pr-2 text-sm'>Forgot password ?</p>
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