import React from "react";
import Home from "./pages/Home";
import Cities from "./pages/Cities.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import City from "./pages/City.js";
import SignUpPage from "./pages/SignUpPage.js";
import SignInPage from "./pages/SignInPage.js";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/signup" element={<SignUpPage />} />
           <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
