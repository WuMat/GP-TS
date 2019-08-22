import React from "react";

import "./_loader.scss";

const Spinner = () => {
  return (
    <div className="loader">
      <div className="loader__wrapper">
        <div className="bubble">
          <div className="bubble__shine bubble__shine" />
        </div>
        <div className="bubble__bottom" />
      </div>
    </div>
  );
};

export default Spinner;
