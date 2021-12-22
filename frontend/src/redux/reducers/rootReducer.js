import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import authReducer from "./authReducer";
import activitiesReducer from './activitiesReducer'



const rootReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    authReducer, 
    activitiesReducer,

    
})

export default rootReducer;