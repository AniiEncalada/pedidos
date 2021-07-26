import classNames from "classnames";
import React from "react";
import _ from "lodash";
import { useFormContext, useFormState } from "react-hook-form";

export const Select = ({ name, placeholder, className, options, ...rest }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();
  const selectError = _.get(errors, name);
  const selectClass = classNames("form-select", className, {
    "is-invalid": !!selectError,
  });

  return (
    <div className="form-group">
      <select
        className={selectClass}
        {...register(name)}
        defaultValue=""
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">{selectError?.message}</div>
    </div>
  );
};
