import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function TarjetaCiudad() {
  const [ciudades, setCiudades] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/ciudades")
      .then((res) => res.json())
      .then((data) => setCiudades(data.response.ciudades))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="cards-contenedor">
      {ciudades.map((img, index) => {
        return (
          <div key={index}>
            <Card className="Tarjeta">
              <Card.Img src={img.src} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{`${img.name}`}</Card.Title>
                {/* <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text> */}
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default TarjetaCiudad;
