import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoute =()=>{
    const isLoggined=localStorage.getItem('user')
    return isLoggined ? <Outlet /> : <Navigate to='/login'/>;
}

export default ProtectedRoute