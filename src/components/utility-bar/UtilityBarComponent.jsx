import React, { useState, useEffect, useRef } from "react";
import Bar from "./Bar/BarComponent";
import LanguageButton from "./language-selection/LanguageButtonComponent";
import "./UtilityBarStyle.scss";
import Anime from "react-animejs-wrapper";

function UtilityBar({ languageClick }) {
  const utilityRef = useRef(null);
  const utilitySpanRef = useRef(null);
  const animeRef = useRef(null);
  const [utilityWidth, setutilityWidth] = useState(0);
  const [utilitySpanWidth, setutilitySpanWidth] = useState(0);

  useEffect(() => {
    setutilityWidth(utilityRef.current.offsetWidth);
    setutilitySpanWidth(utilitySpanRef.current.offsetWidth);
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
      <div className="utility_bar">
        <div ref={utilityRef} className="info_bar">
          <div ref={utilitySpanRef} className="bar_container">
            <Bar text="Price in ETH: 0.0000000000002419" />
            <Bar text="Price in USD: $0.0000000009154" />
            <Bar text="Last 24h change: 0.86%" />
            <Bar text="Total liquidity: $267,160.25" />
            <Bar text="Daily volume: $6,460.24" />
            <Bar text="Pooled CYBR: 145,925,290,251,841.84" />
          </div>
        </div>
        <LanguageButton onClick={languageClick} />
      </div>
    </Anime>
  );
}

export default UtilityBar;
