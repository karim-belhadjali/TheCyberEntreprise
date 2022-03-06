import React from "react";
import "./MenuRightStyle.scss";

function MenuRight({ closeMenu }) {
  return (
    <div className="menu_right">
      <ul id="language_menu" className="menu_container">
        <li>
          <a href="#">English</a>
        </li>
        <li>
          <a href="#">Spanish</a>
        </li>
        <li>
          <a href="#">German</a>
        </li>
        <li>
          <a href="#">Romanian</a>
        </li>
        <li>
          <a href="#">Italian</a>
        </li>
      </ul>

      <ul id="main_menu" className="menu_container">
        <li>
          <a href="#">CyberART</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">RoadMap</a>
        </li>
        <li>
          <a href="#">Telegram Groups</a>
        </li>
        <li>
          <a href="#">How to Buy</a>
        </li>
        <li>
          <a href="#">RUBBE System</a>
        </li>
        <li>
          <a href="#">Chart</a>
        </li>
        <li>
          <a href="#">Press Release</a>
        </li>
      </ul>

      <div onClick={closeMenu} className="close_menu_right"></div>
    </div>
  );
}

export default MenuRight;
