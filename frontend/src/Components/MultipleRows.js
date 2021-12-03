import { Card } from "react-bootstrap";
import Slider from "react-slick";
import React, { useEffect} from "react";
import {connect} from 'react-redux';
import citiesActions from "../redux/actions/citiesActions";


function MultipleRows(props) {
  console.log(props)
  useEffect(() => {
    props.getCities();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "3px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carrusel">
      <h3 className="Tituloc"> Popular MYtineraries</h3>
      <Slider {...settings}>
        {props.cities.length > 0 && props.cities.map((img, index) => {
          
          if(index < 12){
          return (
            <div key={index}>
              <Card className="m-2">
                <Card.Img variant="top" src={img.src} />
                <Card.Body>
                  <Card.Title>{`${img.name}`}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
}})}
      </Slider>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
  };
}

const mapDispatchToProps = {

    getCities: citiesActions.getCities
  
}

export default connect(mapStateToProps,mapDispatchToProps)(MultipleRows)