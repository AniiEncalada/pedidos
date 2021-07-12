import React from "react";
import { ActionButton } from "../../../components/Button";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";

export const LoginForm = () => {
  return (
    <Form>
      <Input name="user" placeholder="Ingrese su usuario" />
      <Input type="password" name="password" placeholder="Ingrese su clave" />
      <ActionButton title="Iniciar sesión" />
    </Form>
  );
};
