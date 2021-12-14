import { useRef } from "react";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

function SignUp(props) {
    const responseGoogle = (response) => {
        const googleUser = {
            name: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            country: "Argentina",
            photo: response.profileObj.imageUrl,
            google: true,   
        };
        props
            .signupUser(googleUser)
        
     
    };
    const email = useRef(); 
    const password = useRef();
    const name = useRef();
    const lastName = useRef();
    const photo = useRef();
    const country = useRef();

    function handleSignUp(e) {
        e.preventDefault();
        props.signupUser({
            name: name.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            country: country.current.value,
            photo: photo.current.value,
        });
        name.current.value = "";
        lastName.current.value = "";
        email.current.value = "";
        password.current.value = "";
        country.current.value = "";
        photo.current.value = "";
    }
    return (
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
                        <h1 className="sign-up-title">Sign Up</h1>
                        <p className="sign-up-subtitle">Sign up mytinerary</p>
                        <form onSubmit={handleSignUp}>
                            <div className="sign-up-input">
                                <div className="sign-up-input-name">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" ref={name} placeholder="Name" required />
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
                                <div className="sign-up-input-photo">
                                    <label htmlFor="photo">Photo</label>
                                    <input type="text" ref={photo} placeholder="Photo" required />
                                </div>
                            </div>

                            <GoogleLogin
                                clientId="517539814891-189a382721hq8enthucm52u5adc6fnga.apps.googleusercontent.com"
                                buttonText="Sign Up with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />
                            <input type="submit" value="Sign Up" className="sign-up-submit" />
                        </form>
                        <div>
                                <p>Do you already have an account?</p>
                                <Link to="/signIn" className='linkSignIn'>
                                    Sign in
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    signupUser: authActions.signupUser,
};

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
