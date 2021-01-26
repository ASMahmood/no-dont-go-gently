import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavbarApp from "./components/NavbarApp";

class App extends React.Component {
  state = {
    user: {},
  };

  render() {
    return (
      <BrowserRouter>
        <NavbarApp />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
