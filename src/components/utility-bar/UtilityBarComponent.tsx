import React, { useState, useEffect, useRef } from "react";
import Bar from "./Bar/BarComponent";
import LanguageButton from "./language-selection/LanguageButtonComponent";
import "./UtilityBarStyle.scss";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";
import Anime from "react-animejs-wrapper";

function UtilityBar({
  languageClick,
  language,
  data,
}: {
  languageClick: any;
  language: any;
  data: any;
}) {
  const utilityRef = useRef<any>();
  const utilitySpanRef = useRef<any>();
  const animeRef = useRef<any>(null);
  const [utilityWidth, setutilityWidth] = useState(0);
  const [utilitySpanWidth, setutilitySpanWidth] = useState(0);
  const [utilityText, setutilityText] = useState(
    EnglishText.Globaltext.Cybr_token_info
  );

  const handleResize = () => {
    setutilityWidth(utilityRef.current.offsetWidth);
    setutilitySpanWidth(utilitySpanRef.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (language === "English") {
      setutilityText(EnglishText.Globaltext.Cybr_token_info);
    } else if (language === "Spanish") {
      setutilityText(SpanishText.Globaltext.Cybr_token_info);
    }
  }, [language]);

  let speed = 70; // pixels per second
  let loopDuration =
    (utilitySpanWidth / speed) * 1000 - (utilityWidth / speed) * 1000;
  let maxTranslate = utilityWidth - utilitySpanWidth;

  const utilityAnim = {
    targets: "div.info_bar > div",
    easing: "linear",
    loop: true,
    duration: loopDuration,
    direction: "alternate",
    translateX: [0, maxTranslate],
  };
  return (
    <Anime ref={animeRef} config={utilityAnim}>
      <div className="utility_bar">
        <div
          ref={utilityRef}
          onMouseEnter={animeRef.current?.pause}
          onMouseLeave={animeRef.current?.play}
          className="info_bar"
        >
          <div ref={utilitySpanRef} className="bar_container">
            <Bar text={utilityText.Price_in_ETH + " " + data.ethPrice} />
            <Bar text={utilityText.Price_in_USD + " " + data.usdPrice} />
            <Bar
              text={
                utilityText.Last_24h_Change +
                " " +
                data.trend +
                data.difference24 +
                " % "
              }
            />
            <Bar
              text={utilityText.Total_Liquidity + " $" + data.totalLiquidity}
            />
            <Bar text={utilityText.Holders + " " + data.holders} />
            <Bar text={utilityText.Pooled_Eth + " " + data.pooledWeth} />
            <Bar text={utilityText.Pooled_CYBR + " " + data.pooledCybr} />
            <Bar
              text={
                utilityText.Circulating_Supply + " " + data.circulatingSupply
              }
            />
            <Bar text={utilityText.Burned_CYBR + " " + data.burnedAmmount} />
            <Bar
              text={
                utilityText.Total_Transactions + " " + data.totalTransactions
              }
            />
            <Bar
              text={
                utilityText.Donations_Received + " " + data.donationReceived
              }
            />
            <Bar
              text={utilityText.Donations_Spent + " " + data.donationSpent}
            />
            <Bar
              text={
                utilityText.Donations_Available + " " + data.donationAvailable
              }
            />
          </div>
        </div>
        <LanguageButton language={language} onClick={languageClick} />
      </div>
    </Anime>
  );
}

export default UtilityBar;
