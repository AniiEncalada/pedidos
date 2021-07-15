import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Modal } from "../../../components/Modal";
import { AddressForm } from "./AddressForm";

export const AddressItem = ({ address, index }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="card">
      <div className="card-header">Dirección {index + 1}</div>

      <div className="card-body">
        <h5 className="card-title">{address.main_street}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {address.secondary_street}
        </h6>
        <p className="card-text">
          <i className="fas fa-house-user" /> {address.house_number}
        </p>
        <p className="card-text">
          <i className="fas fa-phone" /> {address.phone}
        </p>
        <p className="card-text">
          <i className="fas fa-map" /> {address.reference}
        </p>

        <Link
          to="#"
          className="card-link"
          onClick={() => setIsShowing(!isShowing)}
        >
          Modificar
        </Link>
        <Link to="#" className="card-link text-danger">
          Eliminar
        </Link>

        <Modal isShowing={isShowing} setIsShowing={setIsShowing} centered>
          <AddressForm address={address} />
        </Modal>
      </div>
    </div>
  );
};
