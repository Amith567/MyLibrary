import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const BookRecord = ({book}) => {
  return (
        <div className='w-full mt-3 border-b-1 border-gray-300 shadow-xs'>
            <div className='flex justify-evenly  py-3 rounded-md capitalize break-all'>
                <div className="book-record-title w-35 ">{book.book_id}</div>
                <div className="book-record-title w-60 hidden md:block ">{book.name}</div>
                <div className="book-record-title w-35 hidden md:block">{book.author}</div>
                <div className="book-record-title w-30 hidden xl:block">{book.category}</div>
                <div className="book-record-title w-20 hidden xl:block">{book.quantity}</div>
                <div className="book-record-title w-20 hidden xl:block">{book.quantity}</div>
                <div className="book-record-title w-30 flex gap-8">
                    <Link><FaEye className='text-blue-500'/></Link>
                    <Link><MdModeEditOutline className='text-blue-500' /></Link>
                    <Link><RiDeleteBin6Line className='text-red-500'/></Link>
                </div>
            </div>
            
        </div>
  )
}

export default BookRecord