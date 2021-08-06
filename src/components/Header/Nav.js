import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";

import logo from "../../assets/images/logo-white.png";
import { useDispatch, useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { logout } from "store/actions/auth.action";

export const Nav = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar headroom"
      id="navbar-main"
    >
      <div className="container">
        <Link to="index.html" className="navbar-brand">
          <img src={logo} alt="" />
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
              <Link className="nav-link page-scroll" to="/">
                Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="/perfil">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="/productos">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link page-scroll" to="/restaurantes">
                Restaurantes
              </Link>
            </li>
            <li className="nav-item">
              {!loggedIn ? (
                <HashLink to="#login" className="btn btn-singin">
                  Comenzar
                </HashLink>
              ) : (
                <Link
                  className="nav-link page-scroll"
                  to="/"
                  onClick={() => dispatch(logout())}
                >
                  Cerrar Sesión
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
