import { Card } from "react-bootstrap";
import Slider from "react-slick";
import Imagenes from "./ImagenesCarrusel";
import React, { useEffect, useState } from "react";


export default function MultipleRows () {
    const [ciudades, setCiudades] = useState([]);
    useEffect(() =>{
    fetch('http://localhost:4000/api/ciudades')
      .then(res => res.json())
      .then((data) => {setCiudades(data.response.ciudades)
      console.log("Hola")})
      .catch(err => console.log(err.message))
    }, [] 
    )

    

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
        <Slider {...settings} >
          {Imagenes.map((img, index) => {
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
          })}
        </Slider>
      </div>
    );
        

  }