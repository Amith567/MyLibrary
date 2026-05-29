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
                    <select className='input-field'>
                        <option value="7">7 Days</option>
                        <option value="14">14 Days</option>
                        <option value="21">21 Days</option>
                        <option value="28">28 Days</option>
                    </select>
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