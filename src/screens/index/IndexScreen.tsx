import * as React from "react";
import { MainPageInfos } from "src/assets/text/InfoTexts";
import Hero from "src/components/HeroContainer/HeroComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import TokenInfo from "src/components/token-info/token-info";

import "./IndexStyle.scss";

function IndexScreen() {
  const mainPageText = MainPageInfos;
  const lastElement = (index): boolean => {
    if (mainPageText.information.length - 1 == index) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <Hero />
      <TokenInfo />
      {mainPageText.information.map((section, index) => {
        return (
          <InfoBox
            info={section}
            title={section.title}
            key={section.title}
            last={lastElement(index)}
          />
        );
      })}
    </div>
  );
}

export default IndexScreen;
