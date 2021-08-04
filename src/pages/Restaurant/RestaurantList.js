import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableConstant } from "./tableConstant";
import { Table } from "components/Table";
import {
  getRestaurants,
  toggleRestaurant,
} from "store/actions/restaurant.action";
import { Modal, ModalAlert } from "components/Modal";
import { confirmAlert } from "react-confirm-alert";
import { FormProvider, useForm } from "react-hook-form";
import { Select } from "components/Input";
import { RestaurantForm } from "pages/Restaurant/RestaurantForm";

export const RestaurantList = () => {
  const methods = useForm();
  const [isShowing, setIsShowing] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const { data } = useSelector((state) => state.restaurant);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants("up"));
  }, [dispatch]);

  const handleEdit = (restaurant) => {
    setCurrentRestaurant(restaurant);
    setIsShowing(true);
  };

  const handleToggle = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ModalAlert
          title="Modificar estado del Restaurante"
          message="¿Está seguro de continuar?"
          onClose={onClose}
          onConfirm={() => {
            const filter = methods.getValues("filter");
            dispatch(toggleRestaurant(id, filter));
          }}
        />
      ),
    });
  };

  return (
    <Fragment>
      <Modal
        title="Editar Restaurante"
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        centered
        size="lg"
        hiddenFooter
      >
        <RestaurantForm
          restaurant={currentRestaurant}
          setIsShowing={setIsShowing}
        />
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
              onChange={({ target }) => dispatch(getRestaurants(target.value))}
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
