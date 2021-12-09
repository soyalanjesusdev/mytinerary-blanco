const initialState = {
    state:[],
    user: {userName: ""},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: action.payload
            }
        
        default:
            return state
    }
}

export default authReducer