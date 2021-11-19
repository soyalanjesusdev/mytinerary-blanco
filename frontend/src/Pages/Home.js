import React from "react";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Video from "../components/Video.js";
import Carrusel from "../components/MultipleRows.js";


export default class Home extends React.Component {
  render() {
    return (

    <div className="contenedor">
     <Navbar />
      <Header />
      <Video/>
      
      
     
    <main className="main-home">
    <Carrusel/>

    </main>
    
    <Footer />
    </div>
    );
  }
}

