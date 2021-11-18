import React from "react";
import Logo from "./asset/boarding_pass_icon_151970.png";




export default function Navigation() {
  return (
      <>
  <nav class="navbar navbar-expand-lg navbar-dark  fixed-top static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
    <div class="text-center">
    <img width = "150" height = "100"
            className="Logo"
            src={Logo}
            alt="Logo"
          />
    </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cities</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">login</a></li>
            <li><a class="dropdown-item" href="#">Log</a></li>
           
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

