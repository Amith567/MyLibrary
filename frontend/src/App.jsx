import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './pages/AdminLogin'
import HomePage from "./pages/HomePage";
const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App