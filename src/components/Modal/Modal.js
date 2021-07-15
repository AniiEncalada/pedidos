import React from "react";
import { Modal as ModalBootstrap } from "react-bootstrap";

import { ActionButton } from "../Button";

export const Modal = ({
  isShowing,
  setIsShowing,
  title,
  children,
  ...rest
}) => {
  return (
    <ModalBootstrap
      show={isShowing}
      onHide={() => setIsShowing(!isShowing)}
      {...rest}
    >
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title>{title}</ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>{children}</ModalBootstrap.Body>
      <ModalBootstrap.Footer>
        <ActionButton
          title="Cerrar"
          color="secondary"
          onClick={() => setIsShowing(!isShowing)}
        />
        <ActionButton
          title="Guardar Cambios"
          type="button"
          onClick={() => setIsShowing(!isShowing)}
        />
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
};
