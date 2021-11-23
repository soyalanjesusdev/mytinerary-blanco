import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Video from "../components/Video"
import Find from "../components/Find"


export default class Cities extends React.Component {
    render() {
      return (
        <div className="contenedor">
          <Header />
          <Navbar />
          <Video />
          <h1>Cities</h1>
          <p>City Finder</p>
          <Find />
          <Footer />
        </div>
      );
    }
  }