import React from "react";
import SideBtn from "./sideButton/SideBtnComponent";
import "./MenuRightStyle.scss";
import LanguageBtn from "./language button/LanguageBtnComponent";

function MenuRight({
  closeMenu,
  languageselection,
}: {
  closeMenu: any;
  languageselection: any;
}) {
  return (
    <div className="menu_right">
      <ul id="language_menu" className="menu_container">
        <li>
          <LanguageBtn
            text="English"
            onClick={() => languageselection("English")}
          />
        </li>
        <li>
          <LanguageBtn
            text="Spanish"
            onClick={() => languageselection("Spanish")}
          />
        </li>
        <li>
          <LanguageBtn
            text="German"
            onClick={() => languageselection("German")}
          />
        </li>
        <li>
          <LanguageBtn
            text="Romanian"
            onClick={() => languageselection("Romanian")}
          />
        </li>
        <li>
          <LanguageBtn
            text="Italian"
            onClick={() => languageselection("Italian")}
          />
        </li>
      </ul>

      <ul id="main_menu" className="menu_container">
        <li>
          <SideBtn text="Index" link="/" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Team" link="/team" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="RoadMap" link="/roadmap" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Calculator" link="/calculator" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Documents" link="/documents" onClick={closeMenu} />
        </li>
        <li>
          <SideBtn text="Press Release" link="/press" onClick={closeMenu} />
        </li>
      </ul>

      <div onClick={closeMenu} className="close_menu_right"></div>
    </div>
  );
}

export default MenuRight;
