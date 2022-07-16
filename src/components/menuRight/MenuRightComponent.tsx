import React, { useEffect, useState } from "react";
import SideBtn from "./sideButton/SideBtnComponent";
import "./MenuRightStyle.scss";
import { handleLanguage } from "src/utility/globalUtlities";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";

function MenuRight({
  closeMenu,
  closeMenuX,
  language,
  handleUrlLanguage,
  currentScreen,
}: {
  closeMenu: any;
  closeMenuX: any;
  language: string;
  currentScreen: string;
  handleUrlLanguage: any;
}) {
  const [menuText, setmenuText] = useState(EnglishText.Globaltext.Menu);

  const handleCurrentScreenUrl = (language): string => {
    switch (currentScreen) {
      case "home":
        return "/" + handleLanguage(language) + "/";
      case "team":
        return "/" + handleLanguage(language) + "/team.html";
      case "Roadmap":
        return "/" + handleLanguage(language) + "/roadmap.html";
      case "calc":
        return "/" + handleLanguage(language) + "/cyber-calculator.html";
      case "doc":
        return "/" + handleLanguage(language) + "/documents.html";
      case "press":
        return "/" + handleLanguage(language) + "/press-release/";
      default:
        return "/" + handleLanguage(language) + "/";
    }
  };

  useEffect(() => {
    if (language === "English") {
      setmenuText(EnglishText.Globaltext.Menu);
    } else if (language === "Spanish") {
      setmenuText(SpanishText.Globaltext.Menu);
    }
  }, [language]);

  return (
    <div className="menu_right">
      <ul id="language_menu" className="menu_container">
        <li>
          <SideBtn
            text="English"
            link={handleCurrentScreenUrl("English")}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text="Spanish"
            link={handleCurrentScreenUrl("Spanish")}
            onClick={closeMenu}
          />
        </li>
      </ul>

      <ul id="main_menu" className="menu_container">
        <li>
          <SideBtn
            text={menuText.Home}
            link={"/" + handleLanguage(language) + "/"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text={menuText.Team}
            link={"/" + handleLanguage(language) + "/team.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text={menuText.RoadMap}
            link={"/" + handleLanguage(language) + "/roadmap.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text={menuText.Calculator}
            link={"/" + handleLanguage(language) + "/cyber-calculator.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text={menuText.Documents}
            link={"/" + handleLanguage(language) + "/documents.html"}
            onClick={closeMenu}
          />
        </li>
        <li>
          <SideBtn
            text={menuText.Press_Release}
            link={"/" + handleLanguage(language) + "/press-release/"}
            onClick={closeMenu}
          />
        </li>
      </ul>

      <div onClick={closeMenuX} className="close_menu_right"></div>
    </div>
  );
}

export default MenuRight;
