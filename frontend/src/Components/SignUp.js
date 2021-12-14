import {Link} from 'react-router-dom';
import authAction from '../redux/actions/authActions'
import {useRef, useEffect} from 'react'
import { connect} from 'react-redux'
import countries from './Countrys'
import React from 'react';
import GoogleLogin from 'react-google-login'
import {useNavigate} from "react-router-dom"

function SignupComponent(props){
  let navigate = useNavigate()
  const responseGoogle = (response) => {
    let googleUser = {
      name: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      photo: response.profileObj.imageUrl,
      country: "Argentina" ,     
      google:true,
    }
    props.signupUser(googleUser)
   
  }

  
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const lastName = useRef()
  const photo = useRef()
  const country = useRef()

  function handleSignUp(e) {
    e.preventDefault()

    props.signupUser({
      name: name.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,      
      photo: photo.current.value,
      country: country.current.value,
    }
    )
    
    name.current.value = ""
    lastName.current.value = ""
    email.current.value = ""
    password.current.value = ""
    photo.current.value = ""
    country.current.value = ""
  
  }
  useEffect(()=> {
    props.token && navigate("/", {replace: true})

  }, [])
  
    return(
        <>
        <div className="contenedorsign">
        <div className="formulario">
        <form className="form" onSubmit={handleSignUp}>  
        <legend>Sign Up
        <h5>It's quick and easy</h5>  </legend>       
            <label htmlFor="name" >First Name</label>
            <input type="text" placeholder="Name"ref={name} required minLength="3" maxLength="20" id="name" />
            <label htmlFor="lastname" >Last Name</label>
            <input type="text" placeholder="Last name"ref={lastName} required minLength="3" maxLength="20" id="lastname" />
            <label htmlFor="email"  >Email </label>
            <input type="email" placeholder="E-mail"ref={email} required minLength="3" id="email" />
            <label htmlFor="pass" >Password</label>
            <input type="password" placeholder="Password"ref={password}  required id="pass" />
            <label htmlFor="img" >Picture (url) </label>
            <input type="url" placeholder="Picture (url)"ref={photo} required id="img" />
            <label htmlFor="country">Choose a country:</label>
            <select ref={country} placeholder="Country" id="country">
              {countries.sort().map((country  => {
                
                return (
                  <option key={country} htmlFor="country">{country}</option>
                )
              }))}
            </select>
            <input className="botones p-1 fs-small btn-form" type="submit" value="Sign Up" />
            <div className="googlelogin">
              <GoogleLogin
              clientId="976419191370-0f3qd6gishicdla3a3sn99f76pht65v2.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />

              </div>
            
            
        <div className="already">
              <p>Already have an account? </p>
              <Link to='/signin'><span> Sign in here!</span></Link>            
            </div>
            
        </form>
        </div>
        </div>
       
      </>
      
    )
}

const mapStateToProps= (state)=>{
  return  {
    newUser: state.authReducer.newUser,
    token: state.authReducer.token
  }
}

const mapDispatchToProps= {
    signupUser: authAction.signupUser,
    signInToken: authAction.signInToken
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent)