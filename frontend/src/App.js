import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SlideNav from "./components/SlideNav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


import Home from "./pages/Home";
import Cities from "./pages/Cities.js";

export default function App() {
  return (
    <>
      <SlideNav />
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="./pages/Cities.js" component={Cities} />
              <Route path="/" />
              <Route path="/" />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export { App };
