import React from "react";
import { LoginForm } from "./LoginForm";
import pedidos from "../../../assets/images/pedidos.jpg";

export const Login = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">
              <div>
                <h2 className="section-title">Get In Touch</h2>
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
            {/* Login Form */}
            <LoginForm />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src={pedidos} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};
