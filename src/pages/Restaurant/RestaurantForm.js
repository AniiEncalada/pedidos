import { ActionButton } from "components/Button";
import { Input } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.person = auth.data._id;
    if (data.image_shop[0]) data.image_shop = data.image_shop[0];
    else data.image_shop = restaurant.image_shop;
    if (data.image_profile_shop[0])
      data.image_profile_shop = data.image_profile_shop[0];
    else data.image_profile_shop = restaurant.image_profile_shop;

    restaurant._id
      ? dispatch(updateRestaurant(restaurant._id, data))
      : dispatch(saveRestaurant(data));

    setIsShowing(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name_shop"
          placeholder="Nombre/denominación"
          defaultValue={restaurant.name_shop}
        />

        <div className="row">
          <div className="col-md-6">
            <Input
              name="phone_shop"
              placeholder="Teléfono"
              defaultValue={restaurant.phone_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="email_shop"
              placeholder="Correo Electrónico"
              defaultValue={restaurant.email_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="country_address"
              placeholder="Pais"
              defaultValue={restaurant.country_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="province_address"
              placeholder="Provincia"
              defaultValue={restaurant.province_address}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="canton_address"
              placeholder="Cantón"
              defaultValue={restaurant.canton_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="city_address"
              placeholder="Ciudad"
              defaultValue={restaurant.city_address}
            />
          </div>
        </div>

        <Input
          name="main_street_address"
          placeholder="Calle principal"
          defaultValue={restaurant.main_street_address}
        />

        <Input
          name="secondary_street_address"
          placeholder="Calle secundaria"
          defaultValue={restaurant.secondary_street_address}
        />

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
              name="catchword_shop"
              placeholder="Lema"
              defaultValue={restaurant.catchword_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="bank_shop"
              placeholder="Banco"
              defaultValue={restaurant.bank_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="bank_account_shop"
              placeholder="Cuenta de Banco"
              defaultValue={restaurant.bank_account_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="bank_account_owner_shop"
              placeholder="Titular de la Cuenta de Banco"
              defaultValue={restaurant.bank_account_owner_shop}
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
                label="Imágen de portada"
                accept="image/*"
              />
            </div>
          </div>
        ) : (
          <Input
            type="file"
            name="image_shop"
            className="pick_image"
            label="Imágen de portada"
            accept="image/*"
          />
        )}

        {restaurant.image_profile_shop ? (
          <div className="row">
            <div className="col-md-4 image-form">
              <img
                className="rounded img-fluid"
                src={`${API_PEDIDOS}${restaurant.image_profile_shop}`}
                alt={restaurant.name_restaurant}
              />
            </div>
            <div className="col-md-8">
              <Input
                type="file"
                name="image_profile_shop"
                className="pick_image"
                label="Imágen de perfil"
                accept="image/*"
              />
            </div>
          </div>
        ) : (
          <Input
            type="file"
            name="image_profile_shop"
            className="pick_image"
            label="Imágen de perfil"
            accept="image/*"
          />
        )}

        <ActionButton>Guardar Cambios</ActionButton>
      </form>
    </FormProvider>
  );
};
