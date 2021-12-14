import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import authReducer from "./authReducer";



const rootReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    authReducer, 
    
})

export default rootReducer;