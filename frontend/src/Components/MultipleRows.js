import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import Imagenes from "./ImagenesCarrusel";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "2px",
      slidesToShow: 2,
      speed: 1500,
      rows: 2,
      slidesPerRow: 1,
      autoPlay: true,
      autoplaySpeed: 20,
      dots: true,
    };
    
    return (
      <div className="carrusel">
       <h3> Popular myTinerary</h3>
        <Slider {...settings}>
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
}
