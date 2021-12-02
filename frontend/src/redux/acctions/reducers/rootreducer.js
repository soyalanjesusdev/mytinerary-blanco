import { combineReducers } from "redux";
import cityReducer from "./cityReducer";


const rootReducer = combineReducers({
    itinerary : cityReducer
})

export default rootReducer;