import React from "react";
import { useForm } from "react-hook-form";
export const Form = ({ defaultValues, children, onSubmit }) => {
  const { handleSubmit, register } = useForm({ defaultValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) =>
            child.props.name
              ? React.createElement(child.type, {
                  ...{ ...child.props, key: child.props.name, register },
                })
              : child
          )
        : children}
    </form>
  );
};
