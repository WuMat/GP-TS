import React from "react";
import PropTypes from "prop-types";
import "./_navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>Góry</li>
        <li>Jezrioro</li>
        <li>Zabytki</li>
        <li>Park</li>
        <li>Krajobraz</li>
        <li>Basen</li>
        <li>Inne</li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
