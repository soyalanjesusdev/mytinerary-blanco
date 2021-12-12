import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
/* import SignUp from "../components/SignUp" */


export default class Sign extends React.Component {
  render() {
    return (
      <div className="citiesC">
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}
