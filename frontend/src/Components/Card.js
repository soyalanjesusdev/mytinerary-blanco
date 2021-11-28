/* import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useParams} from "react-router-dom"


function TarjetaCiudad() {
  const [ciudades, setCiudades] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/api/ciudades")
      .then((res) => res.json())
      .then((data) => setCiudades(data.response.ciudades))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="cards-contenedor">
      {ciudades.map((ciudad, index, img) => {
        return (
          <Link to={`/ciudades/${ciudad.id}`}>
          <div key={index}>
            <Card className="Tarjeta">
              <Card.Img src={img.src} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{`${img.name}`}</Card.Title>
                {<Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>}
                {<Card.Text>Last updated 3 mins ago</Card.Text>}
              </Card.ImgOverlay>
            </Card>
          </div>
                </Link>
        );
      })}
    </div>
  );
}

export default TarjetaCiudad;
 */
