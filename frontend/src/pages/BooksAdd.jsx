import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'

const BooksAdd = () => {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    name:"",author:"",volume:"",genere:""
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
    const res=await API.post("book/add/",formData)
    alert("book added succesfully!")
    navigate('/')
    }catch(error){
      alert(error.response?.data?.error || "something went wrong!")
      console.log(error)
    }

  }
  return (
    <>

    <div className='flex flex-col min-h-screen bg-[#0F172A]'>
    <Navbar/>
<div className="form-page">

  <form className="form-box" onSubmit={handleSubmit}>

    <h1 className="text-2xl font-bold text-center">
      Add Book
    </h1>

    <div>
      <label>Name</label>

      <input
        type="text"
        className="input-field"
        name="name"
        onChange={handleChange}
      />
    </div>
        <div>
      <label>Author</label>

      <input
        type="text"
        className="input-field"
        name="author"
        onChange={handleChange}
      />
    </div>
        <div>
      <label>Volume</label>

      <input
        type="text"
        className="input-field"
        name='volume'
        onChange={handleChange}
      />
    </div>
        <div>
      <label>Genere</label>

      <select className="input-field" name='genere' onChange={handleChange}>
        <option value="science">Sceince</option>
        <option value="friction">Friction</option>
        <option value="technology">Technology</option>
        <option value="fairy tale">Fairy Tale</option>

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