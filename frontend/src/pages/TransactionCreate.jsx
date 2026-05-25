import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TransactionCreate = () => {
  return (
    <>
    <div className='main-div'>
        <Navbar/>
        <div className='main-sec'>
            <form action="" className='form-box'>
                <div className='mt-3'>
                    <p className='form-heading'>Create Transaction</p>
                </div>
                <div>
                    <label htmlFor="" className='input-label'>Student ID:</label>
                    <input type="text" name="" id="" className='input-field' />
                </div>
                <div>
                    <label htmlFor="" className='input-label'>Book ID:</label>
                    <input type="text" name="" id="" className='input-field' />
                </div>
                <div>
                    <label htmlFor="" className='input-label'>Time Period</label>
                    <input type="date" name="" id=""  className='input-field'/>
                </div>
                <div>
                    <button className='btn w-full'>Submit</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default TransactionCreate