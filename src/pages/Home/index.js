import React, { Fragment } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Login } from "./Login";

export const Home = () => {
  return (
    <Fragment>
      <Header withHero />
      <Login />
      <Footer />
    </Fragment>
  );
};
