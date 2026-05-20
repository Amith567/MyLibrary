import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Transactions = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center bg-[#0F172A]'>
                <div className='sec-btn'>Create Transaction</div>
                <div className='sec-btn'>Close Transaction</div>        
                <div className='sec-btn'>Active Transactions</div>              
            </div>
            <Footer/>

        </div>
    )
}

export default Transactions