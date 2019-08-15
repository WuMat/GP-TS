import React from "react";
import PropTypes from "prop-types";
import "./_footer.scss";

interface IProps {
  children: JSX.Element;
}

const Footer = ({ children }: IProps) => {
  return (
    <div className="footer">
      <div className="footer__img" />
      <div className="footer__img--opacity" />
      <div className="footer__top">
        <div className="wrapper">{children}</div>
      </div>
      <div className="footer__bottom" />
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
