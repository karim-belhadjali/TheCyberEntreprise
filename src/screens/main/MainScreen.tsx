import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  showLanguageMenu,
  showDarkLayer,
  close_language_menu_right,
  close_main_menu_right,
  showMainmenu,
} from "../../animations/menu_right";
import "./MainScreenStyle.scss";

import { mockedData } from "src/data/CybrApidData";
import { getCybrTokenInfo } from "src/api/CurrencyApi";
import MenuRight from "src/components/menuRight/MenuRightComponent";
import FixedTop from "src/components/header/fixedTop/FixedTopComponent";
import Announcements from "src/components/annoucements/AnnouncementComponents";
import UtilityBar from "src/components/utility-bar/UtilityBarComponent";
import FixedBot from "src/components/fixedBottom/FixedBotComponent";
import CalculatorScreen from "../calculator/CalculatorScreen";
import DocumentsScreen from "../documents/DocumentScreen";
import PressRelease from "../press release/PressReleaseScreen";
import RoadmapScreen from "../roadmap/RoadmapScreen";
import TeamScreen from "../team/TeamScreen";
import IndexScreen from "../index/IndexScreen";
import { browserName } from "react-device-detect";

// const Announcements = lazy(
//   () => import("../../components/annoucements/AnnouncementComponents")
// );
// const UtilityBar = lazy(
//   () => import("../../components/utility-bar/UtilityBarComponent")
// );
// const FixedTop = lazy(
//   () => import("../../components/header/fixedTop/FixedTopComponent")
// );
// const FixedBot = lazy(
//   () => import("../../components/fixedBottom/FixedBotComponent")
// );
// const MenuRight = lazy(
//   () => import("../../components/menuRight/MenuRightComponent")
// );
// const RoadmapScreen = lazy(() => import("../roadmap/RoadmapScreen"));
// const CalculatorScreen = lazy(() => import("../calculator/CalculatorScreen"));
// const DocumentsScreen = lazy(() => import("../documents/DocumentScreen"));
// const PressRelease = lazy(() => import("../press release/PressReleaseScreen"));
// const TeamScreen = lazy(() => import("../team/TeamScreen"));
// const IndexScreen = lazy(() => import("../index/IndexScreen"));

function MainScreen() {
  const heroRef = React.useRef<any>(null);
  const darklayerRef = React.useRef(null);
  const [isMenu, setisMenu] = useState(false);
  const [language, setlanguage] = useState("English");
  const [utilityBarData, setutilityBarData] = useState<any>({});
  const [tokenInfoData, settokenInfoData] = useState<any>({});
  const [documentsData, setdocumentsData] = useState<any>({});
  const [calculatorData, setcalculatorData] = useState<any>({});
  const [isSafari, setisSafari] = useState<Boolean>(false);

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const closeMenuDarkLayer = () => {
    isMenu
      ? close_main_menu_right(darklayerRef.current)
      : close_language_menu_right(darklayerRef.current);
  };

  const handleCybrApi = () => {
    let documentsData = {
      botBanned: mockedData.botsBanned,
      circulatingSupply: mockedData.circulatingSupply,
    };
    let calculatorData = {
      circulatingSupply: mockedData.circulatingSupply,
      usdPrice: mockedData.usdPrice,
    };
    setdocumentsData(documentsData);
    setcalculatorData(calculatorData);
  };

  const handleCybrInfo = async () => {
    let trend = mockedData.trend === "increase" ? "+" : "-";
    var utilityData = {
      ethPrice: mockedData.ethPrice,
      usdPrice: mockedData.usdPrice,
      difference24: mockedData.difference24,
      totalLiquidity: mockedData.totalLiquidity,
      holders: mockedData.holders,
      pooledCybr: mockedData.pooledCybr,
      pooledWeth: mockedData.pooledWeth,
      circulatingSupply: mockedData.circulatingSupplyFormated,
      circulatingSupplynotFormated: mockedData.circulatingSupply,
      burnedAmmount: mockedData.burnedAmmount,
      totalTransactions: mockedData.totalTransactions,
      donationReceived: mockedData.donationReceived,
      donationSpent: mockedData.donationSpent,
      donationAvailable: mockedData.donationAvailable,
      trend: trend,
    };

    var tokenInfoData = {
      circulatingSupply: mockedData.circulatingSupply,
      burnedAmmount: mockedData.burnedAmmount,
      pooledCybr: mockedData.pooledCybr,
      donationReceived: mockedData.donationReceived,
    };
    settokenInfoData(tokenInfoData);
    setutilityBarData(utilityData);
    const response = await getCybrTokenInfo();

    if (response) {
      let trend = response.trend === "increase" ? "+" : "-";

      utilityData = {
        ethPrice: response.ethPrice,
        usdPrice: response.usdPrice,
        difference24: response.difference24,
        totalLiquidity: response.totalLiquidity,
        holders: response.holders,
        pooledCybr: response.pooledCybr,
        pooledWeth: response.pooledWeth,
        circulatingSupply: response.circulatingSupplyFormated,
        circulatingSupplynotFormated: response.circulatingSupply,
        burnedAmmount: response.burnedAmmount,
        totalTransactions: response.totalTransactions,
        donationReceived: response.donationReceived,
        donationSpent: response.donationSpent,
        donationAvailable: response.donationAvailable,
        trend: trend,
      };
      tokenInfoData = {
        circulatingSupply: response.circulatingSupply,
        burnedAmmount: response.burnedAmmount,
        pooledCybr: response.pooledCybr,
        donationReceived: response.donationReceived,
      };
      settokenInfoData(tokenInfoData);
      setutilityBarData(utilityData);
    }
  };
  const handleUrlLanguage = (language) => {
    setlanguage(language);
  };
  const handleSafariBrowser = (browserName: string) => {
    if (browserName === "Safari") {
      setisSafari(true);
    }
  };
  useEffect(() => {
    handleCybrApi();
    handleCybrInfo();
    handleSafariBrowser(browserName);
  }, []);

  return (
    <div>
      {!isSafari && (
        <div className="container">
          <MenuRight
            closeMenu={closeMenu}
            languageselection={languageSelection}
            language={language}
          />
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
              path="/:urlLanguage/cyber-calculator.html"
              element={
                <CalculatorScreen
                  data={calculatorData}
                  language={language}
                  urlLanguages={(language) => handleUrlLanguage(language)}
                />
              }
            />
            <Route
              path="/:urlLanguage/documents.html"
              element={
                <DocumentsScreen
                  data={documentsData}
                  language={language}
                  urlLanguages={(language) => handleUrlLanguage(language)}
                />
              }
            />
            <Route
              path="/:urlLanguage/press-release/"
              element={
                <PressRelease
                  language={language}
                  urlLanguages={(language) => handleUrlLanguage(language)}
                />
              }
            >
              <Route
                path={":page" + ".html"}
                element={
                  <PressRelease
                    language={language}
                    urlLanguages={(language) => handleUrlLanguage(language)}
                  />
                }
              />
            </Route>
            <Route
              path="/:urlLanguage/roadmap.html"
              element={
                <RoadmapScreen
                  language={language}
                  urlLanguages={(language) => handleUrlLanguage(language)}
                />
              }
            />
            <Route
              path="/:urlLanguage/team.html"
              element={
                <TeamScreen
                  language={language}
                  urlLanguages={(language) => handleUrlLanguage(language)}
                />
              }
            />
            <Route
              path="/:urlLanguage/"
              element={
                <IndexScreen
                  tokenInfoData={tokenInfoData}
                  language={language}
                  urlLanguages={(language) => handleUrlLanguage(language)}
                />
              }
            />
            <Route path="*" element={<Navigate to="/en/" />} />
          </Routes>
          <FixedBot />

          <div className="bottom_hide"></div>
          <div
            ref={darklayerRef}
            className="dark_layer"
            onClick={closeMenuDarkLayer}
          ></div>
        </div>
      )}
      {isSafari && (
        <div className="saf_container">
          <div className="saf_title"> Safari Browser Detected </div>
          <div className="saf_text">
            {" "}
            The technologies used to build our website are not yet supported by
            Safari Browser.{" "}
          </div>
          <div className="saf_text2">
            {" "}
            Please download some other browser of your choice.{" "}
          </div>
          <div className="saf_links">
            <a href="https://www.google.com/intl/en_en/chrome/">
              Google Chrome
            </a>
            <a href="https://www.mozilla.org/en-US/firefox/new/">
              Mozilla Firefox
            </a>
            <a href="https://www.opera.com/download">Opera</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainScreen;
