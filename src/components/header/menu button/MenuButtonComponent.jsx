import React from "react";
import "./MenuButtonStyle.css";

function MenuButton() {
  return (
    <div id="menu_btn" className="menu_btn">
      <span className="btn"> MENU </span>
      <span className="loading_container">
        <span className="spann"></span>
        <span className="spann"></span>
        <span className="spann"></span>
        <span className="spann"></span>
        <span className="spann"></span>
      </span>
    </div>
  );
}

export default MenuButton;
