import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const BooksAdd = () => {
  return (
    <>

    <div className='flex flex-col min-h-screen bg-black'>
    <Navbar/>
<div className="form-page">

  <form className="form-box">

    <h1 className="text-2xl font-bold text-center">
      Add Book
    </h1>

    <div>
      <label>Name</label>

      <input
        type="text"
        className="input-field"
      />
    </div>
        <div>
      <label>Author</label>

      <input
        type="text"
        className="input-field"
      />
    </div>
        <div>
      <label>Volume</label>

      <input
        type="text"
        className="input-field"
      />
    </div>
        <div>
      <label>Genere</label>

      <select className="input-field">
        <option>Sceince</option>
        <option>Friction</option>
        <option>Technology</option>
        <option>Fairy Tale</option>

      </select>
    </div>


    <button className="btn">
      Add Book
    </button>

  </form>

</div>
        <Footer/>
        </div>
    </>
  )
}

export default BooksAdd