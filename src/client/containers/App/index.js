import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Home, About } from "../../pages";

const AppCtnr = () => (
  <Router>
    <div className="main-container">
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default AppCtnr;
