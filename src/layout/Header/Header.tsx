import React from "react";
import Logo from "../../images/logo.png";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";

import "./_header.scss";

interface IProps {
  children: JSX.Element;
}

const Header = ({ children }: IProps) => {
  return (
    <div className="header">
      <div className="header__img" />
      <div className="header__top">
        <div className="wrapper">
          <div className="top__container">
            <img src={Logo} />
            <div className="top__button">
              <Button
                label="Zaproponuj nową lokalizacje"
                color="red"
                size="res"
                icon="fas fa-map-marker-alt"
              />
            </div>
            <div className="top__InfoLocation">
              <ul>
                <li>O nas</li>
                <li>Najnowsze</li>
                <li>Najlpiej oceniane</li>
                <li>Wszystkie lokalizację</li>
                <li>Kontakt</li>
              </ul>
            </div>
            <div className="header__userPanel">
              <div className="header__statsUser">Do odwiedzenia (23)</div>
              <div className="header__buttonAccount">
                <Button label="Twoje Konto" color="red" size="res" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__navigation">
          <div className="wrapper">{children}</div>
        </div>
      </div>
      <div className="header__photos">
        <div className="photos__first">
          <div className="photos__frame" />
        </div>
        <div className="photos__second">
          <div className="photos__frame" />
        </div>
        <div className="photos__third">
          <div className="photos__frame" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
