import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import AdminLogin from './pages/AdminLogin'
import HomePage from "./pages/HomePage";
import Students from "./pages/Students";
import StudentsAdd from "./pages/StudentsAdd";
import StudentsList from "./pages/StudentsList";
import Books from "./pages/Books";
import BooksAdd from "./pages/BooksAdd";
import BooksList from "./pages/BooksList";
import Transactions from "./pages/Transactions";



const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<AdminLogin />}/>
        
        <Route element={<ProtectedRoute/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/students/add" element={<StudentsAdd/>} />
        <Route path="/students/list" element={<StudentsList/>} />

        <Route path="/books" element={<Books/>}/>
        <Route path="/books/add" element={<BooksAdd/>}/>
        <Route path="/books/list" element={<BooksList/>}/>
        
        <Route path='/transactions' element={<Transactions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App