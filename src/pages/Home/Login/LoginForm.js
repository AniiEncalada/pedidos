import React from "react";
import { useForm } from "react-hook-form";

import { ActionButton } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const LoginForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="custom-form">
      <div className="form-group">
        <Input name="user" placeholder="Ingrese su usuario" />
      </div>
      <div className="form-group">
        <Input type="password" name="password" placeholder="Ingrese su clave" />
      </div>

      <ActionButton title="Iniciar sesión" />
    </form>
  );
};
