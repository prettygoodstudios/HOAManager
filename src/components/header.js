import React, {Component} from "react";
const Header = ({title, subtitle}) => {
  return(
    <div className="header-wrapper">
      <h1 className="header-wrapper__title">{title}</h1>
      <p className="header-wrapper__subtitle">{subtitle}</p>
    </div>
  );
}
export default Header;
