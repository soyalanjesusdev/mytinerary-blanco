import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useParams} from "react-router-dom"
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function TarjetaCiudad() {
  const [ciudades, setCiudades] = useState([]);
  const params = useParams();
  console.log(params)
  useEffect(() => {
    fetch("http://localhost:4000/api/ciudades")
      .then((res) => res.json())
      .then((data) => setCiudades(data.response.ciudades))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>

    <div className="cards-contenedor">
      {ciudades.map((ciudad) => {
        return (
          <Link to={`/ciudades/${ciudad.id}`}> 
            <Card className="Tarjeta">
              <Card.Img src={ciudad.src} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{`${ciudad.name}`}</Card.Title>
                {/* <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text> */}
                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
                  </Link>
        );
      })}
      </div>
    </div>
  );
}

export default TarjetaCiudad;
