import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const StudentsAdd = () => {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
        <Navbar/>
<div className="form-page">

  <form className="form-box">

    <h1 className="text-2xl font-bold text-center">
      Add Student
    </h1>

    <div>
      <label>Name</label>

      <input
        type="text"
        className="input-field"
      />
    </div>

    <div>
      <label>Admission Year</label>

      <input
        type="number"
        className="input-field"
      />
    </div>

    <div>
      <label>Register Number</label>

      <input
        type="text"
        className="input-field"
      />
    </div>

    <div>
      <label>Department</label>

      <select className="input-field">
        <option>CSE</option>
        <option>ECE</option>
      </select>
    </div>

    <div>
      <label>Sex</label>

      <div className="flex gap-5 mt-2">
        <label>
          <input type="radio" name="sex" /> Male
        </label>

        <label>
          <input type="radio" name="sex" /> Female
        </label>
      </div>
    </div>

    <button className="btn">
      Add Student
    </button>

  </form>

</div>
        <Footer/>
    </div>
  )
}

export default StudentsAdd