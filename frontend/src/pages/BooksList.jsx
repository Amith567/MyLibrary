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
    <>
    <Navbar/>
    <div className="bg-[#0F172A] h-screen p-5 text-gray-200 mt-10">
        

  <h1 className="text-2xl font-bold mt-16">
    Books List
  </h1>
  <div className='flex gap-5 flex-wrap'>
  {books.map((book)=>(<BookCard key={book.id} name={book.name} author={book.author} volume={book.volume} quantity={book.quantity}/>))}
</div>
</div>
<Footer/>       
</>
  )
}

export default BooksList