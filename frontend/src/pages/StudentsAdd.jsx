import React, { useState } from 'react'
import toast from "react-hot-toast";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import API from '../api/api'

const StudentsAdd = () => {
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: "", admission_year: "", register_no: "", department: "", gender: "" })

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const name=formData.name.trim()
    if(!name){
      setError("Name required !")
      setLoading(false)
      return
    }
    if(name.length>20){
      setError("Maximum lenght of name is 20 !")
      setLoading(false)
      return
    }
    if(!/^[A-Za-z ]+$/.test(name)){
      setError("Name can conatains only letters and space !")
      setLoading(false)
      return
    }
    if (!/^\d{4}$/.test(formData.admission_year)){
      setError('Invalid year !')
      setLoading(false)
      return
    }
    if(!/^[A-Z]{3}\d{2}[A-Z]{2,3}\d{3}$/.test(formData.register_no)){
      setError("Invalid register number format !. eg: AWH22CS001 ")
      setLoading(false)
      return
    }
    if(formData.department.length==0){
      setError("Invalid department !")
      setLoading(false)
      return
    }
    if(formData.gender.length!=1){
      setError("Invalid gender !")
      setLoading(false)
      return
    }

    setError("")

    try {
      const res = await API.post("student/add/", formData)
      toast.success("Student added successfully!");
      navigate("/")
    } catch (error) {
      const errors = error.response?.data?.error;

      if (errors?.register_no) {
        setError(errors.register_no[0]);}
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className='main-div'>
      <Navbar />
      <div className="main-sec">

        <form className="form-box" onSubmit={handleSubmit}>
          <h1 className="form-heading">Add Student</h1>
          {error &&<div>
            <p className="error-msg">{error}</p>   
         </div>}
          <div>
            <label className='input-label'>Name :</label>
            <input
              type="text"
              className="input-field"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='input-label'>Admission Year :</label>
            <select
              name="admission_year"
              className="input-field"
              onChange={handleChange}
            >
              <option value="">Select Year</option>
            {Array.from({ length: 17 }, (_, i) => 2010 + i).map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
            </select>
          </div>

          <div>
            <label className='input-label'>Register Number :</label>
            <input
              type="text"
              className="input-field"
              name="register_no"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='input-label'>Department :</label>
            <select
              className="input-field"
              name="department"
              onChange={handleChange}
            >
              <option value="" >Select Department</option>
              <option value="cse">CSE</option>
              <option value="ec">EC</option>
              <option value="ce">CE</option>
              <option value="me">ME</option>
              <option value="eee">EEE</option>
            </select>
          </div>

          <div>
            <label className='input-label'>Sex : </label>
            <div className="flex gap-3">
              <label className='input-label'>
                <input type="radio" name="gender" value="m" onChange={handleChange} /> Male
              </label>
              <label className='input-label'>
                <input type="radio" name="gender" value="f" onChange={handleChange} /> Female
              </label>
              <label className='input-label'>
                <input type="radio" name="gender" value="o" onChange={handleChange} /> Others
              </label>
            </div>
          </div>

          <button className={loading ? "btn cursor-not-allowed opacity-50" : "btn"}  disabled={loading}>
            {loading? "Submitting..." : "Submit"}
          </button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default StudentsAdd