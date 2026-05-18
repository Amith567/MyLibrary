import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BooksList = () => {
  return (
    <><Navbar/>
    <div className="bg-black h-screen p-5 text-gray-200 mt-10">
        

  <h1 className="text-2xl font-bold mb-5">
    Books List
  </h1>
<Card/><Card/><Card/><Card/>
</div>
<Footer/>       
</>
  )
}

export default BooksList