import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import hamburguerImg from "../../assets/images/hamburguer.png";

export const Hero = () => {
  const { loggedIn } = useSelector((state) => state.auth);

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
              <HashLink
                to={loggedIn ? "/perfil" : "#login"}
                className="btn btn-border-filled"
              >
                Ingresar
              </HashLink>

              <Link to="#" className="btn btn-border page-scroll">
                Conócenos
              </Link>
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
