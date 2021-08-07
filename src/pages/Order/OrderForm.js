import { ActionButton } from "components/Button";
import { Input } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder, updateOrder } from "store/actions/order.action";
import { API_PEDIDOS } from "utils/constants";
import { orderSchema } from "utils/validations";

export const OrderForm = ({ order = {}, setIsShowing }) => {
  const resolver = useYupValidationResolver(orderSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.person = auth.data._id;
    if (data.image_shop[0]) data.image_shop = data.image_shop[0];
    else data.image_shop = order.image_shop || "";
    if (data.image_profile_shop[0])
      data.image_profile_shop = data.image_profile_shop[0];
    else data.image_profile_shop = order.image_profile_shop || "";

    order._id
      ? dispatch(updateOrder(order._id, data))
      : dispatch(saveOrder(data));

    setIsShowing(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name_shop"
          placeholder="Nombre/denominación"
          defaultValue={order.name_shop}
        />

        <div className="row">
          <div className="col-md-6">
            <Input
              name="phone_shop"
              placeholder="Teléfono"
              defaultValue={order.phone_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="email_shop"
              placeholder="Correo Electrónico"
              defaultValue={order.email_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="country_address"
              placeholder="Pais"
              defaultValue={order.country_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="province_address"
              placeholder="Provincia"
              defaultValue={order.province_address}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="canton_address"
              placeholder="Cantón"
              defaultValue={order.canton_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="city_address"
              placeholder="Ciudad"
              defaultValue={order.city_address}
            />
          </div>
        </div>

        <Input
          name="main_street_address"
          placeholder="Calle principal"
          defaultValue={order.main_street_address}
        />

        <Input
          name="secondary_street_address"
          placeholder="Calle secundaria"
          defaultValue={order.secondary_street_address}
        />

        <div className="row">
          <div className="col-md-6">
            <Input
              name="promotional_text_shop"
              placeholder="Texto Promocional"
              defaultValue={order.promotional_text_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="catchword_shop"
              placeholder="Lema"
              defaultValue={order.catchword_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="bank_shop"
              placeholder="Banco"
              defaultValue={order.bank_shop}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="bank_account_shop"
              placeholder="Cuenta de Banco"
              defaultValue={order.bank_account_shop}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="bank_account_owner_shop"
              placeholder="Titular de la Cuenta de Banco"
              defaultValue={order.bank_account_owner_shop}
            />
          </div>
        </div>

        <Input
          type="hidden"
          name="required_image_shop"
          defaultValue={!order.image_shop}
          readOnly
        />

        {order.image_shop ? (
          <div className="row">
            <div className="col-md-6 image-lg-form">
              <img
                className="rounded img-fluid"
                src={`${API_PEDIDOS}${order.image_shop}`}
                alt={order.name_order}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="file"
                name="image_shop"
                className="pick_image"
                label="Nueva imágen de portada"
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

        {order.image_profile_shop ? (
          <div className="row">
            <div className="col-md-4 image-form">
              <img
                className="rounded img-fluid"
                src={`${API_PEDIDOS}${order.image_profile_shop}`}
                alt={order.name_order}
              />
            </div>
            <div className="col-md-8">
              <Input
                type="file"
                name="image_profile_shop"
                className="pick_image"
                label="Nueva imágen de perfil"
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
