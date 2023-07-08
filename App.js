import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import pizza from './assets/pizza.jpeg'

/**
 * Header
 *  1. Logo
 *  2. NavBar
 *      - Nav
 *      - Cart
 * Body
 *  1. Search
 *  2. RestaurantContainer
 *  3. Restaurant Card
 * Footer
 *  1. Links
 *  2. Support/Contact Us
 */

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)