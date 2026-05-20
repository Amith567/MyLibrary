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
  }
    }
    fetchStudents()
  },[])
  return (
    <div className="bg-[#0F172A] min-h-screen p-5 text-gray-200">

  <h1 className="text-2xl font-bold mb-5">
    Students List
  </h1>
  {students.map((student)=>(<Card key={student.id} name={student.name} department={student.department} register_no={student.register_no} />))}

</div>
  )
}

export default StudentsList