
import { useParams, Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import {useEffect} from "react"
import Itinerary from "./Itinerary"


function City(props) {
  const params = useParams();

  useEffect(() => {
  
    !props.cities[0] && props.getCities() 
    props.cities[0] && props.findCity(props.cities, params.id) 
    props.getItinerariesByCityId("61a97f1293493efd7210e30a")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cities]) 
  console.log(props)
  
  return (
    <div className="city">
    
      <Card className="Tarjeta">
        <Card.Img className="car" src={props.city.src} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            {props.city.name},{props.city.country}, 
            {props.itineraries ? (
        <Itinerary itineraries={props.itineraries} />
      ) : (
        <h1>...</h1>
      )}
          </Card.Title>
          {/* {
            <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
            </Card.Text>
          } */}
        </Card.ImgOverlay>
          {
            <Card.Text>
              {
                <h2 className="under">
                  Site under construction, we are working for you
                  <Badge bg="secondary"></Badge>
                </h2>
              }
            </Card.Text>
          }
        <div className="buttonpa">
        <button><span>Home </span><Link to="/" type="button" className="liquid">
          
        </Link></button>
        <button><span>Back to Cities</span><Link to="/Cities" type="button" className="liquid">
          
        </Link></button>
        
        </div>
      </Card>

   
    </div>
  );
}


const mapDispatchToProps = {
  findCity: citiesActions.findCity,
  getCities: citiesActions.getCities,
  getItinerariesByCityId: citiesActions.getItinerariesByCityId
}  

const mapStateToProps =  (state) => {
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itinerary: state.citiesReducer.itinerary
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City);