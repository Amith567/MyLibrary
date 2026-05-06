import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './pages/AdminLogin'
import HomePage from "./pages/HomePage";
import Students from "./pages/Students";
import Books from "./pages/Books";
import Transactions from "./pages/Transactions";
import StudentsAdd from "./pages/StudentsAdd";
import StudentsList from "./pages/StudentsList";


const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/login" element={<AdminLogin />} />
        
        <Route path="/students" element={<Students/>}/>
        <Route path="/students/add" element={<StudentsAdd/>} />
        <Route path="/students/list" element={<StudentsList/>} />

        <Route path="/books" element={<Books/>}/>

        <Route path='/transactions' element={<Transactions/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App