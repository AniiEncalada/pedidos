import React from "react";

export const Input = ({ name, register, ...rest }) => {
  return (
    <input
      type="text"
      className="form-control"
      id={name}
      name={name}
      // {...register(name)}
      autoComplete="off"
      {...rest}
    />
  );
};
