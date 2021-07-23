import React from "react";

import hamburguerImg from "../../assets/images/hamburguer.png";

export const Hero = () => {
  return (
    <div className="container">
      <div className="row space-100">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <div className="contents">
            <h2 className="head-title">RapiNASA</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              veniam ad odit velit, similique eos ipsam obcaecati dolorum amet.
              Consectetur?
            </p>
            <div className="header-button">
              <a
                href="https://rebrand.ly/slick-ud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-border-filled"
              >
                Ingresar
              </a>
              <a
                href="https://rebrand.ly/slick-ud"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-border page-scroll"
              >
                Conócenos
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 p-0">
          <div className="intro-img">
            <img src={hamburguerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
