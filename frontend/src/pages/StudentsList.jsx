import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

const StudentsList = () => {
  return (
    <div className="bg-black min-h-screen p-5 text-gray-200">

  <h1 className="text-2xl font-bold mb-5">
    Students List
  </h1>
<Card/><Card/><Card/><Card/>
</div>
  )
}

export default StudentsList