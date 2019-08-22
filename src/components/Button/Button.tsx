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
  type: "button" | "submit" | "reset" | undefined;
}
const Button = ({
  label,
  size,
  disabled,
  color,
  border,
  icon,
  type,
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
    <button className={classes} type={type} onClick={onClick}>
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
