import React, { Children } from "react";

import "./_title_info.scss";

interface IProps {
  label: string;
  children?: JSX.Element;
}

const Title_info = ({ label, children }: IProps) => {
  return (
    <div className="titleInfo">
      {label ? <p>{label}</p> : null}
      {children}
    </div>
  );
};

export default Title_info;
