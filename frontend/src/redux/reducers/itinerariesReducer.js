const initialState = {
    itineraries: []
}

const itinerariesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'FIND_ITINERARIES':
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer