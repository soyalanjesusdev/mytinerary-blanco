const initialState = { // estado inicial objeto
    state: [],
    cities: [],
    auxiliar: [],
    city: [],

  }
  
  const citiesReducer = (state = initialState, action) => { // reducer que recibe el estado y la accion que se va a realizar
    switch (action.type) { // switch que recibe el tipo de accion
      case "GET_ALL_CITIES": // si el tipo de accion es GET_ALL_CITIES
        return { // retorna el estado actual
          ...state, // ...state es para que no se pierda el estado actual
          cities: action.payload, // cities es igual a la accion payload que es el array de ciudades que se obtiene del backend
          auxiliar: action.payload, // auxiliar es igual a la accion payload  que es el array de ciudades que se obtiene del backend 
        }
      case "FILTER_CITIES": // si el tipo de accion es FILTER_CITIES  
        const filtered = action.payload.cities.filter((city) =>  // filtered es igual a la accion payload que es el array de ciudades que se obtiene del backend
          city.name.toLowerCase().startsWith(action.payload.value.toLowerCase()) // si la ciudad que se obtiene del backend empieza con el valor que se obtiene del input del usuario 
        )
        return { // retorna el estado actual
          ...state, // ...state es para que no se pierda el estado actual
          auxiliar: filtered, // auxiliar es igual a la accion payload que es el array de ciudades que se obtiene del backend
        }
      case "FIND_CITY":
        const city = action.payload.cities.find( // city es igual a la accion payload que es el array de ciudades que se obtiene del backend
          (city) => city._id === action.payload.id
        )
        return {
          ...state,
          city: city,
        }
      default:
        return state; // retorna el estado actual
      }
      
  
}
  export default citiesReducer
  