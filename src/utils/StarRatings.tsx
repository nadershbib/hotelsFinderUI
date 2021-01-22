import { FunctionComponent } from 'react';

export  const StarRatings: FunctionComponent<{ rating: number }> = props => {
 

    let starArray = [];

    for(let i = 1;i<=5; i++){
        if(i<=props.rating){
             starArray.push(<i className="fas fa-star text-warning"></i>);
        }

        else if (i<=Math.ceil(props.rating) && !Number.isInteger(props.rating)){
           starArray.push(<i className="fas fa-star-half-alt text-warning"></i>)
        }

        else if (props.rating<=i){
            starArray.push(<i className="far fa-star text-warning"></i>)
        }
    }


return (
   <div>

    {starArray}

   </div>


)



};