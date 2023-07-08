import img from '../assets/food-order-logo.png'
import { useState } from 'react'

export default function Header() {
    const [loggedInStatus, setLoggedInStatus] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={img}></img>
            </div>
            <div className='nav-container'>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        loggedInStatus === "Login" ?
                            setLoggedInStatus("Logout") : setLoggedInStatus("Login")
                    }}>{loggedInStatus}</button>
                </ul>
            </div>
        </div>
    )
};