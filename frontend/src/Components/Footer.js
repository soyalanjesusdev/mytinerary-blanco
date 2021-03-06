/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="box">
          <figure>
            <a href="#">
              {/*  <img src="./asset/avion.png" alt="logo"></img> */}
            </a>
          </figure>
        </div>
        <div className="box">
          <div className="redes">
            <a href="#" className="fab fa-bitcoin"></a>
            <a href="#" className="fa fa-github"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-facebook-square"></a>
          </div>
        </div>
        <div className="box">
          <div className="redes">
            <Link to="/">Home</Link>
            <Link to="/Cities">Cities</Link>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <small>
          &copy; 2021 <b>MAKE BY @AJData</b> - All rights reserved
        </small>
      </div>
    </footer>
  );
}
