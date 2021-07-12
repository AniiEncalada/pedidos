import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
      <div className="container">
        <Link to="index.html" className="navbar-brand">
          <img src="img/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="lni-menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#services">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#features">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#showcase">
                Showcase
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="#contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-singin" to="#">
                Download
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
