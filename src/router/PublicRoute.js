import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({ loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        loggedIn ? <Redirect to="/perfil" /> : <Component {...props} />
      }
    />
  );
};
