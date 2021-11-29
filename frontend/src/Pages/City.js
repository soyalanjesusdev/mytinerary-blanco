import Footer from "../components/Footer";
import { useParams, Link  } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

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
      <Navbar/>
      <Header />
      <h1>City</h1>
     
      <Card className="Tarjeta">
        <Card.Img className="car"  src={ciudad.src} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{`${ciudad.name}`}</Card.Title>
          {/* {
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          } */}
        </Card.ImgOverlay>
      <Link  to="/Cities"  type="button" className="btn dark btn-outline-dark bg dark">Back to Cities</Link>
          {<Card.Text>{<h2>Under Construccions</h2>}</Card.Text>}
          
      </Card>

      <Footer />
    </div>
  );
}
