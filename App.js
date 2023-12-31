import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import UserContext from './utils/UserContext'


// Example of lazy loading
const Electronics = lazy(() => import('./components/Electronics'))
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
    const [user, setUser] = useState({
        fName: "Dee",
        lastName: "Doe"
    })
    return (

        <div className="app">
            <UserContext.Provider
                value={
                    {
                        user: user,
                        setUser: setUser
                    }
                }>
                <Header />
                <Outlet />
                {/* <Body /> */}
                {/* <About /> */}
            </UserContext.Provider>

        </div >
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/electronics',
                // wrap the component within Suspense component from react, fallback value is shown if set else blank
                element: <Suspense fallback={<h1>The website is loading, please wait.....</h1>}><Electronics /></Suspense>
            }
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)