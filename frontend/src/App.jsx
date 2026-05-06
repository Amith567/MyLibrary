import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './pages/AdminLogin'
import HomePage from "./pages/HomePage";
import Students from "./pages/Students";
import Books from "./pages/Books";
import Transactions from "./pages/Transactions";
const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/login" element={<AdminLogin />} />
        
        <Route path="/students" element={<Students/>}/>

        <Route path="/books" element={<Books/>}/>

        <Route path='/transactions' element={<Transactions/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App