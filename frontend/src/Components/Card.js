import {useEffect, useState} from "react"
import {connect} from "react-redux"
import citiesAction from "../redux/actions/citiesActions"
import itinerariesAction from '../redux/actions/itinerariesAction'
// import authAction from '../redux/actions/authAction'
import {useParams} from "react-router-dom"
import Itinerary from "./Itinerary"
import {Link} from "react-router-dom"
import { Spinner } from "react-bootstrap";
import useConstructor from "./loading"


function CardsItineraries(props) {
  const params = useParams()

  useConstructor(() => {
    props.setLoad();
  });

  const [likes, setlikes] = useState("")

  useEffect(() => {
    !props.cities[0] && props.getCities() 
    props.cities[0] && props.findCity(props.cities, params.id) 
    props.getItinerariesByCityId(params.id, false)
    }, [props.cities]) 
  

  const back = {
    backgroundImage: "url(" + props.city.src + ")",
    width: "100%",
    height: "70vh",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "zIndex": "-1",
  }

  return (
    <>
    <div className="fondo-itinerario">
      <div className="back" style={back}></div>
      <h1 className="title-carditinerary d-flex justify-content-center">{props.city.name},{props.city.country}</h1>
      <p className="description container">{props.city.about}</p>
      {
        props.isLoading ? (
          <div className="spinner">
            <Spinner  animation="border" variant="warning" /></div>)
           : (
      props.cities[0] ? (
        props.itineraries.length > 0 
        ? (props.itineraries.map((itinerary, index) => (<Itinerary key={index} itinerary={itinerary} user={props.user} activities={props.activities} city={params.id} />))) : (
          <h1 className="there">There are not itineraries for this city yet...</h1>
          )): "")
          }
         <div className="buttonpa">
            <button >
              <span>Home </span>
              <Link to="/" type="button" className="liquid"></Link>
            </button>
              <button>
                <span>Cities</span>
            <Link to="/Cities" type="button" className="liquid">
            </Link>
              </button>
          </div>
    </div>
    </>
  )
}

const mapDispatchToProps = { 
  getCities: citiesAction.getCities,
  findCity: citiesAction.findCity,
  getItinerariesByCityId: itinerariesAction.getItinerariesByCityId,
  setLoad: itinerariesAction.setLoad
  
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducer.itineraries,
    user: state.authReducer.user,
    activities: state.activitiesReducer.activities,
    isLoading: state.itinerariesReducer.isLoading
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardsItineraries)