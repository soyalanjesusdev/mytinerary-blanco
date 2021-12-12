import axios from 'axios';


const authActions = {
        signupUser: (email, password, name, lastName, photo, country) => {
            return async (dispatch, getState) => {
                try {
                    const response = await axios.post("http://localhost:4000/api/users/login", {
                        email,
                        password,
                        name,
                        lastName,
                        photo,
                        country
                    });
                    dispatch({
                        type: "USER",
                        payload: {
                            response
                        }
                    })
                    if (response.data.success && !response.data.error) {
                        dispatch({
                            type: "NEW_USER",
                            payload: response.data.response
                        });
                    } else {
                        console.error(response.data.response)
                        return {
                            error: [{
                                message: response.data.error
                            }]
                        }
                    }

                } catch (error) {
                    console.error(error)
                }
            }
        
    },
    signInUser: (email, password) => {

        return async (dispatch, getState) => {
                try {
                    const response = await axios.post("http://localhost:4000/api/auth/signin", {
                        email,
                        password,
                    })
                    if (response.data.success) {
                        dispatch({
                            type: "SIGNIN_USER",
                            payload: response.data.response[0],
                        })
                    } else {
                        alert(response.data.error)
                    }

                } catch (error) {
                    console.error(error)
                }
            }
    },
}
    
    
    


            module.exports = authActions;