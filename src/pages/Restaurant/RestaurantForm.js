import { ActionButton } from "components/Button";
import { Input } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  saveRestaurant,
  updateRestaurant,
} from "store/actions/restaurant.action";
import { API_PEDIDOS } from "utils/constants";
import { restaurantSchema } from "utils/validations";

export const RestaurantForm = ({ restaurant = {}, setIsShowing }) => {
  const resolver = useYupValidationResolver(restaurantSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.image_shop[0]) data.image_shop = data.image_shop[0];

    restaurant._id
      ? dispatch(updateRestaurant(restaurant._id, data))
      : dispatch(saveRestaurant(data));

    setIsShowing(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="name_shop"
              placeholder="Nombre/denominación"
              defaultValue={restaurant.name_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="catchword_shop"
              placeholder="Lema"
              defaultValue={restaurant.catchword_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="promotional_text_shop"
              placeholder="Texto Promocional"
              defaultValue={restaurant.promotional_text_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="phone_shop"
              placeholder="Teléfono"
              defaultValue={restaurant.phone_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="email_shop"
              placeholder="Correo Electrónico"
              defaultValue={restaurant.email_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="bank_shop"
              placeholder="Banco"
              defaultValue={restaurant.bank_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="bank_account_shop"
              placeholder="Cuenta de Banco"
              defaultValue={restaurant.bank_account_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="bank_account_owner_shop"
              placeholder="Titular de la Cuenta de Banco"
              defaultValue={restaurant.bank_account_owner_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="principal_st"
              placeholder="Calle Principal"
              defaultValue={restaurant?.principal_st}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="secondary_st"
              placeholder="Calle Secundaria"
              defaultValue={restaurant?.secondary_st}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="latitude"
              placeholder="Latitud"
              defaultValue={restaurant?.latitude}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="longitude"
              placeholder="Longitud"
              defaultValue={restaurant?.longitude}
            />
          </div>
        </div>

        <Input
          type="hidden"
          name="required_image_shop"
          defaultValue={!restaurant.image_shop}
          readOnly
        />

        {restaurant.image_shop ? (
          <div className="row">
            <div className="col-md-4 image-form">
              <img
                className="rounded img-fluid"
                src={`${API_PEDIDOS}${restaurant.image_shop}`}
                alt={restaurant.name_restaurant}
              />
            </div>
            <div className="col-md-8">
              <Input
                type="file"
                name="image_shop"
                className="pick_image"
                label="Imágen del restaurante"
                accept="image/*"
              />
            </div>
          </div>
        ) : (
          <Input
            type="file"
            name="image_shop"
            className="pick_image"
            label="Imágen del restaurante"
            accept="image/*"
          />
        )}

        <ActionButton>Guardar Cambios</ActionButton>
      </form>
    </FormProvider>
  );
};
