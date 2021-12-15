import {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import { connect } from "react-redux"; 
import authAction from '../redux/actions/authActions' //importamos la accion de autenticacion 
import GoogleLogin from 'react-google-login' //importamos el componente de google login
import {useNavigate} from "react-router-dom" //importamos useNavigate 

function SignInComponent(props){ // creamos el componente SignIn
  let navigate = useNavigate() //creamos una variable para usar useNavigate
  const responseGoogle = (response) => { //creamos una funcion para el componente google login
    props.signIn( // es el nombre de la accion que creamos en el
      response.profileObj.email,  
      response.profileObj.googleId,
      true
    )
  }
  localStorage.getItem("token") && !props.token && props.signInToken() //si hay un token en el localstorage y no hay token en el state, llamamos a la funcion de autenticacion
  
  const email = useRef() //creamos una variable para usar useRef
  const password = useRef() 
  
  function handleSignIn(e) { //creamos una funcion para el boton de login
    e.preventDefault() //prevenimos el comportamiento por defecto del boton
   
    props.signIn(email.current.value, password.current.value) //llamamos a la funcion de autenticacion 

    email.current.value = "" //limpiamos los campos
    password.current.value = ""   //limpiamos los campos
      
  }
  useEffect(()=> { //useEffect para verificar si hay un token en el localstorage
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
    user: state.authReducer.user ,  //creamos una propiedad user con el state de authReducer

    token: state.authReducer.token //creamos una propiedad token con el state de authReducer 
  }
}

const mapDispatchToProps= { // creamos una funcion para el dispatch que vamos a usar
    signIn: authAction.signIn, //llamamos a la funcion de autenticacion del accion
    signInToken: authAction.signInToken //chequea si hay token o no y lo traduce
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent)