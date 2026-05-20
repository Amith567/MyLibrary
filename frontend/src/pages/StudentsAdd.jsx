import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import API from '../api/api'

const StudentsAdd = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: "", admission_year: "", register_no: "", department: "", gender: "" })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("student/add/", formData)
      window.alert("student added succesfully !")
      navigate("/")

    } catch (error) {
      alert(error.response?.data?.error || "something went wrong!")
    }
  }

  return (

    <div className='flex flex-col min-h-screen bg-[#0F172A]'>
      <Navbar />
      <div className="form-page">

        <form className="form-box" onSubmit={handleSubmit}>

          <h1 className="text-2xl font-bold text-center">
            Add Student
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
            <label>Admission Year</label>

            <input
              type="number"
              className="input-field"
              name="admission_year"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Register Number</label>

            <input
              type="text"
              className="input-field"
              name="register_no"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Department</label>

            <select
              className="input-field"
              name="department"
              onChange={handleChange}
            ><option value="" disabled>Select Department</option>
              <option value="CSE">CSE</option>
              <option value="EC">EC</option>
              <option value="CE">CE</option>
              <option value="ME">ME</option>
              <option value="EEE">EEE</option>
            </select>
          </div>

          <div>
            <label>Sex</label>

            <div className="flex gap-5 mt-2">
              <label>
                <input type="radio" name="gender" value="M" onChange={handleChange} /> Male
              </label>

              <label>
                <input type="radio" name="gender" value="F" onChange={handleChange} /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="O" onChange={handleChange} /> Others
              </label>
            </div>
          </div>

          <button className="btn" >
            Add Student
          </button>

        </form>

      </div>
      <Footer />
    </div>
  )
}

export default StudentsAdd