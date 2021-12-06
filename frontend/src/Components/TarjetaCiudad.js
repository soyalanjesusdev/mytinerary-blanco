import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import citiesActions from "../redux/actions/citiesActions"
import {connect} from 'react-redux'

function TarjetaCiudad(props) {
  !props.cities[0] && props.getCities() 
  
  return (
    <div>

    <div className="Cofre">
      <h2 className="sc"><button> Search Cities  </button></h2>
      <input
        onChange={(e) => {
          props.filterCities(props.cities, e.target.value.toLocaleLowerCase().trim());
        }}
        type="text"
        id="search"
        placeholder="Find City"
        className="s"
        />
      <div className="cards-contenedor">

        {
        props.auxiliar.length > 0 ? (
          props.auxiliar.map((city, index) => {
            return (
              <Link to={`/city/${city._id}`}>
                <Card className="Tarjeta1">
                  <Card.Img
                    className="car2"
                    src={city.src}
                    alt="Card image"
                    />
                  <Card.ImgOverlay>
                    <Card.Title className="nombret">{`${city.name}`}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            );
          })
          ) : (
            <h2 type="button" className="no">
            No results were obtained for your search
          </h2>
        )}
      </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  filterCities: citiesActions.filterCities,
  getCities: citiesActions.getCities,
}  

const mapStateToProps =  (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TarjetaCiudad)
