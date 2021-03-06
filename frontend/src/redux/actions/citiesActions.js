import axios from "axios"

const citiesActions = { // create actions
  getCities: () => { // create action
    return async (dispatch, getState) => { // create async action
      const response = await axios.get("http://localhost:4000/api/cities")
      dispatch({
        type: "GET_ALL_CITIES",
        payload: response.data.response,
      })
    }
  },
  filterCities: (cities, value) => {
    return (dispatch, getState) => {
      dispatch({type: "FILTER_CITIES", payload: {cities, value}})
    }
  },
  findCity: (cities, id) => {
    return (dispatch, getState) => {
      dispatch({type: "FIND_CITY", payload: {cities, id}})
    }
  },
  getItinerariesByCityId: (city_id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + city_id
      )
      dispatch({
        type: "GET_ITINERARY_BY_CITY_ID",
        payload: response.data.response,
      })
    }
  },
}

export default citiesActions
