import {useRef} from 'react';
import {connect} from 'react-redux';
import authActions from "../redux/actions/authActions";
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import '../form.css'


function SingIn(props){
    let navigate = useNavigate();
    props.token && navigate("/", {replace: true});
    let responseGoogle = (response) => {
            props.signInUser(
              response.profileObj.email,
              response.profileObj.googleId,
              true
            )
          
    }
    let email = useRef()
    let password = useRef()
   

    function handleSignIn(e){
        e.preventDefault();
        props.signInUser(
        email.current.value,
        password.current.value,
        
        )
        email.current.value = '';
        password.current.value = '';
      

    
    }
   
    return(
        <div className="sign">
            <div className="sign-up">
                <img 
                src="../components/assets/wallpaperbetter.jpg"
                alt=""
                className="sign-up-logo"
                />
                <div className="sign-up-form"></div>
                <div className="backMyTinerary">
                    <div className="backFromSignUp">
                        <h1 className="sign-up-title">Sign In</h1>
                            <p className="sign-up-subtitle">
                                Sign In mytinerary</p>
                            <form onSubmit={handleSignIn}>
                                <div className="sign-up-input">
                                    <div className="sign-up-input-email">
                                        <label htmlFor="email">Email</label>
                                        <input
                                        type="email"
                                        ref={email}
                                        placeholder="Email"

                                        />
                                    </div>
                                    <div className="sign-up-input-password">
                                        <label htmlFor="password">Password</label>
                                        <input
                                        type="password"
                                        ref={password}
                                        placeholder="Password"

                                        />
                                    </div>
                                </div>
                                
                            <input type="submit" value="Sign Up" className="sign-up-submit"/>
                            <GoogleLogin
                                    clientId="517539814891-189a382721hq8enthucm52u5adc6fnga.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </form>
                        
                        </div>
                    </div>
                </div>
            </div>


)
}

const mapDispatchToProps ={
    signInUser: authActions.signInUser
}

const mapStateToProps = (state) =>{
    return{
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingIn);