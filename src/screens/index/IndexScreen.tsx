import * as React from "react";
import { MainPageInfos } from "src/assets/text/InfoTexts";
import Hero from "src/components/HeroContainer/HeroComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import TokenInfo from "src/components/token-info/token-info";

import "./IndexStyle.scss";

function IndexScreen() {
  const mainPageText = MainPageInfos;

  return (
    <div>
      <Hero />
      <TokenInfo />
      {mainPageText.information.map((section) => {
        return (
          <InfoBox info={section} title={section.title} key={section.title} />
        );
      })}
    </div>
  );
}

export default IndexScreen;
