import React from "react";
import { LoginForm } from "./LoginForm";
import pedidos from "../../../assets/images/pedidos.jpg";

export const Login = () => {
  return (
    <section className="section" id="login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header text-center">
              <div>
                <h2 className="section-title">Iniciar Sesión</h2>
                <div className="desc-text">
                  <p>
                    A continuación ingresa tus credenciales para acceder a las
                    funcionalidades del sistema.
                  </p>
                  <p>¡Comencemos!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <LoginForm />
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-4 col-md-12">
            <div className="login-img">
              <img src={pedidos} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};
