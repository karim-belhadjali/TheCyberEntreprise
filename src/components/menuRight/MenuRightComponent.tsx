import React from "react";
import SideBtn from "./sideButton/SideBtnComponent";
import "./MenuRightStyle.scss";

function MenuRight({ closeMenu }: { closeMenu: any }) {
  return (
    <div className="menu_right">
      <ul id="language_menu" className="menu_container">
        <li>
          <SideBtn text="English" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Spanish" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="German" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Romanian" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Italian" link="/" onClick={closeMenu} />
        </li>
      </ul>

      <ul id="main_menu" className="menu_container">
        <li>
          <SideBtn text="CyberART" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Team" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="RoadMap" link="/roadmap" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Telegram Groups" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="How to Buy" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="RUBBE System" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Chart" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Press Release" link="/" onClick={closeMenu} />
        </li>
      </ul>

      <div onClick={closeMenu} className="close_menu_right"></div>
    </div>
  );
}

export default MenuRight;
