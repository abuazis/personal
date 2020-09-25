import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/styles.scss";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/personal" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
