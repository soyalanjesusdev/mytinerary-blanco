import React from "react";
import Header from "../components/Header.js";
import Video from "../components/Video.js";
import Carrusel from "../components/MultipleRows.js";
import Footer from "../components/Footer.js";

export default class Home extends React.Component {
  render() {
    return (
      <div className="contenedor">
        <Header />
        <Video />
        <Carrusel />
        <Footer />
      </div>
    );
  }
}
