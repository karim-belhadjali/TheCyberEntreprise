import React from "react";
import SideBtn from "./sideButton/SideBtnComponent";
import "./MenuRightStyle.scss";
import LanguageBtn from "./language button/LanguageBtnComponent";
import { handleLanguage } from "src/utility/globalUtlities";

function MenuRight({
  closeMenu,
  languageselection,
  language,
}: {
  closeMenu: any;
  languageselection: any;
  language: any;
}) {
  //   <li>
  //   <LanguageBtn
  //     text="Spanish"
  //     onClick={() => languageselection("Spanish")}
  //   />
  // </li>
  // <li>
  //   <LanguageBtn
  //     text="German"
  //     onClick={() => languageselection("German")}
  //   />
  // </li>
  // <li>
  //   <LanguageBtn
  //     text="Romanian"
  //     onClick={() => languageselection("Romanian")}
  //   />
  // </li>
  // <li>
  //   <LanguageBtn
  //     text="Italian"
  //     onClick={() => languageselection("Italian")}
  //   />
  // </li>

  return (
    <div className="menu_right">
      <ul id="language_menu" className="menu_container">
        <li>
          <LanguageBtn
            text="English"
            onClick={() => languageselection("English")}
          />
        </li>
      </ul>

      <ul id="main_menu" className="menu_container">
        <li>
          <SideBtn
            text="Home"
            link={"/" + handleLanguage(language) + "/"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text="Team"
            link={"/" + handleLanguage(language) + "/team.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text="RoadMap"
            link={"/" + handleLanguage(language) + "/roadmap.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text="Calculator"
            link={"/" + handleLanguage(language) + "/cyber-calculator.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text="Documents"
            link={"/" + handleLanguage(language) + "/documents.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text="Press Release"
            link={"/" + handleLanguage(language) + "/press-release/"}
            onClick={closeMenu}
          />
        </li>
      </ul>

      <div onClick={closeMenu} className="close_menu_right"></div>
    </div>
  );
}

export default MenuRight;
