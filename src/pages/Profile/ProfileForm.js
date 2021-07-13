import React from "react";
import { ActionButton } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

export const ProfileForm = () => {
  return (
    <Form id="contactForm">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Input name="name" placeholder="Nombre de usuario" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Input name="lastname" placeholder="Apellido de usuario" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Input name="dni" placeholder="Cédula de usuario" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Input name="email" placeholder="Dirección de correo de usuario" />
          </div>
        </div>
      </div>
      <ActionButton title="Actualizar" />
    </Form>
  );
};
