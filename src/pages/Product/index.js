import React, { Fragment, useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductList } from "pages/Product/ProductList";
import { ActionButton } from "components/Button";
import { Modal } from "components/Modal";
import { ProductForm } from "pages/Product/ProductForm";

export const Product = () => {
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
                  <h2 className="section-title">Productos</h2>
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
                Agregar producto
              </ActionButton>

              <Modal
                title="Nuevo Producto"
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                centered
                size="lg"
                hiddenFooter
              >
                <ProductForm />
              </Modal>
            </div>
            <div className="col-lg-12">
              <ProductList />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
