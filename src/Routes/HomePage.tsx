import React from 'react'
import { AddHotel } from '../components/HomePage/AddHotel'
import { Header } from '../components/HomePage/Header'
import { HotelsList } from '../components/HomePage/HotelsList'
import {StarRatings}  from '../utils/StarRatings'
export const HomePage = () => {
    return (
        <div>
            
            <Header />
            <AddHotel />
            <HotelsList />
        </div>
    )
}
