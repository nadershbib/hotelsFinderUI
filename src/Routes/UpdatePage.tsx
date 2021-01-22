import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateHotel from '../components/UpdatePage/UpdateHotel';
import { IUSEPARAMS } from '../interfaces/APPINTERFACES';

export const UpdatePage = () => {


    const {id} = useParams<IUSEPARAMS>();


    console.log(id)

    return (
        <div>
            <h1 className="text-center mt-3 display-2">Update Hotel</h1>
            <UpdateHotel />
        </div>
    )
}
