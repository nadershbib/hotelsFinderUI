import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HotelFinder from '../../api/HotelFinder'
import { IUSEPARAMS } from '../../interfaces/APPINTERFACES';
import { StarRatings } from '../../utils/StarRatings';

export default function ReviewsHeader() {

    const [name,setName] = useState<string>('')

    const [rating,setRating] = useState<any>(0);

   let {id} = useParams<IUSEPARAMS>()

   useEffect(()=>{
 
     async function getName(){
          const response = await HotelFinder.get(`/${id}`);

          setName(response.data.data.hotel.name)
 
          setRating(response.data.data.hotel.avrg_rating); 

        //   console.log(name,rating)
     }

     getName()


   },[])
   
//    console.log(name)

    return (
        <>
          {(() => {
            if (rating) {
              return (
                 <> 
                <h1 className="text-center mt-3 mb-2 display-2">{name}</h1>
                <h2 className="text-center "><StarRatings rating={rating} /></h2>
                </>
              )
            } else{
              return (
                <h1 className="text-center mt-3 mb-2 display-2">{name}</h1>
                     
                   
              )
            } 

        })()}
            
        </>
    )
}
