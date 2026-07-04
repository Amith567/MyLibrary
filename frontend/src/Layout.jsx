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
            <div className="flex-1 flex flex-col">
                <Navbar/>
                <div className="flex-1 p-6">
                    <Outlet/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout