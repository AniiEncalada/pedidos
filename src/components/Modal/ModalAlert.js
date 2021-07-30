import { ActionButton } from "components/Button";
import React from "react";

export const ModalAlert = ({ title, message, onClose, onConfirm }) => {
  return (
    <div className="alert">
      <h2>{title}</h2>
      <p>{message}</p>
      <ActionButton onClick={onClose}>Cancelar</ActionButton>
      <ActionButton
        onClick={() => {
          onConfirm();
          onClose();
        }}
      >
        Continuar
      </ActionButton>
    </div>
  );
};
