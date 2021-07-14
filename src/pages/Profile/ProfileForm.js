import React from "react";
import { useForm } from "react-hook-form";

import { ActionButton } from "../../components/Button";
import { Input } from "../../components/Input";

export const ProfileForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Input name="name" placeholder="Nombres" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Input name="lastname" placeholder="Apellidos" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Input name="dni" placeholder="Cédula de identidad" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Input name="email" placeholder="Dirección de correo" />
          </div>
        </div>
      </div>
      <ActionButton title="Actualizar" />
    </form>
  );
};
