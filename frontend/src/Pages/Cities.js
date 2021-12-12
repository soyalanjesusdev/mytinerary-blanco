import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Video from "../components/Video";
import TarjetaCiudad from "../components/TarjetaCiudad";

export default class Cities extends React.Component {
  render() {
    return (
      <div className="citiesC">
        <Navbar />
        <Header />
        <Video />
        <TarjetaCiudad />
        <Footer />
      </div>
    );
  }
}
