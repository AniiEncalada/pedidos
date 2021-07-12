import React, { Fragment } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Login } from "./Login";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
};
