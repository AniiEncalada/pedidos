import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
