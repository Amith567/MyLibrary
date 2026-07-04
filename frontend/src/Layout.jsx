import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import React from 'react'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <div className="flex flex-1">
            <Sidebar/>
            <div className="flex-1 flex flex-col ">
                <Navbar className="w-full"/>
                <div className="flex-1 p-6 w-full">
                    <Outlet/>
                </div>
                <Footer className="w-full"/>
            </div>
        </div>
        
    </div>
  )
}

export default Layout