import {useParams, Link} from "react-router-dom"
import {Card} from "react-bootstrap"
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import {useEffect} from "react"
import Itinerary from "./Itinerary"

function City(props) {
  const params = useParams()

  useEffect(() => {
    !props.cities[0] && props.getCities()
    props.cities[0] && props.findCity(props.cities, params.id)
    props.getItinerariesByCityId(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cities])
  console.log(props)

  return (
    <>
      <div className="city">
        <Card className="Tarjeta">
          <Card.Img className="car" src={props.city.src} alt="Card image" />
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
      {props.itineraries.length > 0 ?(
      props.itineraries.map ((itineraries) => 
        <Itinerary itineraries={props.itineraries} />
      )): (
        <h1>Not result found</h1>
      )}
    </>
  )
}

const mapDispatchToProps = {
  findCity: citiesActions.findCity,
  getCities: citiesActions.getCities,
  getItinerariesByCityId: citiesActions.getItinerariesByCityId,
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.citiesReducer.itineraries,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
