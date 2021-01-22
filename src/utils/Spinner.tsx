import React, { FunctionComponent } from 'react'
import './Spinner.css'
const Spinner:FunctionComponent = () => {


    return (

        <div className="spinner-container d-flex justify-content-center align-items-center">
             <div className="spinner-border" role="status" style = {{width:'8.5rem',height:'8.5rem'}}>
                   <span className="sr-only">Loading...</span>
              </div>
        </div>
    )
}

export default Spinner
