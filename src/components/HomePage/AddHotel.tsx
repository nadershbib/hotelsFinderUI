import React, { useState } from 'react'
import './AddHotel.css';

import { DefaultRootState, useDispatch, useSelector } from 'react-redux'
import HotelFinder from '../../api/HotelFinder'
import { addHotel, getHotels } from '../../redux/hotel/hotelCreators';
import { objBuilder } from '../../utils/functionsHelper';




export const AddHotel = () => {

   const [name,setName] = useState<string>('');
   const [location,setLocation] = useState<string>('');
   const [price_range,setPriceRange] = useState<number | string>(0);

   let dispatch = useDispatch();

   
  const handleSubmit = async (e:React.MouseEvent<HTMLFormElement>)=>{

     e.preventDefault();

     const response = await HotelFinder.post("/",objBuilder(name,location,price_range))
  
    // dispatch(addHotel(objBuilder(name,location,price_range)));
    dispatch(await getHotels());

    setName('')
    setLocation('')
    setPriceRange(0)

  }


    return (
        <div className="mt-4">
            <form action="" onSubmit = {handleSubmit}>
                <div className="form-row">
                    <div className="col-sm-12 col-md-4">
                      <input type="text" className="form-control" placeholder="name" value={name} onChange = {e=>setName(e.target.value)} required />
                    </div>
                    <div className="col-sm-12 col-md-4">
                       <input type="text" className="form-control" placeholder="location" value={location} onChange = {e=>setLocation(e.target.value)} required/>
                    </div>
                    <div className="col-sm-12 col-md-3">
                       <select className="custom-select" value={price_range}  onChange ={e=>setPriceRange(e.target.value)} required>
                           <option value="0" selected disabled>Price Range</option>
                           <option value="1">$</option>
                           <option value="2">$$</option>
                           <option value="3">$$$</option>
                           <option value="4">$$$$</option>
                           <option value="5">$$$$$</option>
                       </select>
                    </div>
                    <button type="submit" className="btn btn-primary ml-sm-3">Add</button>
                </div>
            </form>
        </div>
    )
}
