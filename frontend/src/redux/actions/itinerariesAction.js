import axios from "axios";
import { toast } from "react-toastify";

const itinerariesAction = {
  getItinerariesByCityId: (city_id, loading) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      );
      dispatch({
        type: "GET_ITINERARY_BY_CITY_ID",
        payload: { response: response.data.response, loading },
      });
    };
  },
  likes: (userId, itineraryId, city_id) => {
    return async (dispatch, getState) => {
      try {
        if (userId && itineraryId) {
          let response = await axios.put("http://localhost:4000/api/like", {
            userId,
            itineraryId,
          });
          let res = await axios.get(
            "http://localhost:4000/api/itineraries/" + city_id
          );
          dispatch({ type: "LIKE", payload: res.data.response });
        } else {
          toast.warning("You must be logged in to like this itinerary", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  setLoad: () => {
    return (dispatch) => {
      dispatch({ type: "SET_LOAD", payload: true });
    };
  },
  getComments: (itineraryId) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "http://localhost:4000/api/comments/" + itineraryId
      );
      dispatch({ type: "GET_COMMENTS", payload: response.data.response });
    };
  },
  getAllComments: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/comments");
      dispatch({ type: "GET_ALL_COMMENTS", payload: response.data.response });
    };
  },
  postComments: (itinerary, user, message) => {
    return async (dispatch, getState) => {
      if(itinerary && user){
      let response = await axios.post("http://localhost:4000/api/comments", {
        itinerary,
        user,
        message,
      });
      let res = await axios.get("http://localhost:4000/api/comments");
      dispatch({ type: "POST_COMMENTS", payload: res.data.response });
    }else{
      toast.warning("You must be logged in to comment", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    }
    
  },
  editComments: (comment, message) => {
    return async (dispatch, getState) => {
      const token = localStorage.getItem("token");
      let response = await axios.put(
        "http://localhost:4000/api/comments",
        { comment, message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let res = await axios.get("http://localhost:4000/api/comments");
      dispatch({ type: "EDIT_COMMENTS", payload: res.data.response });
    };
  },
  deleteComment: (commentId) => {
    return async(dispatch, getState)=>{
        const token = localStorage.getItem("token")
        await axios.delete("http://localhost:4000/api/comments/" + commentId , {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        let res = await axios.get("http://localhost:4000/api/comments")
        dispatch({type: "DELETE_COMMENTS", payload: res.data.response })
    }
},
  
};

export default itinerariesAction;
