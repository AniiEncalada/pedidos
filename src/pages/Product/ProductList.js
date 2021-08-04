import { Select } from "components/Input";
import { Modal, ModalAlert } from "components/Modal";
import { Table } from "components/Table";
import { ProductForm } from "pages/Product/ProductForm";
import { tableConstant } from "pages/Product/tableConstant";
import React, { Fragment, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleProduct, getProducts } from "store/actions/product.action";

export const ProductList = () => {
  const methods = useForm();
  const [isShowing, setIsShowing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const { data } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts("up"));
  }, [dispatch]);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsShowing(true);
  };

  const handleToggle = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ModalAlert
          title="Modificar estado del Producto"
          message="¿Está seguro de continuar?"
          onClose={onClose}
          onConfirm={() => {
            const filter = methods.getValues("filter");
            dispatch(toggleProduct(id, filter));
          }}
        />
      ),
    });
  };

  return (
    <Fragment>
      <Modal
        title="Editar Producto"
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        centered
        size="lg"
        hiddenFooter
      >
        <ProductForm product={currentProduct} setIsShowing={setIsShowing} />
      </Modal>

      <div className="row">
        <div className="col-md-4">
          <FormProvider {...methods}>
            <Select
              name="filter"
              placeholder="Filtar por"
              options={[
                { label: "Activos", value: "up" },
                { label: "Inactivos", value: "down" },
              ]}
              onChange={({ target }) => dispatch(getProducts(target.value))}
            />
          </FormProvider>
        </div>
      </div>

      <Table
        cols={tableConstant(handleEdit, handleToggle)}
        data={data}
        hoverable
      />
    </Fragment>
  );
};
