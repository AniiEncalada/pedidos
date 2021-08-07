import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableConstant } from "./tableConstant";
import { Table } from "components/Table";
import { getOrders, toggleOrder } from "store/actions/order.action";
import { ModalAlert } from "components/Modal";
import { confirmAlert } from "react-confirm-alert";
import { FormProvider, useForm } from "react-hook-form";
import { Select } from "components/Input";

export const OrderList = () => {
  const methods = useForm();
  const { data } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders("all"));
  }, [dispatch]);

  const handleToggle = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ModalAlert
          title="Modificar estado de la Órden"
          message="¿Está seguro de continuar?"
          onClose={onClose}
          onConfirm={() => {
            const filter = methods.getValues("filter");
            dispatch(toggleOrder(id, filter));
          }}
        />
      ),
    });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-4">
          <FormProvider {...methods}>
            <Select
              name="filter"
              placeholder="Filtar por"
              options={[
                { label: "Todas", value: "all" },
                { label: "Canceladas", value: "cancelado" },
                { label: "Pedientes", value: "pendiente" },
                { label: "En proceso", value: "en proceso" },
                { label: "Enviadas", value: "enviado" },
                { label: "Recibidas", value: "recibido" },
                { label: "Rechazadas", value: "rechazado" },
                { label: "Perdidas", value: "perdido" },
              ]}
              onChange={({ target }) => dispatch(getOrders(target.value))}
            />
          </FormProvider>
        </div>
      </div>

      <Table cols={tableConstant(handleToggle)} data={data} hoverable />
    </Fragment>
  );
};
