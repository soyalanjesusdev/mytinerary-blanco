import React from "react";
import Home from "./pages/Home";
import Cities from "./pages/Cities.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from "./pages/City.js";
import Sign from "./pages/Sign.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/auth/signIn" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
