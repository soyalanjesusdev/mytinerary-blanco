import React from "react";
import Header from "../Components/Header.js";
import Video from "../Components/Video.js";

import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar.js";
import Main from "../Components/Main"

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
