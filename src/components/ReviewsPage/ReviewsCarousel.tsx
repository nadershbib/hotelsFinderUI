import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelFinder from "../../api/HotelFinder";
import { IREVIEW, IUSEPARAMS } from "../../interfaces/APPINTERFACES";
import { StarRatings } from "../../utils/StarRatings";
import "./ReviewsCarousel.css";

export default function ReviewsCarousel() {

    const [reviews,setReviews] = useState<IREVIEW[]>([]);

    let {id} = useParams<IUSEPARAMS>();

   useEffect(()=>{

       async function getReviews(){

         const response = await HotelFinder.get(`${id}/reviews`);


         setReviews(response.data.data.reviews)

         

       }

       getReviews();

   },[])


//    console.log(reviews.length)

  return (
    <div className="mt-5">


      {(() => {
             
               if(reviews){

                 if(reviews.length > 1){
                     return (
                        <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                        data-interval="4000"
                        >
                          <div className="carousel-inner">
                            
                          { reviews.length > 0 &&
                              reviews.map((review:IREVIEW,index)=>{
                                return (
                                    <div className={`carousel-item row no-gutters ${index===0 ? 'active' : ''}`} key={review.id}>
                                        <div className="card bg-light mb-3 col-5 mx-auto">
                                             <div className="card-header d-flex justify-content-between align-items-center">
                                                  <h4 className="name">{review.name}</h4>
                                                   <StarRatings rating={review.rating} />
                                             </div>
             
                                             <div className="card-body">
                                                <div className="card-title">
                                                    <h5>Review</h5>
                                                </div>
                                                <p className="card-text">
                                                    {review.review}
                                                </p>
                                             </div>   
                                         </div>  
                                    </div>
                                )
                            })
                          }

                          
                    <a
                         className="carousel-control-prev"
                         href="#carouselExampleControls"
                         role="button"
                        data-slide="prev"
                     >
                     <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                     ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                   <a
                    className="carousel-control-next"
                        href="#carouselExampleControls"
                         role="button"
                         data-slide="next"
                    >
                       <span
                         className="carousel-control-next-icon"
                          aria-hidden="true"
                       ></span>
                        <span className="sr-only">Next</span>
                    </a>




                          </div>
                        </div>    
                     )
                 }

                 else if (reviews.length === 1){
 
                      

                          return (
                              <div className="row no-gutters">

                        <div className="card bg-light mb-3 col-5 mx-auto">
                             <div className="card-header d-flex justify-content-between align-items-center">
                               <h4 className="name">{reviews[0].name}</h4>
                               <StarRatings rating={reviews[0].rating} />
                        </div>
    
                             <div className="card-body">
                                 <div className="card-title">
                                    <h5>Review</h5>
                                 </div>
                                 <p className="card-text">
                                   {reviews[0].review}
                                </p>
                             </div>   
                        </div>  
                     </div>  

                           )

                    

                 }

                
                 else {

                    return (
                        <h6 className="text-white" hidden ></h6>
                    )
                 }



               }






        })()}






         
        </div>
      
  );
}
