import classNames from "classnames";
import React from "react";
import _ from "lodash";
import { useFormContext, useFormState } from "react-hook-form";

export const Select = ({
  name,
  placeholder,
  className,
  options,
  helpText,
  ...rest
}) => {
  const { register } = useFormContext();
  const { errors } = useFormState();
  const selectError = _.get(errors, name);
  const selectClass = classNames("form-select", className, {
    "is-invalid": !!selectError,
  });

  console.log(`rest.defaultValue`, rest.defaultValue);

  return (
    <div className="form-group">
      <select className={selectClass} {...register(name)} {...rest}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      {helpText && (
        <small id={`${name}-help`} className="form-text text-muted">
          {helpText}
        </small>
      )}
      <div className="invalid-feedback">{selectError?.message}</div>
    </div>
  );
};
