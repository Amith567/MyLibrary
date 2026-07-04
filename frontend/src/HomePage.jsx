import React, { useEffect, useState } from 'react'
import API from './axios'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const HomePage = () => {


    return (

        <div className='flex'>
            <Sidebar/>
            <Navbar/>
        </div>
    )
}

export default HomePage
