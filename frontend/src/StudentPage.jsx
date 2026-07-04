import { FiPlus } from "react-icons/fi";
import StudentRecord from "./components/StudentRecord";


const StudentPage = () => {
  return (
    <div className='min-h-screen'>
        <div className='w-full flex justify-between flex-col md:flex-row gap-4'>
            <div className='text-xl md:text-2xl font-bold'>Students</div>
            <form action="" className='flex gap-10'>
                <input type="text" className='px-3 py-2 rounded-md border-1 border-gray-300 w-80 text-sm outline-none' placeholder='Search student...'/>
            </form>
        <button className='w-40 h-10 bg-blue-500 flex justify-center gap-5 items-center text-white rounded-md'><FiPlus className='text-white text-2xl'/>Add Student</button>

        </div>
        <div className='w-full mt-5'>
            <div className='flex justify-evenly bg-gray-100 py-3 rounded-md'>
                <div className="book-record-title w-35">Student ID</div>
                <div className="book-record-title w-60 flex-wrap hidden md:block">Name</div>
                <div className="book-record-title w-35 hidden md:block">Department</div>
                <div className="book-record-title w-30 hidden lg:block">Roll No</div>
                <div className="book-record-title w-30 hidden lg:block">Admission Year</div>
                <div className="book-record-title w-30">Actions</div>
            </div>
            <StudentRecord/>
            <StudentRecord/>
            <StudentRecord/>
            <StudentRecord/>
            <StudentRecord/>
        </div>            
            

    </div>
  )
}

export default StudentPage