import React, { Fragment, useState } from "react";

import { ActionButton } from "../../../components/Button";
import { Modal } from "../../../components/Modal";

import { AddressForm } from "./AddressForm";
import { AddressList } from "./AddressList";

export const Address = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Fragment>
      <ActionButton
        title="Agregar dirección"
        className="mb-4"
        type="button"
        onClick={() => setIsShowing(!isShowing)}
      />

      <AddressList />
      <Modal isShowing={isShowing} setIsShowing={setIsShowing} centered>
        <AddressForm />
      </Modal>
    </Fragment>
  );
};
