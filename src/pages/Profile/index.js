import React, { Fragment } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProfileForm } from "./ProfileForm";
import avatar from "../../assets/images/profile.png";
import { PasswordForm } from "./PasswordForm";

export const Profile = () => {
  return (
    <Fragment>
      <Header />
      <section id="contact" class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-text section-header text-center">
                <div>
                  <h2 class="section-title">Perfil de usuario</h2>
                  <div class="desc-text">
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

          <div class="row">
            <div class="col-lg-6 col-md-12">
              <ProfileForm />
              <hr />
              <PasswordForm />
            </div>
            <div class="col-lg-1"></div>

            <div class="col-lg-4 col-md-12">
              <div class="contact-img">
                <img src={avatar} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-lg-1"></div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
