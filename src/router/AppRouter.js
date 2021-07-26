import React from "react";
import { useSelector } from "react-redux";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "router/PrivateRoute";
import { history } from "utils/history";
import { Home } from "../pages/Home";
import { Product } from "pages/Product";
import { Profile } from "../pages/Profile";
import { Restaurant } from "pages/Restaurant";

export const AppRouter = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/perfil"
          component={Profile}
          loggedIn={loggedIn}
        />
        <PrivateRoute
          exact
          path="/productos"
          component={Product}
          loggedIn={loggedIn}
        />
        <PrivateRoute
          exact
          path="/restaurantes"
          component={Restaurant}
          loggedIn={loggedIn}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
