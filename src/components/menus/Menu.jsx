import React from "react";
import PropTypes from "prop-types";
import "./Main.css";

const Menu = ({ logoSrc, text, children, className = "" }) => {
  return (
    <div className={`main-menu-container ${className}`}>
      {logoSrc ? (
        <img className="main-menu-logo" src={logoSrc} alt="Menu logo" />
      ) : text ? (
        <h2 className="menu-text">{text}</h2>
      ) : null}
      <div className="main-menu-bg">
        <div className="main-menu-bg-inside">{children}</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  logoSrc: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Menu;
