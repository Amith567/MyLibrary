import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const StudentRecord = () => {
  return (
            <div className='w-full mt-3 border-b-1 border-gray-300 shadow-xs'>
            <div className='flex justify-evenly  py-3 rounded-md capitalize break-all'>
                <div className="book-record-title w-35">Student ID</div>
                <div className="book-record-title w-60 flex-wrap">Name</div>
                <div className="book-record-title w-35">Department</div>
                <div className="book-record-title w-30">Roll No</div>
                <div className="book-record-title w-30">Admission Year</div>
                <div className="book-record-title w-30 flex gap-8">
                        <Link><FaEye className='text-blue-500'/></Link>
                        <Link><MdModeEditOutline className='text-blue-500' /></Link>
                        <Link><RiDeleteBin6Line className='text-red-500'/></Link>
                    </div>
                </div>
                </div>
  )
}

export default StudentRecord