import { ActionButton } from "components/Button";
import { Modal } from "components/Modal";
import { RestaurantForm } from "pages/Restaurant/RestaurantForm";
import { RestaurantList } from "pages/Restaurant/RestaurantList";
import React, { Fragment, useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Restaurant = () => {
  const [isShowing, setIsShowing] = useState(false);

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
              <ActionButton
                className="mb-4"
                type="button"
                onClick={() => setIsShowing(!isShowing)}
              >
                Agregar restaurante
              </ActionButton>

              <Modal
                title="Nuevo Restaurante"
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                centered
                size="lg"
                hiddenFooter
              >
                <RestaurantForm setIsShowing={setIsShowing} />
              </Modal>
            </div>
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
