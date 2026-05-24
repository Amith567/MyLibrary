import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import API from '../api/api'

const StudentsList = () => {
  const [students,setStudents]=useState([])

  useEffect(()=>{
    const fetchStudents=async()=>{
      try{
      const res=await API.get('/student/list/')
      setStudents(res.data)
      }catch(error){
        alert(error.response?.data?.error || "something went wrong")
      }}
      fetchStudents()
  },[])

  return (
    <div className="main-div">
      <Navbar/>
      <h1 className="text-2xl font-bold mt-4 text-white text-center pt-16 ">Students List</h1>
      <div className='main-sec-list'>
      {students.map((student)=>(<Card key={student.id} name={student.name} department={student.department} register_no={student.register_no} />))}
      </div>
      <Footer/>
    </div>
  )
}

export default StudentsList