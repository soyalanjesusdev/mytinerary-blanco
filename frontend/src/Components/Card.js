import {useParams, Link} from "react-router-dom"
import {Card} from "react-bootstrap"
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import {useEffect} from "react"
import Itinerary from "./Itinerary"

function City(props) { //creamos una funcion que recibe como parametro props
  const params = useParams() //creamos una constante params que recibe el valor de useParams

  useEffect(() => { //creamos una funcion que recibe como parametro props
    !props.cities[0] && props.getCities() //si no hay ciudades en el state, llamamos a la accion getCities
    props.cities[0] && props.findCity(props.cities, params.id) //si hay ciudades en el state, llamamos a la accion findCity
    props.getItinerariesByCityId(params.id) //llamamos a la accion getItinerariesByCityId
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cities]) //el useEffect se ejecuta solo una vez, cuando cambia el state
 

  return (
    <>
      <div className="city">
        <Card className="Tarjeta">
          <Card.Img className="car" src={props.city.src}  alt="Card image" /> 
          <Card.ImgOverlay>
            <Card.Title className="colort"> {props.city.name},{props.city.country} </Card.Title>
            
          
          </Card.ImgOverlay>
          {
            <Card.Text>
            
            </Card.Text>
          }
          <div className="buttonpa">
            <button>
              <span>Home </span>
              <Link to="/" type="button" className="liquid"></Link>
            </button>
              <button>
                <span>Back to Cities</span>
            <Link to="/Cities" type="button" className="liquid">
            </Link>
              </button>
          </div>
        </Card>
      
      </div>
      {
      props.itineraries[0] ? ( //si hay itinerarios en el state 
        <Itinerary itineraries={props.itineraries} /> //llamamos a la funcion Itinerary
      ) : ( //si no hay itinerarios en el state
        <h1>Not result found <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt=""/></h1> //mostramos un mensaje
        
      )}
    </>
  )
}

const mapDispatchToProps = { //creamos un objeto con las acciones que vamos a usar
  findCity: citiesActions.findCity, //findCity es el nombre de la accion que creamos en el actions
  getCities: citiesActions.getCities, //getCities es el nombre de la accion que creamos en el actions
  getItinerariesByCityId: citiesActions.getItinerariesByCityId, //getItinerariesByCityId es el nombre de la accion que creamos en el actions
}

const mapStateToProps = (state) => { //creamos un objeto con las acciones que vamos a usar
  return { 
    cities: state.citiesReducer.cities, //cities es el nombre de la accion que creamos en el reducers
    city: state.citiesReducer.city, //city es el nombre de la accion que creamos en el reducers
    itineraries: state.citiesReducer.itineraries, //itineraries es el nombre de la accion que creamos en el reducers
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City) //exportamos la funcion City conectada con el redux
