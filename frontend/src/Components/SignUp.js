import {useRef} from 'react';
import{connect} from 'react-redux';
import {authActions} from '../redux/actions/authActions';


function SignUp(props){
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const lastName = useRef();
    const photo = useRef();
    const country = useRef();

    function handleSignUp(e){
        e.preventDefault();
        props.signupUser(
            email.current.value,
           password.current.value,
            name.current.value,
             lastName.current.value,
          photo.current.value,
           country.current.value
        )
        email.current.value = '';
        password.current.value = '';
        name.current.value = '';
        lastName.current.value = '';
        photo.current.value = '';
        country.current.value = '';

    
    }
    return(
        <div className="sign">
            <div className="sign-up">
                <img 
                src="https://www.freepnglogos.com/uploads/logo-png/logo-png-transparent-background-5.png" 
                alt=""
                className="sign-up-logo"
                 />
                 <div className="sign-up-form"></div>
                 <div className="backMyTinerary">
                     <div className="backFromSignUp">
                         <h1 className="sign-up-title">Sign Up</h1>
                            <p className="sign-up-subtitle">
                                Sign up mytinerary</p>
                            <form onSubmit={handleSignUp}>
                                <div className="sign-up-input">
                                    <div className="sign-up-input-email">
                                        <label htmlFor="email">Email</label>
                                        <input
                                        type="email"
                                        ref={email}
                                        placeholder="Email"
                                        required
                                        />
                                    </div>
                                    <div className="sign-up-input-password">
                                        <label htmlFor="password">Password</label>
                                        <input
                                        type="password"
                                        ref={password}
                                        placeholder="Password"
                                        required
                                        />
                                    </div>
                                    <div className="sign-up-input-name">
                                        <label htmlFor="name">Name</label>
                                        <input
                                        type="text"
                                        ref={name}
                                        placeholder="Name"
                                        required
                                        />
                                    </div>
                                    <div className="sign-up-input-lastName">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                        type="text"
                                        ref={lastName}
                                        placeholder="Last Name"
                                        required
                                        />
                                    </div>
                                    <div className="sign-up-input-photo">
                                        <label htmlFor="photo">Photo</label>
                                        <input
                                        type="text"
                                        ref={photo}
                                        placeholder="Photo"
                                        required
                                        />
                                    </div>
                                    <div className="sign-up-input-country">
                                        <label htmlFor="country">Country</label>

                                        <select
                                        type="text"
                                        ref={country}
                                        placeholder="Country"
                                        required
                                        >
                                            <option value="ar">Argentina</option>
                                        </select>   
                                    </div>
                                </div>
                                
                              <input type="submit" value="Sign Up" className="sign-up-submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


)
}

const mapDispatchToProps ={
    signupUser: authActions.signupUser,
}

const mapStateToProps = (state) =>{
    return{
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);