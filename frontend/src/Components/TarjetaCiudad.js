import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function TarjetaCiudad() {
  const [ciudades, setCiudades] = useState([]);
  const [search, setSearch] = useState([]);
  const [min, setMin] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch("http://localhost:4000/api/ciudades")
      .then((res) => res.json())
      .then((data) => setCiudades(data.response))
      .catch((err) => console.log(err.message));
  }, []);
  const filter = ciudades.filter((city) =>
    city.name.toLowerCase().startsWith(min)
  );
  return (
    <div className="Cofre">
      <h2 className="sc"><button> Search Cities  </button></h2>
      <input
        onInput={(e) => {
          setMin(e.target.value.toLowerCase().trimStart().trimEnd());
          setSearch(e.target.value);
        }}
        value={search}
        type="text"
        id="search"
        placeholder="Find City"
        className="s"
      />
      <div className="cards-contenedor">
        {filter.length > 0 ? (
          filter.map((ciudad) => {
            return (
              <Link to={`/ciudad/${ciudad._id}`}>
                <Card className="Tarjeta1">
                  <Card.Img
                    className="car2"
                    src={ciudad.src}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title className="nombret">{`${ciudad.name}`}</Card.Title>
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
  );
}

export default TarjetaCiudad;
