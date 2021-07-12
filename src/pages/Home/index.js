import React, { Fragment } from "react";
import { Header } from "./Header";
import { Login } from "./Login";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Login />
    </Fragment>
  );
};
