import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Students = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center '>
                <div className='sec-btn'>Add Student</div>
                <div className='sec-btn'>View Student</div>
            </div>
            <Footer />

        </div>
    )
}

export default Students