import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";



const rootReducer = combineReducers({
    citiesReducer : citiesReducer,
})

export default rootReducer;