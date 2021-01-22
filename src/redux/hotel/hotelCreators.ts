import types from './hotelTypes'
import {IHOTEL, IHOTELS} from '../../interfaces/model'
import HotelFinder from '../../api/HotelFinder';


export async function getHotels(){
    const response = await HotelFinder.get('/');
    return {
        type:types.GET_HOTELS,
        hotels: (response.data.data.hotels as IHOTELS[])
    }

}


export function addHotel (hotel:IHOTEL){


    return {
        type:types.ADD_HOTEL,
        hotel:hotel
    }

}    











