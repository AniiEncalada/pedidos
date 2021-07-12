import React from "react";

export const Select = ({ name, register, options, ...rest }) => {
  return (
    <select className="form-select" {...register(name)} {...rest}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
