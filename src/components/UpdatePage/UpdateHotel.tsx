import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { resolveModuleName } from 'typescript';
import HotelFinder from '../../api/HotelFinder';
import { IUSEPARAMS } from '../../interfaces/model';
import { objBuilder } from '../../utils/functionsHelper';



export default function UpdateHotel() {

    const [name,setName] = useState<any>('');
    const [location,setLocation] = useState('');
    const [price_range,setPriceRange] = useState('');
    const [data,setData] = useState<any>('');

    const {id} = useParams<IUSEPARAMS>();

    let history = useHistory();

    useEffect(()=>{
        
        const fetchHotelData = async () =>{
            const response = await HotelFinder.get("/");

             setData(response.data.data)
           
             setName(data && data.hotel.name)
             setLocation(data && data.hotel.location)
             setPriceRange(data && data.hotel.price_range)
        }
       
       fetchHotelData(); 

    },[])

    

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>)=>{

    e.preventDefault();

    await HotelFinder.put(`/${id}`,objBuilder(name,location,price_range))
   
    history.push("/");

  }

 
    
    return (
        
        <div>
            
        <form action="">
           <div className="form-group">

             <label htmlFor="name">Name</label>
             <input type="text" id="name" className="form-control" value={name} onChange = {e=>setName(e.target.value)} required />

           </div>
           <div className="form-group">

             <label htmlFor="location">Location</label>
             <input type="text" id="location" className="form-control" value={location} onChange = {e=>setLocation(e.target.value)} required />

           </div>
           <div className="form-group">

             <label htmlFor="priceRange">PriceRange</label>
             <input type="number" id="priceRange" className="form-control"  min="1" max="5" value={price_range} onChange = {e=>setPriceRange(e.target.value)} required />

           </div>

           <button onClick={handleSubmit} className="btn btn-primary" type="submit">
               Submit
           </button>

           <button className="btn btn-danger mx-3" onClick = {()=>history.push("/")}>Go back</button>

        </form>
       
         
     </div>
    )
}
