import { DefaultRootState } from 'react-redux'
import { IHOTEL, IHOTELS } from '../../interfaces/APPINTERFACES'
import types from './hotelTypes'

const {ADD_HOTEL,GET_HOTELS} = types

interface IACTION {
    type:string
    hotel?:IHOTEL | undefined,
    hotels?:IHOTELS[] | undefined
}

interface INITIALSTATE {
     Hotels:IHOTELS[]
}


const initialState:INITIALSTATE = {

  Hotels:[],

}


const hotelReducer:any = (state=initialState,action:IACTION)=>{

     switch(action.type){

       case GET_HOTELS : return {
        
        ...state,
        Hotels:action.hotels
        

       } 

        case ADD_HOTEL : return {
            ...state,
            Hotels:[...state.Hotels,action.hotel]

        }

        
        

     }

}

export default hotelReducer

















