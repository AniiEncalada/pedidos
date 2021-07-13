import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/perfil" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
