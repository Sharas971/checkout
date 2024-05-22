import React from "react";
import logoipsumLogo from "../../resources/images/logoipsum-logo.png";
import shoppingBag from "../../resources/images/shopping-bag.svg";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <div className="header">
        <img src={logoipsumLogo} alt="Logoipsum logo" className="header-logo" />
        <img src={shoppingBag} alt="shopping bag" className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
