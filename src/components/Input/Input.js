import React from "react";
import { useFormContext, useFormState } from "react-hook-form";
import classNames from "classnames";
import _ from "lodash";

export const Input = ({ name, label, className, ...rest }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const inputError = _.get(errors, name);

  const inputClass = classNames("form-control", className, {
    "is-invalid": !!inputError,
  });

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="text"
        id={name}
        className={inputClass}
        autoComplete="off"
        {...register(name)}
        {...rest}
      />
      <div className="invalid-feedback">{inputError?.message}</div>
    </div>
  );
};
