import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { ActionButton } from "../../components/Button";
import { Input } from "../../components/Input";

export const ProfileForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const { data } = useSelector((state) => state.auth);

  const onSubmit = (data) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="name"
              placeholder="Nombres"
              defaultValue={data.first_name_person}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <Input
              name="lastname"
              placeholder="Apellidos"
              defaultValue={data.last_name_person}
              readOnly
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="dni"
              placeholder="Cédula de identidad"
              defaultValue={data.dni_person}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <Input
              name="email"
              placeholder="Dirección de correo"
              defaultValue={data.account.email_account}
              readOnly
            />
          </div>
        </div>
        <ActionButton>Actualizar</ActionButton>
      </form>
    </FormProvider>
  );
};
