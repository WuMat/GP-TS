import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {children}
      <Footer>
        <Navigation />
      </Footer>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
