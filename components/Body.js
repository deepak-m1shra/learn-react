import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";

export default function () {
    const [restaurants, setRestaurants] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [searchText, setSearchText] = useState("")


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
        <div className='body'>
            <div className='search'>
                <input type="text"
                    className="search-txt"
                    placeholder="Enter a restaurant name to search"
                    value={searchText}
                    onChange={handleChange} />
                <button onClick={() => {
                    let filteredRestaurants = restaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                    setSearchResult(filteredRestaurants)
                }}>Go</button>
            </div>

            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const topRatedList = searchResult.filter((res) =>
                            res.data.avgRating > 4);
                        setSearchResult(topRatedList)
                    }} >
                    Top Rated Restaurants
                </button>
            </div>
            <div>List of Restaurants</div>
            <div className='restaurant-container'>
                {
                    searchResult.map((rest, index) => {
                        return <RestaurantCard key={index} restaurant={rest} />
                    })
                }
            </div>
        </div>
    )
};