import axios from "axios";

const itinerariesActions = { // create actions
  getItineraries: (city_id) => {
    return async (dispatch, getState) => {
      const response = await axios.get("http://localhost:4000/api/itineraries" + city_id)
      dispatch({
        type: "GET_ALL_ITINERARIES",
        payload: response.data.response,
      })
    }
  },
  likeDislike: (itineraryId, token) => {
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/itinerary/like/${itineraryId}`, {},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            return response
            
        }catch (error) {
            console.log(error)
        }
    }
},
addComment: (itineraryId, comment, token) => {
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {comment, type: "addComment"},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            if (response.data.success) {
                return {
                    success: true, response: response.data.response
                }
            } else {
                throw new Error()
            }     
        } catch (error) {
            return {
                success: false, response: error
            }
        }
    }
},

deleteComment: (itineraryId, commentId, token) => {
    return async (dispatch) => {
        try {
            let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {commentId, type: "deleteComment"},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            if (response.data.success) {
                return {
                    success: true
                }
            } else {
                throw new Error()
            }
        } catch (error) {
            return {
                success: false, response: error
            }
        }
    }
}, 

editComment: (commentId, comment, token) => {
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/comments/${commentId}`, { comment, type: "editComment"},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            if (response.data.success) {
                return {
                    success: true, response: response.data.response
                }
            } else {
                throw new Error()
            }
        } catch (error) {
            return {
                success: false,response: error
            }
        }
    }    
}, 

}


export default itinerariesActions