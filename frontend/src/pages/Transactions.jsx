import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Transactions = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center '>
                <div className='sec-btn'>Create Transaction</div>
                <div className='sec-btn'>Close Transaction</div>
            </div>
            <Footer/>

        </div>
    )
}

export default Transactions