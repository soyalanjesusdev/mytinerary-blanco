import axios from 'axios';


const authActions = {
        signupUser: (newUser) => {
            return async (dispatch, getState) => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await axios.post(" http://localhost:4000/api/auth/signup", {
                    ...newUser
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    dispatch({
                        type: "USER",
                        payload: {
                            response
                        }
                    })
                    console.log(response);
                    if (response.data.success && !response.data.error) {
                        localStorage.setItem("token", response.data.response.token);
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
    signInUser: (email, password, google) => {

        return async (dispatch, getState) => {
                try {
                    const response = await axios.post("http://localhost:4000/api/auth/signin", {
                        email,
                        password,
                        google
                    })
                    if (response.data.success) {
                        console.log(response)
                        localStorage.setItem("token", response.data.response[0].token);
                        dispatch({
                            type: "SIGNIN_USER",
                            payload: response.data.response[0],
                        })
                    } else {
                        alert(response.data.error)
                        console.log(response)
                    }

                } catch (error) {
                    console.error(error)
                }
            }
    },
    signInToken:()=>{
        return async(dispatch, getState)=>{
            try{
                const token = localStorage.getItem("token")
                const user = await axios.get("http://localhost:4000/api/auth/",{
                headers:{
                    Authorization: `Bearer ${token}`}
            })
            dispatch({type:"TOKEN", payload: user.data})
        
        }catch (error){
        console.log(error)
        }
        }
    },
    signOut: () => {
        localStorage.removeItem("token")
        return (dispatch, getState)=>{
            dispatch({type: "SIGN_OUT",payload: null})
        }
    }
}
export default authActions;