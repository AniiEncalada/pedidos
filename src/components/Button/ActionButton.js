import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const ActionButton = ({
  className,
  children,
  color,
  sm,
  lg,
  block,
  icon,
  ...rest
}) => {
  const actionButtonClass = classNames("btn", `btn-${color}`, className, {
    "btn-sm": sm,
    "btn-lg": lg,
    "btn-block": block,
    "btn-icon": icon,
  });

  return (
    <button className={actionButtonClass} type="submit" {...rest}>
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  color: PropTypes.string,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  block: PropTypes.bool,
  icon: PropTypes.bool,
};

ActionButton.defaultProps = {
  color: "common",
  sm: false,
  lg: false,
  block: false,
  icon: false,
};
