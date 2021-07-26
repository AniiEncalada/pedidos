import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButton } from "components/Button";
import { Input } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import { loginSchema } from "utils/validations";
import { useDispatch } from "react-redux";
import { login } from "store/actions/auth.action";

export const LoginForm = () => {
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" placeholder="Ingrese su usuario" />

        <Input type="password" name="password" placeholder="Ingrese su clave" />

        <ActionButton title="Iniciar sesión" />
      </form>
    </FormProvider>
  );
};
