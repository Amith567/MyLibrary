import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Transactions = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex justify-around items-center bg-[#0F172A]'>
                <Link to='/transactions/create'><div className='sec-btn'>Create Transaction</div></Link>
                <Link to='/transactions/close'><div className='sec-btn'>Close Transaction</div></Link>        
                <Link to='/transactions/list'><div className='sec-btn'>List Transactions</div></Link>          
            </div>
            <Footer/>

        </div>
    )
}

export default Transactions