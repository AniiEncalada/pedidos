import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Login } from "./Login";

export const Home = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header withHero />
      {!loggedIn && <Login />}
      <Footer />
    </Fragment>
  );
};
