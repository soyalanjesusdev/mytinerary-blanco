import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useParams} from "react-router-dom"
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function TarjetaCiudad() {
  const [ciudades, setCiudades] = useState([]);
  const params = useParams();
  const [search, setSearch] = useState([])
  console.log(params)
  useEffect(() => {

    fetch("http://localhost:4000/api/ciudades")

      .then((res) => res.json())
      .then((data) => setCiudades(data.response))
      .catch((err) => console.log(err.message));
  }, []);
  const filter = ciudades.filter((city) =>
    city.name.toLowerCase().startsWith(search)
  )
  return (
    <div>
  <input
        value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="search" placeholder="Find City" name="s"
      />
    <div className="cards-contenedor">
      {filter.map((ciudad) => {
        return (
          <Link to={`/ciudades/${ciudad.id}`}> 
            <Card className="Tarjeta">
              <Card.Img src={ciudad.src} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{`${ciudad.name}`}</Card.Title>
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
