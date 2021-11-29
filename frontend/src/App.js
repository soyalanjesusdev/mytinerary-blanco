import React from "react";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from "./Pages/City.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/ciudad/:id" element={<City />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
