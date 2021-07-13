import React from "react";
import { ActionButton } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

export const PasswordForm = () => {
  return (
    <Form id="contactForm">
      <Input name="password" placeholder="Clave actual" />
      <Input name="newPassword" placeholder="Nueva clave" />
      <Input name="confirmPassword" placeholder="Confirmar clave" />
      <ActionButton title="Actualizar" />
    </Form>
  );
};
