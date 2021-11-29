import Footer from "../components/Footer";
import { useParams, Link  } from "react-router-dom";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function City() {
  const [ciudad, setCiudad] = useState([]);
  const params = useParams();
  
  console.log(params);
  useEffect(() => {
    fetch("http://localhost:4000/api/ciudad/" + params.id)
      .then((res) => res.json())
      .then((data) => setCiudad(data.response))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="city">
      <h1>City</h1>
     
      <Card className="Tarjeta">
        <Card.Img src={ciudad.src} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{`${ciudad.name}`}</Card.Title>
          {
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          }
          {<Card.Text>{<h2>Under Construccions</h2>}</Card.Text>}
          <Link to="/"></Link>
        </Card.ImgOverlay>
      </Card>

      <Footer />
    </div>
  );
}
