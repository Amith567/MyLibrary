import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Books = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center bg-black '>
                <div className='sec-btn'>Add Book</div>
                <div className='sec-btn'>List Books</div>
            </div>
            <Footer/>

        </div>
    )
}

export default Books