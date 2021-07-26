import { RestaurantList } from "pages/Restaurant/RestaurantList";
import React, { Fragment } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Restaurant = () => {
  return (
    <Fragment>
      <Header />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <div>
                  <h2 className="section-title">Restaurantes</h2>
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
            <div className="col-lg-12">
              <RestaurantList />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
