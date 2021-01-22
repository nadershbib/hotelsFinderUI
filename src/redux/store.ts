import {createStore} from 'redux'
import hotelReducer from './hotel/hotelReducer'
import { composeWithDevTools, } from 'redux-devtools-extension';


const store = createStore(hotelReducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())



export default store;

