import React from "react";

export const ActionButton = ({ title, ...rest }) => {
  return (
    <button className="btn btn-common" type="submit" {...rest}>
      {title}
    </button>
  );
};
