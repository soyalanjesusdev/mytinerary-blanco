import axios from 'axios';
import {toast} from 'react-toastify';


const itinerariesAction = {
       getItinerariesByCityId: (city_id, loading) => {
        return async (dispatch, getState) => {
          let response = await axios.get("http://localhost:4000/api/itineraries/" + city_id)
          dispatch({type: "GET_ITINERARY_BY_CITY_ID", payload: {response: response.data.response, loading}})
       }
     },   
      likes: (userId, itineraryId, city_id) => {
        return async (dispatch, getState) => {  
          try{
          if(userId && itineraryId){
            let response = await axios.put("http://localhost:4000/api/like", {userId, itineraryId}) 
            let res = await axios.get("http://localhost:4000/api/itineraries/" + city_id)             
            dispatch({type: "LIKE", payload: res.data.response})
          }else{
                 toast.warning("You must be logged in to like this itinerary", {
                   position: toast.POSITION.TOP_CENTER
                 })
          }
          }catch(error){
               console.error(error)
           }
       }
    },
    setLoad: () => {
      return (dispatch) => {
        dispatch({ type: "SET_LOAD", payload: true });
      };
    }
}
     




export default itinerariesAction