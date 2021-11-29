import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Video from "../Components/Video";
import TarjetaCiudad from "../Components/TarjetaCiudad";



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
