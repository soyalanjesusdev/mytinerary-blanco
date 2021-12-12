import axios from 'axios';


const authActions = {
    postUser: (email, password,  name, lastName, photo, country) => {
        return async (dispatch, getState) => {
            try {
                const user = await axios.post("http://localhost:4000/api/users/login")
                dispatch({type:"USER" , payload:{user}})
            } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    module.exports = authActions;
    
