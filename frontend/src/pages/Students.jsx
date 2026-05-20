import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Students = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center bg-[#0F172A]'>
                <Link to="/students/add"><div className='sec-btn'>Add Student</div></Link>
               <Link to="/students/list"> <div className='sec-btn'>List Students</div></Link>
            </div>
            <Footer />

        </div>
    )
}

export default Students