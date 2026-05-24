import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Books = () => {
    return (
        <div className='main-div'>
            <Navbar />
            <div className='main-sec '>
                <Link to="/books/add">
                <div className='sec-btn'>Add Book</div></Link>
               <Link to="/books/list"> <div className='sec-btn'>List Books</div></Link>
            </div>
            <Footer/>
        </div>
    )
}
export default Books