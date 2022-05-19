import React, { useState } from "react";

import Announcements from "../../components/annoucements/AnnouncementComponents";
import HeroContainer from "../../components/hero/HeroContainerComponent";
import UtilityBar from "../../components/utility-bar/UtilityBarComponent";
import FixedTop from "../../components/header/fixedTop/FixedTopComponent";
import FixedBot from "../../components/fixedBottom/FixedBotComponent";
import {
  showLanguageMenu,
  showDarkLayer,
  close_language_menu_right,
  close_main_menu_right,
  showMainmenu,
} from "../../animations/menu_right";

import "./MainScreenStyle.scss";
import MenuRight from "../../components/menuRight/MenuRightComponent";
import { Routes, Route } from "react-router-dom";
import RoadmapScreen from "../roadmap/RoadmapScreen";
import CalculatorScreen from "../calculator/CalculatorScreen";
import DocumentsScreen from "../documents/DocumentScreen";

function MainScreen() {
  const heroRef = React.useRef<any>(null);
  const darklayerRef = React.useRef(null);
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
      onMouseMove={(ev) => heroRef.current?.mouseMoving(ev)}
    >
      <MenuRight closeMenu={closeMenu} />
      <div className="top_hide"></div>
      <FixedTop menuClick={openMainMenu} />
      <Announcements />
      <UtilityBar languageClick={openLanguage} />
      <Routes>
        <Route path="/calculator" element={<CalculatorScreen />} />
        <Route path="/documents" element={<DocumentsScreen />} />
        <Route path="/roadmap" element={<RoadmapScreen />} />
        <Route path="/" element={<HeroContainer ref={heroRef} />} />
      </Routes>
      <FixedBot />

      <div className="bottom_hide"></div>
      <div ref={darklayerRef} className="dark_layer"></div>
    </div>
  );
}

export default MainScreen;
