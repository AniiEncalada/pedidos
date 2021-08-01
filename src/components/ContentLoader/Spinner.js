import React from "react";
import { Spinner as BootstrapSpinner } from "react-bootstrap";
import PropTypes from "prop-types";

export const Spinner = ({ text, ...rest }) => {
  return (
    <div className="custom-spinner">
      <BootstrapSpinner animation="border" role="status" {...rest}>
        <span className="visually-hidden">{text}</span>
      </BootstrapSpinner>
    </div>
  );
};

Spinner.propTypes = {
  text: PropTypes.string,
};

Spinner.defaultProps = {
  text: "Cargando...",
};
