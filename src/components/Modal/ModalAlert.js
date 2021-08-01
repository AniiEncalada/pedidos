import { ActionButton } from "components/Button";
import React from "react";

export const ModalAlert = ({ title, message, onClose, onConfirm }) => {
  return (
    <div className="modal-alert">
      <h5>{title}</h5>
      <p>{message}</p>
      <ActionButton color="secondary" onClick={onClose} className="mr-1">
        Cancelar
      </ActionButton>
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
