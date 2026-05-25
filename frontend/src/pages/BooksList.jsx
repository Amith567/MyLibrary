import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import API from '../api/api'

const BooksList = () => {
  const [books,setBooks]=useState([])

  useEffect(()=>{
    const fetchBook= async()=>{
      const res=await API.get('/book/list/')
      setBooks(res.data)
    }
    fetchBook()
  },[])

  return (
    <div className='main-div'>
    <Navbar/>
    <h1 className="text-2xl font-bold mt-4 text-white text-center pt-16 ">Books List</h1>
<div className="main-sec">
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  w-full pl-8 pt-3'>
    
    {books.map((book)=>(
      <BookCard
        key={book.id}
        name={book.name}
        author={book.author}
        volume={book.volume}
        quantity={book.quantity}
      />
    ))}

  </div>
</div>
<Footer/>       
</div>
  )
}

export default BooksList