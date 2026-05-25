import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const TransactionClose = () => {
  return (
    <div className='main-div'>
      <Navbar/>
      <div className="main-sec">
        <form action="" className='form-box'>
          <p className='form-heading'>Close Transaction</p>
          <div>
            <label htmlFor="" className='input-label text-lg'>Search By :</label>
            <div className='flex gap-5 mt-2'>
              <label htmlFor="" className='input-label'><input type="radio" name="search-by" id="" />Transaction ID</label>
              <label htmlFor="" className='input-label'><input type="radio" name="search-by" id="" />Book ID</label>
              <label htmlFor="" className='input-label'><input type="radio" name="search-by" id="" />Student ID</label>
            </div>
          </div>
          <input type="text" name="" id="" className='input-field'/>
          <button className='btn'>Submit</button>
        </form>
      </div>
      <Footer/>

    </div>
  )
}

export default TransactionClose