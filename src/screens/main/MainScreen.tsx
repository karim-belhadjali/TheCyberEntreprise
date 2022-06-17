import React, { useState, useEffect } from "react";

import Announcements from "../../components/annoucements/AnnouncementComponents";
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
import PressRelease from "../press release/PressReleaseScreen";
import TeamScreen from "../team/TeamScreen";

import IndexScreen from "../index/IndexScreen";
import { mockedData } from "src/data/CybrApidData";

function MainScreen() {
  const heroRef = React.useRef<any>(null);
  const darklayerRef = React.useRef(null);
  const [isMenu, setisMenu] = useState(false);
  const [language, setlanguage] = useState("English");
  const [utilityBarData, setutilityBarData] = useState<any>({});
  const [documentsData, setdocumentsData] = useState<any>({});
  const [calculatorData, setcalculatorData] = useState<any>({});

  const openMainMenu = () => {
    setisMenu(true);
    showDarkLayer(darklayerRef.current, showMainmenu);
  };
  const openLanguage = () => {
    setisMenu(false);
    showDarkLayer(darklayerRef.current, showLanguageMenu);
  };

  const languageSelection = (language: string) => {
    setlanguage(language);
    closeMenu();
  };

  const closeMenu = () => {
    isMenu
      ? close_main_menu_right(darklayerRef.current)
      : close_language_menu_right(darklayerRef.current);
  };

  const handleCybrApi = () => {
    let utilityData = {
      ethPrice: mockedData.ethPrice,
      usdPrice: mockedData.usdPrice,
      difference24: mockedData.difference24,
      totalLiquidity: mockedData.totalLiquidity,
      holders: mockedData.holders,
      pooledCybr: mockedData.pooledCybr,
      pooledWeth: mockedData.pooledWeth,
      circulatingSupply: mockedData.circulatingSupplyFormated,
    };
    let documentsData = {
      botBanned: mockedData.botsBanned,
      circulatingSupply: mockedData.circulatingSupply,
    };
    let calculatorData = {
      circulatingSupply: mockedData.circulatingSupply,
      usdPrice: mockedData.usdPrice,
    };
    setdocumentsData(documentsData);
    setutilityBarData(utilityData);
    setcalculatorData(calculatorData);
  };

  useEffect(() => {
    document.title = "The Cyber Enterprise";
    handleCybrApi();
  }, []);

  return (
    <div
      className="container"
      onMouseMove={(ev) => heroRef.current?.mouseMoving(ev)}
    >
      <MenuRight closeMenu={closeMenu} languageselection={languageSelection} />
      <div className="top_hide"></div>
      <FixedTop menuClick={openMainMenu} />
      <Announcements />
      <UtilityBar
        language={language}
        languageClick={openLanguage}
        data={utilityBarData}
      />
      <Routes>
        <Route
          path="/calculator"
          element={<CalculatorScreen data={calculatorData} />}
        />
        <Route
          path="/documents"
          element={<DocumentsScreen data={documentsData} />}
        />
        <Route path="/press" element={<PressRelease />} />
        <Route path="/roadmap" element={<RoadmapScreen />} />
        <Route path="/team" element={<TeamScreen />} />
        <Route path="/" element={<IndexScreen />} />
      </Routes>
      <FixedBot />

      <div className="bottom_hide"></div>
      <div ref={darklayerRef} className="dark_layer" onClick={closeMenu}></div>
    </div>
  );
}

export default MainScreen;
