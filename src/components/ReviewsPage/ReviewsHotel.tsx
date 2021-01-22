import React, { useState } from 'react'
import ReviewsHeader from './ReviewsHeader'
import ReviewsCarousel from './ReviewsCarousel'
import { useHistory, useParams } from 'react-router-dom';
import { IUSEPARAMS } from '../../interfaces/model';
import HotelFinder from '../../api/HotelFinder';
import { objReviewBuilder } from '../../utils/functionsHelper';
export default function ReviewsHotel() {
  
    const [name,setName] = useState<string>('');
    const [rating,setRating] = useState<any>(0);
    const [review,setReview] = useState<string>('');
    
    let {id} = useParams<IUSEPARAMS>();

    let history = useHistory();

   const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>)=>{
  
     e.preventDefault();

     try{

         const result = await HotelFinder.post(`/${id}/reviews`,{
             hotel_id:id,
             name,
             review,
             rating
         });

         console.log(result)
    
         history.push("/");

     }
     catch(err){
         console.log(err.message);
     }

   }


    return (
        <div>
            <ReviewsCarousel />

            <form action="" className="mt-5">
                <div className="form-group">

                   <div className="form-row">
                        <div className="col">
                            <label htmlFor="name" className="ml-1">Name</label>
                            <input type="text" className="form-control" placeholder="name" required onChange ={e=>setName(e.target.value)} value={name} />
                        </div>
                        <div className="col">
                            <label htmlFor="rating" className="ml-1">Rating</label>
                            <select name="rating" id="rating" className="custom-select" required onChange = {e=>setRating(e.target.value)} value={rating}>
                               <option value="0" selected disabled>Rating</option>  
                               <option value="1">⭐</option>  
                               <option value="2">⭐⭐</option>  
                               <option value="3">⭐⭐⭐</option>  
                               <option value="4">⭐⭐⭐⭐</option>  
                               <option value="5">⭐⭐⭐⭐⭐</option>  
                            </select>
                        </div>
                   </div>

                </div>

                <div className="form-group">
                    <label htmlFor="review" className="ml-1">Review</label>
                    <textarea id="review"  className="form-control" placeholder="Your thoughts ..." required onChange = {e=>setReview(e.target.value)} value={review}>
                        
                    </textarea>
                </div>

                <button className="btn btn-primary" type="submit" onClick ={(e)=>handleSubmit(e)}>Submit</button>
                <button className="btn btn-danger mx-3" onClick ={()=>history.push("/")}>Go Back</button>
            </form>
        </div>
    )
}
