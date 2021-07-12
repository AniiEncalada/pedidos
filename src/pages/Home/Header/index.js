import React from "react";
import { Hero } from "./Hero";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header id="home" className="hero-area">
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <Nav />
      <Hero />
    </header>
  );
};
