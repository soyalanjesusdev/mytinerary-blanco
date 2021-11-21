import React from 'react';
import Navbar from './Navbar';


export default function footer() {
  return (
    
<fotter className="fotter">
  <div className="content">
    
    <div className="Welcome">
    <h1 className="Welcome">About Us</h1>
    
    <p>Discover new fascinating destinations, full of emotion, adventure and luxury. You will never be the same after choosing one of our destinations with myTinerary. </p>
</div>
    <ul class="socials">
      <li><a href="#"><i class="fa  fa-facebook"></i></a></li>
      <li><a href="#"><i class="fa  fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa  fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa  fa-youtube"></i></a></li>
      <li><a href="#"><i class="fa  fa-linkedin-square"></i></a></li>
      <li><a href="#"><i class="fa  fa-bitcoin"></i></a></li>
      </ul>
  </div>
  <div className="footer-botton">
    <p>Copyright © 2020 myTinerary. All rights reserved. <span>designed by AJData</span></p>
    <div>
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  </ul>
  </div>
</div>
</fotter>


    
    
  );
}