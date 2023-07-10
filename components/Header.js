import img from '../assets/food-order-logo.png'
import { useState, lazy } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'


export default function Header() {
    const [loggedInStatus, setLoggedInStatus] = useState("Login")
    const onlineStatus = useOnlineStatus()

    return (
        <div className='flex justify-between shadow-xl m-2 bg-cyan-300'>
            <div className='logo-container'>
                <Link to="/"><img className='w-28' src={img}></img></Link>
            </div>
            <div className='nav-container mx-4 px-8'>
                <ul className="flex p-4 m-4">
                    <li className='px-2'>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className='px-2'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-2'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='px-2'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-2'>Cart</li>
                    <li className='px-2'>
                        <Link to="/electronics">Electronics</Link>
                    </li>
                    <button onClick={() => {
                        loggedInStatus === "Login" ?
                            setLoggedInStatus("Logout") : setLoggedInStatus("Login")
                    }}>{loggedInStatus}</button>
                </ul>
            </div>
        </div >
    )
};