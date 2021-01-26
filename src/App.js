import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavbarApp from "./components/NavbarApp";
import FeedPage from "./components/FeedPage";

class App extends React.Component {
  state = {
    user: {},
  };

  render() {
    return (
      <BrowserRouter>
        <NavbarApp />
        <Route path="/" exact component={FeedPage} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
