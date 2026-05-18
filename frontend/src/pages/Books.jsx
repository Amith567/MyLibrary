import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Books = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center bg-black '>
                <Link to="/books/add">
                <div className='sec-btn'>Add Book</div></Link>
               <Link to="books/list"> <div className='sec-btn'>List Books</div></Link>
            </div>
            <Footer/>

        </div>
    )
}

export default Books