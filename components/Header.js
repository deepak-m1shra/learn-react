import img from '../assets/food-order-logo.png'
import { useState, lazy } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'


export default function Header() {
    const [loggedInStatus, setLoggedInStatus] = useState("Login")
    const onlineStatus = useOnlineStatus()

    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to="/"><img className='logo' src={img}></img></Link>
            </div>
            <div className='nav-container'>
                <ul className="nav-items">
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
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