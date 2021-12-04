const initialState = {
    state: [],
    cities: [],
    auxiliar: [],
    city:[]
};

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_CITIES":
            return {
                ...state,
                cities: action.payload,
                    auxiliar: action.payload,
            };
        case "FILTER_CITIES":
            const filtercities = action.payload.cities.filter((city) =>
                city.name.toLowerCase().startsWith(action.payload.search.toLowerCase())
            );
            return {
                ...state,
                auxiliar: filtercities,
            };
        case "FIND_CITY":
            const city = action.payload.cities.find(city => city._id === action.payload.id)
            return {
                ...state,
                city: city,
            }
            default:return state;
    }
};

export default citiesReducer;