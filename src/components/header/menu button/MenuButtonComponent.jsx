import React from "react";
import "./MenuButtonStyle.scss";

function MenuButton() {
  return (
    <div id="menu_btn" className="menu_btn">
      <span className="btn"> MENU </span>
      <span className="loading_container">
        <span className="load1"></span>
        <span className="load2"></span>
        <span className="load3"></span>
        <span className="load4"></span>
        <span className="load5"></span>
      </span>
    </div>
  );
}

export default MenuButton;
