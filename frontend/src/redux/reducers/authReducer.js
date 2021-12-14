const initialState = {
    state: [],
    newUser: { name: "" }, //para que lea en navigation esta prop
    token: "",
    user: {}
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "NEW_USER":
        return {
          ...state,
          newUser: action.payload,
        };
        case "USER":
        return {
          ...state,
          user: action.payload,
        };
      case "TOKEN":
        return {
          ...state,
          token: action.payload,
          newUser: action.payload
        };
      case "SIGN_OUT":
         return {
          ...state,
          token: action.payload,
          newUser: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  