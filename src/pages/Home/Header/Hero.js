import React from "react";

export const Hero = () => {
  return (
    <div className="container">
      <div className="row space-100">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <div className="contents">
            <h2 className="head-title">You are Using Free Lite Version</h2>
            <p>
              Please, Purchase full version of Slick to get all pages, features
              and permission to use in commercial projects
            </p>
            <div className="header-button">
              <a
                href="https://rebrand.ly/slick-ud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-border-filled"
              >
                Purchase Now
              </a>
              <a
                href="https://rebrand.ly/slick-ud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-border page-scroll"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 p-0">
          <div className="intro-img">
            <img src="img/intro.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
