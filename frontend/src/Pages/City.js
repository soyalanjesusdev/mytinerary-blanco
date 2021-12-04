import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

function City(props) {
  !props.cities[0] && props.getCities()
  console.log(props)
  const params = useParams();
  console.log(params.id);
  props.cities[0] && props.findCity(props.cities, params.id)
    
  
  return (
    <div className="city">
      <Navbar />
      <Header />

      <Card className="Tarjeta">
        <Card.Img className="car" src={props.city.src} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            {props.city.name},{props.city.country}
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

      <Footer />
    </div>
  );
}


const mapDispatchToProps = {
  findCity: citiesActions.findCity,
  getCities: citiesActions.getCities,
}  

const mapStateToProps =  (state) => {
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(City);