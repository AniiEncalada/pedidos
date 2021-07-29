import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButton } from "../../components/Button";
import { Input } from "../../components/Input";

export const ProfileForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Input name="name" placeholder="Nombres" />
          </div>
          <div className="col-md-6">
            <Input name="lastname" placeholder="Apellidos" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input name="dni" placeholder="Cédula de identidad" />
          </div>
          <div className="col-md-6">
            <Input name="email" placeholder="Dirección de correo" />
          </div>
        </div>
        <ActionButton>Actualizar</ActionButton>
      </form>
    </FormProvider>
  );
};
