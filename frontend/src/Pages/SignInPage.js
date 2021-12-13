import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignIn from "../components/SignIn";


export default class SignInPage extends React.Component {
  render() {
    return (
      <div className="SignIn">
        <Navbar />
        <Header />
        <SignIn />
        <Footer />
      </div>
    );
  }
}
