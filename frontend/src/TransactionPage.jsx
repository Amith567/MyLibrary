import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import TransactionRecord from "./components/TransactionRecord";

const TransactionPage = () => {
  return (
    <div className='min-h-screen'>
        <div className='w-full flex justify-between'>
            <div className='text-2xl font-bold'>Transactions</div>
            <form action="" className='flex gap-10'>
                <input type="text" className='px-3 py-2 rounded-md border-1 border-gray-300 w-80 text-sm outline-none' placeholder='Search transaction...'/>
                <button className='w-50 h-10 bg-blue-500 flex justify-center gap-5 items-center text-white rounded-md'><FiPlus className='text-white text-2xl'/>Create Transaction</button>
                <button className='w-50 h-10 bg-red-500 flex justify-center gap-5 items-center text-white rounded-md'><IoMdClose className='text-white text-2xl'/>Close Transaction</button>

            </form>
        </div>
        <div className='w-full mt-5'>
            <div className='flex justify-evenly bg-gray-100 py-3 rounded-md'>
                <div className="book-record-title w-35">Transaction ID</div>
                <div className="book-record-title w-50 flex-wrap">Book Name</div>
                <div className="book-record-title w-40">Student Name</div>
                <div className="book-record-title w-30">Taken Date</div>
                <div className="book-record-title w-30">Status</div>
                <div className="book-record-title w-30">Actions</div>
            </div>
            <TransactionRecord/> <TransactionRecord/> <TransactionRecord/> <TransactionRecord/>
        </div>            
            

    </div>
  )
}

export default TransactionPage