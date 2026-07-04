import React from 'react'
import { Routes,Route } from 'react-router-dom'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import Layout from './Layout'
import BookPage from './BookPage'
import StudentPage from './StudentPage'
import TransactionPage from './TransactionPage'
import ReportPage from './ReportPage'
import SettingPage from './SettingPage'
import Profile from './Profile'


const App = () => {
  return (
    
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/book' element={<BookPage/>}/>
        <Route path='/student' element={<StudentPage/>}/>
        <Route path='/transaction' element={<TransactionPage/>}/>
        <Route path='/report' element={<ReportPage/>}/>
        <Route path='/setting' element={<SettingPage/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Route>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>

      
    </Routes>
  )
}

export default App