import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";



const TransactionRecord = ({transaction}) => {
  return (
        <div className='w-full mt-3 border-b-1 border-gray-300 shadow-xs'>
            <div className='flex justify-evenly  py-3 rounded-md capitalize break-all'>
                <div className="book-record-title w-35">{transaction.transaction_id}</div>
                <div className="book-record-title w-50 flex-wrap hidden md:block">{transaction.book_name}</div>
                <div className="book-record-title w-40 hidden md:block">{transaction.student_name}</div>
                <div className="book-record-title w-30 hidden xl:block">{transaction.taken_date.slice(0,10)}</div>
                <div className="book-record-title w-30 hidden xl:block"><span className={`px-3 py-1 text-sm rounded-full text-white ${ transaction.is_active ? "bg-green-500" : "bg-red-500"}`}>{transaction.is_active ? "Active" :"Closed"}</span></div>
                <div className="book-record-title w-30 flex gap-8">
                    <Link><FaEye className='text-blue-500'/></Link>
                    <Link><MdModeEditOutline className='text-blue-500' /></Link>
                    <Link><RiDeleteBin6Line className='text-red-500'/></Link>
                </div>
            </div>
            
        </div>
  )
}

export default TransactionRecord