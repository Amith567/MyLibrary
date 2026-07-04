import React, { useEffect, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import BookRecord from './components/BookRecord';
import API from './axios';

const BookPage = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        const loadbooks=async()=>{
            try{
                const res=await API.get("api/book/")
                console.log(res.data)
                setBooks(res.data)
            }catch(err){
                alert("something went wrong.")
            }
        }
        loadbooks()

    },[])
  return (
    <div className='min-h-screen'>
        <div className='w-full flex justify-between flex-col md:flex-row gap-4'>
            <div className='text-xl md:text-2xl font-bold'>Books</div>
            <form action="" className='flex gap-10'>
                <input type="text" className='px-3 py-2 rounded-md border-1 border-gray-300 w-80 text-sm outline-none' placeholder='Search book...'/>
            </form>
            <button className='w-40 h-10 bg-blue-500 flex justify-center gap-5 items-center text-white rounded-md'><FiPlus className='text-white text-2xl'/>Add Book</button>

        </div>
        <div className='w-full mt-5'>
            <div className='flex justify-evenly bg-gray-100 py-3 rounded-md'>
                <div className="book-record-title w-35">Book ID</div>
                <div className="book-record-title w-60 flex-wrap hidden md:block">Title</div>
                <div className="book-record-title w-35 hidden md:block">Author</div>
                <div className="book-record-title w-30 hidden xl:block">Genere</div>
                <div className="book-record-title w-20 hidden xl:block">Quantity</div>
                <div className="book-record-title w-20 hidden xl:block">Available</div>
                <div className="book-record-title w-30">Actions</div>
            </div>
            {books.map((book)=>(
                <BookRecord key={book.id} book={book}/>
            ))}
            
        </div>
    </div>
  )
}

export default BookPage