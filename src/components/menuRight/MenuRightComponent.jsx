import React from "react";
import SideBtn from "./sideButton/SideBtnComponent";
import "./MenuRightStyle.scss";

function MenuRight({ closeMenu }) {
  return (
    <div className="menu_right">
      <ul id="language_menu" className="menu_container">
        <li>
          <SideBtn text="English" />
        </li>
        <li>
          <SideBtn text="Spanish" />
        </li>
        <li>
          <SideBtn text="German" />
        </li>
        <li>
          <SideBtn text="Romanian" />
        </li>
        <li>
          <SideBtn text="Italian" />
        </li>
      </ul>

      <ul id="main_menu" className="menu_container">
        <li>
          <SideBtn text="CyberART" />
        </li>
        <li>
          <SideBtn text="Team" />
        </li>
        <li>
          <SideBtn text="RoadMap" />
        </li>
        <li>
          <SideBtn text="Telegram Groups" />
        </li>
        <li>
          <SideBtn text="How to Buy" />
        </li>
        <li>
          <SideBtn text="RUBBE System" />
        </li>
        <li>
          <SideBtn text="Chart" />
        </li>
        <li>
          <SideBtn text="Press Release" />
        </li>
      </ul>

      <div onClick={closeMenu} className="close_menu_right"></div>
    </div>
  );
}

export default MenuRight;
