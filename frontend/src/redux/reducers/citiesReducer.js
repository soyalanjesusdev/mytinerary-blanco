const initialState = {
    state:[],
    cities:[],
    auxiliar:[],
}


const citiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_CITIES':
            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
            }
   default:
        return state
                
    }


}

export default citiesReducer;