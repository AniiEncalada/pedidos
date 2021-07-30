import React, { Fragment } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { ProfileForm } from "./ProfileForm";
import { PasswordForm } from "./PasswordForm";
import { Address } from "./Address";

import { API_PEDIDOS } from "utils/constants";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { data } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Header />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <div>
                  <h2 className="section-title">Perfil de usuario</h2>
                  <div className="desc-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                    </p>
                    <p>eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h6 className="text-muted mb-4">Datos de Usuario</h6>
              <ProfileForm />
              <hr className="my-4" />
              <h6 className="text-muted mb-4">Actualizar contraseña</h6>
              <PasswordForm />
            </div>
            <div className="col-lg-1"></div>

            <div className="col-lg-4 col-md-12">
              <img
                src={`${API_PEDIDOS}/${data.photo_person}`}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-1"></div>
          </div>

          <hr className="my-4" />

          <div className="row">
            <div className="col-12">
              <h6 className="text-muted">Direcciones</h6>
              <Address />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
