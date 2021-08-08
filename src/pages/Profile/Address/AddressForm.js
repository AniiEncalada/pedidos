import { ActionButton } from "components/Button";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "store/actions/auth.action";
import { addressSchema } from "utils/validations";

import { Input } from "../../../components/Input";

export const AddressForm = ({ address = {}, setIsShowing }) => {
  const resolver = useYupValidationResolver(addressSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data.person = auth.data._id;
    dispatch(saveAddress(data));
    setIsShowing(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name_address"
          placeholder="Nombre de la Dirección*"
          defaultValue={address.name_address}
        />

        <div className="row">
          <div className="col-md-6">
            <Input
              name="country_address"
              placeholder="Pais*"
              defaultValue={address.country_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="province_address"
              placeholder="Provincia*"
              defaultValue={address.province_address}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="canton_address"
              placeholder="Cantón*"
              defaultValue={address.canton_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="city_address"
              placeholder="Ciudad*"
              defaultValue={address.city_address}
            />
          </div>
        </div>

        <Input
          name="main_street_address"
          placeholder="Calle principal*"
          defaultValue={address.main_street_address}
        />

        <Input
          name="secondary_street_address"
          placeholder="Calle secundaria"
          defaultValue={address.secondary_street_address}
        />

        <div className="row">
          <div className="col-md-6">
            <Input
              name="parish_address"
              placeholder="Parroquia"
              defaultValue={address.parish_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="house_number_address"
              placeholder="Número de casa"
              defaultValue={address.house_number_address}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="reference_address"
              placeholder="Referencia"
              defaultValue={address.reference_address}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="latitude_address"
              placeholder="Latitud"
              defaultValue={address.latitude_address}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="longitude_address"
              placeholder="Longitud"
              defaultValue={address.longitude_address}
            />
          </div>
        </div>

        <ActionButton>Guardar Cambios</ActionButton>
      </form>
    </FormProvider>
  );
};
