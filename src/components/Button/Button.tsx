import React from "react";
import classNames from "classnames";

import "./_button.scss";

interface IProps {
  label: string;
  size: string;
  color: string;
  disabled?: boolean;
  border?: string;
  onClick?: any;
  icon?: string;
}
const Button = ({
  label,
  size,
  disabled,
  color,
  border,
  icon,
  onClick
}: IProps) => {
  const baseClass = "button";
  const classes = classNames(
    baseClass,
    {
      [`${baseClass}--color-${color}`]: !!color
    },
    {
      [`${baseClass}--size-${size}`]: !!size
    },
    {
      [`${baseClass}--border-${border}`]: !!border
    }
  );
  return (
    <button className={classes} onClick={onClick}>
      {icon && (
        <span className="button__icon">
          <i className={icon} />
        </span>
      )}
      {label}
    </button>
  );
};

export default Button;
