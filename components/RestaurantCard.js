import React from 'react'
import pizzaImg from '../assets/pizza.jpeg'

export default function RestaurantCard({ restaurant }) {
    const cloudinaryBaseImageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    return (
        // name, avgRating, cloudinaryImageId, costForTwo, cuisines, slaString
        <div className='restaurant-card'>
            {/* {console.log(restaurant.data)} */}
            <h3> {restaurant.data.name} </h3>
            <img src={cloudinaryBaseImageUrl + restaurant.data.cloudinaryImageId} className='res-logo' />
            <h5>Rating: {restaurant.data.avgRating}</h5>
            <h5>{restaurant.data.cuisines.join(', ')}</h5>
            <h5>Delivery Time: {restaurant.data.slaString}</h5>
        </div>
    )
};