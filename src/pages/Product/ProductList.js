import { Modal, ModalAlert } from "components/Modal";
import { Table } from "components/Table";
import { ProductForm } from "pages/Product/ProductForm";
import { tableConstant } from "pages/Product/tableConstant";
import React, { Fragment, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "store/actions/product.action";

export const ProductList = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const { data } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsShowing(true);
  };
  const handleRemove = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ModalAlert
          title="Confirmar"
          message="¿Está seguro de continuar?"
          onClose={onClose}
          onConfirm={() => dispatch(deleteProduct(id))}
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
        <ProductForm product={currentProduct} />
      </Modal>

      <Table
        cols={tableConstant(handleEdit, handleRemove)}
        data={data}
        hoverable
      />
    </Fragment>
  );
};
