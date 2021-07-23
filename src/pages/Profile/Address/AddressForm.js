import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "../../../components/Input";

export const AddressForm = ({ address }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Input name="main_street" placeholder="Calle Principal" />
        </div>
        <div className="form-group">
          <Input name="secondary_street" placeholder="Calle Secundaria" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <Input name="house_number" placeholder="Número de casa" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Input name="phone" placeholder="Teléfono" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <Input name="reference" placeholder="Referencia" />
        </div>
      </form>
    </FormProvider>
  );
};
