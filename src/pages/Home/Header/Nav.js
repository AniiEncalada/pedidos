import React from "react";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          <img src="img/logo.png" alt="" />
        </a>
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
              <a className="nav-link page-scroll" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#services">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#showcase">
                Showcase
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-singin" href="#">
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
