import React from "react";
import Header from "../components/Header.js";
import Video from "../components/Video.js";
import Carrusel from "../components/MultipleRows.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Main from "../components/Main"

export default class Home extends React.Component {
  render() {
    return (
      <div className="contenedor">
        <Header />
        <Navbar />
        <Video />
        <Main />
        <Footer />
      </div>
    );
  }
}
