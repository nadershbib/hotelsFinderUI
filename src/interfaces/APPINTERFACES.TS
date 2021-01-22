import { Key } from "react";

export interface IHOTEL {
    name:string,
    location:string,
    price_range:any
}

export interface IHOTELS extends IHOTEL {

    id:string|number,
    hotel_id:number,
    count:number,
    avrg_rating:number
   
}


export interface IUSEPARAMS {
    id:any
}



export interface IREVIEW {

  id:number|string,
  hotel_id:number|string,
  name:string,
  review:string,
  rating:any

}







