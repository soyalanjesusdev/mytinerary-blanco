import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function City() {
  const [city, setCity] = useState([]);
  const params = useParams();

  console.log(params);
  useEffect(() => {
    fetch("http://localhost:4000/api/city/" + params.id)
      .then((res) => res.json())
      .then((data) => setCity(data.response))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="city">
      <Navbar />
      <Header />

      <Card className="Tarjeta">
        <Card.Img className="car" src={city.src} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            {city.name}, {city.country}
          </Card.Title>
          {/* {
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          } */}
        </Card.ImgOverlay>
        <div className="buttonpa">
        <button><span>Home </span><Link to="/" type="button" className="liquid">
          
        </Link></button>
        <button><span>Back to Cities</span><Link to="/Cities" type="button" className="liquid">
          
        </Link></button>
        </div>
        {
          <Card.Text>
            {
              <h2 className="under">
                Site under construction, we are working for you
                <Badge bg="secondary"></Badge>
              </h2>
            }
          </Card.Text>
        }
      </Card>

      <Footer />
    </div>
  );
}
