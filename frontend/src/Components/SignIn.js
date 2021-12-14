import {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import authAction from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login'
import {useNavigate} from "react-router-dom"

function SignInComponent(props){
  let navigate = useNavigate()
  const responseGoogle = (response) => {
    props.signIn(
      response.profileObj.email,
      response.profileObj.googleId,
      true
    )
  }
  localStorage.getItem("token") && !props.token && props.signInToken()
  
  const email = useRef()
  const password = useRef()
  
  function handleSignIn(e) {
    e.preventDefault()
   
    props.signIn(email.current.value, password.current.value)

    email.current.value = ""
    password.current.value = ""
      
  }
  useEffect(()=> {
    props.token && navigate("/", {replace: true})

  }, [])
    return(
        <>
        <div className="contenedorsign">
          
        <div className="formulario">        
        <form className="form" onSubmit={handleSignIn}>  
        <legend>Sign In</legend>         
            <label htmlFor="email" >Email </label>
            <input type="email" placeholder="E-mail" ref={email}id="email" />
            <label htmlFor="pass" >Password</label>
            <input type="password" ref={password} placeholder="Password"className=""  id="pass" />
            <input className="botones p-1 fs-small btn-form txt-center" type="submit" value="Log in"/>
           
            <div className="googlelogin">
              <GoogleLogin
              clientId="517539814891-189a382721hq8enthucm52u5adc6fnga.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />
               <div className="already">
              <p>Don't you have an account yet? </p>
              <Link to='/signup'><span> Create new account</span></Link>            
            </div>

              </div>
        </form>
        </div>
       
        </div>
       
      </>
      
    )
}

const mapStateToProps= (state)=>{  
  return  {
    user: state.authReducer.user ,  
    token: state.authReducer.token 
  }
}

const mapDispatchToProps= {
    signIn: authAction.signIn,
    signInToken: authAction.signInToken //chequea si hay token o no y lo traduce
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent)