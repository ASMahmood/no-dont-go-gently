import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavbarApp from "./components/NavbarApp";
import FeedPage from "./components/FeedPage";
import ProfilePage from "./components/ProfilePage";

class App extends React.Component {
  state = {
    user: {},
  };

  render() {
    return (
      <BrowserRouter>
        <NavbarApp />
        <Route path="/" exact component={FeedPage} />
        <Route path="/me" exact component={ProfilePage} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
