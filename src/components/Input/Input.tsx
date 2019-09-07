import React from "react";
import classNames from "classnames";
import { InputInterface } from "../../interfaces/input";
import "./_input.scss";

const Input: React.FC<InputInterface> = ({
  type,
  placeholder,
  description,
  error,
  width,
  onChange,
  name,
  color
}) => {
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
