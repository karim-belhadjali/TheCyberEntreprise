import React from "react";
import Bar from "./Bar/BarComponent";
import LanguageButton from "./language-selection/LanguageButtonComponent";
import "./UtilityBarStyle.scss";

function UtilityBar() {
  return (
    <div class="utility_bar">
      <div class="info_bar">
        <div class="bar_container">
          <Bar text="Price in ETH: 0.0000000000002419" />
          <Bar text="Price in USD: $0.0000000009154" />
          <Bar text="Last 24h change: 0.86%" />
          <Bar text="Total liquidity: $267,160.25" />
          <Bar text="Daily volume: $6,460.24" />
          <Bar text="Pooled CYBR: 145,925,290,251,841.84" />
        </div>
      </div>
      <LanguageButton />
    </div>
  );
}

export default UtilityBar;
