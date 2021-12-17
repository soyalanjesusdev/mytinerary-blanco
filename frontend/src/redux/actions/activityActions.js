import axios from "axios";

const activitiesAction = {
  getActivities: (itinerary_id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "http://localhost:4000/api/activity/" + itinerary_id
      )
      dispatch({
        type: "GET_ACTIVITIES",
        payload: response.data.response,
      })
    }
  },
  getActivitiesByItinerary: (itineraryId) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(`http://localhost:4000/api/activities/${itineraryId}`)
            let data = response.data.response
            return data
        } catch (error){
            return {
                success: false, response: error
            }
        }
    }
}
}

export default activitiesAction