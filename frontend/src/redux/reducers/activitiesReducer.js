const initialState = {
    state: [],
    activities: []
   
  };
  
  const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ACTIVITIES":
        return {
          ...state,
          activities: action.payload
        }

  
      default:
        return state;
    }
  };
  
  export default activitiesReducer;