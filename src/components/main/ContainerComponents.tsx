import React, { useState } from "react";

import Announcements from "../annoucements/AnnouncementComponents";
import HeroContainer from "../hero/HeroContainerComponent";
import UtilityBar from "../utility-bar/UtilityBarComponent";
import TokenInfo from "../token-info/token-info";
import FixedTop from "../header/fixedTop/FixedTopComponent";
import FixedBot from "../fixedBottom/FixedBotComponent";
import {
  showLanguageMenu,
  showDarkLayer,
  close_language_menu_right,
  close_main_menu_right,
  showMainmenu,
} from "../../hooks/menu_right";

import "./ContainerStyle.scss";
import MenuRight from "../menuRight/MenuRightComponent";

function Container() {
  const heroRef = React.useRef<any>();
  const darklayerRef = React.useRef<any>(null);
  const [isMenu, setisMenu] = useState(false);

  const openMainMenu = () => {
    setisMenu(true);
    showDarkLayer(darklayerRef.current, showMainmenu);
  };
  const openLanguage = () => {
    setisMenu(false);
    showDarkLayer(darklayerRef.current, showLanguageMenu);
  };
  const closeMenu = () => {
    isMenu
      ? close_main_menu_right(darklayerRef.current)
      : close_language_menu_right(darklayerRef.current);
  };
  return (
    <div
      className="container"
      onMouseMove={(ev) => heroRef.current.mouseMoving(ev)}
    >
      <div className="top_hide"></div>
      <FixedTop menuClick={openMainMenu} />
      <Announcements />
      <HeroContainer ref={heroRef} />
      <TokenInfo />
      <FixedBot />
      <div className="bottom_hide"></div>
      <div ref={darklayerRef} className="dark_layer"></div>
    </div>
  );
}

export default Container;
