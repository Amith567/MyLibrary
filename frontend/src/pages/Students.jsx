import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Students = () => {
    return (
        <div className='main-div'>
            <Navbar />
            <div className='main-sec'>
                <Link to="/students/add"><div className='sec-btn'>Add Student</div></Link>
                <Link to="/students/list"> <div className='sec-btn'>List Students</div></Link>
            </div>
            <Footer />
        </div>
    )
}
export default Students