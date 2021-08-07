import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "router/PrivateRoute";
import { history } from "utils/history";
import { Home } from "../pages/Home";
import { Product } from "pages/Product";
import { Profile } from "../pages/Profile";
import { Restaurant } from "pages/Restaurant";
import { currentUser } from "store/actions/auth.action";
import { Spinner } from "components/ContentLoader";
import { Order } from "pages/Order";

export const AppRouter = () => {
  const { loggingIn, loggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (loggingIn)
    return (
      <div className="center-content">
        <Spinner />
      </div>
    );

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
        <PrivateRoute
          exact
          path="/ordenes"
          component={Order}
          loggedIn={loggedIn}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
