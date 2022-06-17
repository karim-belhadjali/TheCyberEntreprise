import React, { useState, useEffect, useRef } from "react";
import Bar from "./Bar/BarComponent";
import LanguageButton from "./language-selection/LanguageButtonComponent";
import "./UtilityBarStyle.scss";
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

  const handleResize = () => {
    setutilityWidth(utilityRef.current.offsetWidth);
    setutilitySpanWidth(utilitySpanRef.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div
        onMouseEnter={animeRef.current?.pause}
        onMouseLeave={animeRef.current?.play}
        className="utility_bar"
      >
        <div ref={utilityRef} className="info_bar">
          <div ref={utilitySpanRef} className="bar_container">
            <Bar text={"Price in ETH: " + data.ethPrice} />
            <Bar text={"Price in USD: " + data.usdPrice} />
            <Bar text={"Last 24h change: " + data.difference24 + "%"} />
            <Bar text={"Total liquidity: $" + data.totalLiquidity} />
            <Bar text={"Holders: " + data.holders} />
            <Bar text={"Pooled CYBR: " + data.pooledCybr} />
            <Bar text={"Circulating Supply: " + data.circulatingSupply} />
          </div>
        </div>
        <LanguageButton language={language} onClick={languageClick} />
      </div>
    </Anime>
  );
}

export default UtilityBar;
