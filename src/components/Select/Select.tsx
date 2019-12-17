import React from "react";
import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";

import { arrayToSelect } from "../../utils/transformEnumsToSelect";
import style from "./style";

interface Iprops {
  options: arrayToSelect[];
  placeholder: string;
  onChange: (el: ValueType<arrayToSelect>) => void;
}

const Select = ({ options, onChange, placeholder }: Iprops) => {
  return (
    <ReactSelect
      styles={style}
      options={options}
      getOptionLabel={option => option.name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Select;
