import React from "react";

export const ToggleButton = ({ name, title }) => {
  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id={name} />
      <label htmlFor={name} className="form-check-label">
        {title}
      </label>
    </div>
  );
};
