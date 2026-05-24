import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TransactionCreate = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='w-full flex-1 items-center justify-center flex'>
            <form action="" className=' p-3 border flex flex-col gap-2 border-black '>
                <div className='mt-3'>
                    <p className='text-center text-2xl bold'>Create Transaction</p>
                </div>
                <div>
                    <label htmlFor="">Student ID:</label>
                    <input type="text" name="" id="" className='input-field' />
                </div>
                <div>
                    <label htmlFor="">Book ID:</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Time Period</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default TransactionCreate