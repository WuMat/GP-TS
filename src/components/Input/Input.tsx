import React from "react";
import classNames from "classnames";

import "./_input.scss";

interface IProps {
  type: string;
  placeholder?: string;
  description?: string;
  error?: string;
  width?: string;
  onChange?: any;
  name: string;
  color?: string;
}

const Input = ({
  type,
  placeholder,
  description,
  error,
  width,
  onChange,
  name,
  color
}: IProps) => {
  const baseClass = "Input";
  const classes = classNames(baseClass, {
    [`${baseClass}--width-${width}`]: !!width
  });

  return (
    <div className={classes}>
      <div className="Input__descriptionWrapper">
        <div className="Input__description">{description}</div>
        <div className="Input__errorMessage">{error ? error : null}</div>
      </div>
      <input
        className={`Input__field ${color ? `Input__field--${color}` : null}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
export default Input;
