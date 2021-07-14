import React from "react";
import { useForm } from "react-hook-form";

import { ActionButton } from "../../components/Button";
import { Input } from "../../components/Input";

export const PasswordForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <Input type="password" name="password" placeholder="Clave actual" />
      </div>
      <div className="form-group">
        <Input type="password" name="newPassword" placeholder="Nueva clave" />
      </div>
      <div className="form-group">
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar clave"
        />
      </div>
      <ActionButton title="Actualizar" />
    </form>
  );
};
