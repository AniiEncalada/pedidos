import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const ActionButton = ({
  className,
  title,
  color,
  sm,
  lg,
  block,
  ...rest
}) => {
  const actionButtonClass = classNames("btn", `btn-${color}`, className, {
    "btn-sm": sm,
    "btn-lg": lg,
    "btn-block": block,
  });

  return (
    <button className={actionButtonClass} type="submit" {...rest}>
      {title}
    </button>
  );
};

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ActionButton.defaultProps = {
  color: "common",
};
