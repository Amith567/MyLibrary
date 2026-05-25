import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TransactionCard from '../components/TransactionCard'
const TransactionList = () => {
  return (
    <div className='main-div'>
      <Navbar/>
      <div className='w-full  mt-16 p-8'>
        <p className='form-heading mb-5'>Transactions</p>
        <div className='gap-8 flex bg-slate-500 p-3 rounded-md'>
          <label htmlFor="" className='input-label text-xl'>Seach by:</label>
          <label className='input-label text-lg '><input type="radio" name="search-rad"/>All</label>
          <label className='input-label text-lg'><input type="radio" name="search-rad" />Active</label>
          <label className='input-label text-lg'><input type="radio" name="search-rad" />Closed</label>
        </div>
        </div>
<div className="flex-1">
  <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-8'>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
        <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
        <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
        <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
  </div>
</div>
      <Footer/>
    </div>
  )
}

export default TransactionList