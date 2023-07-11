import RestaurantCard from "./RestaurantCard"
import { useState, useEffect, useContext } from 'react'
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";

export default function () {
    const [restaurants, setRestaurants] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState("")
    const { user, setUser } = useContext(UserContext)


    useEffect(() => {
        callSwiggyApi()
    }, []);

    const callSwiggyApi = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5679146&lng=73.91434319999999&page_type=DESKTOP_WEB_LISTING')
        const json = await res.json()
        // use optional chaining
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setSearchResult(json?.data?.cards[2]?.data?.data?.cards)
        // console.log(json)
    };

    const handleChange = ((event) => {
        setSearchText(event.target.value)
    })

    console.log("body rendered")

    // Conditional rendering
    return restaurants.length === 0 ? <Shimmer /> : (
        <div className="bg-">
            <div>
                <input type="text"
                    className="m-4 relative"
                    placeholder="Enter a restaurant name to search"
                    value={searchText}
                    onChange={handleChange} />
                <button className="w-16 rounded-lg" onClick={() => {
                    let filteredRestaurants = restaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                    setSearchResult(filteredRestaurants)
                }}>Search</button>
                <input type="text"
                    placeholder="Context demo in progress..."
                    onChange={
                        e => setUser({
                            ...user,
                            fName: e.target.value
                        })
                    }
                    value={user.fName}
                    className="border-red-700 border-2 hidden"
                >

                </input>
            </div>

            <div className="m-4">
                <button
                    className="bg-green-300 content-evenly rounded-lg"
                    onClick={() => {
                        const topRatedList = searchResult.filter((res) =>
                            res.data.avgRating > 4);
                        setSearchResult(topRatedList)
                    }} >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="m-4">
                <span className="font-extrabold">List of Restaurants</span>
            </div>
            <div className='m-4 p-4 flex flex-wrap'>
                {
                    searchResult.map((rest, index) => {
                        return <RestaurantCard key={index} restaurant={rest} />
                    })
                }
            </div>
            <Footer />
        </div >
    )
};