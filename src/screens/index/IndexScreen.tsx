import React, { useEffect } from "react";
import { MainPageInfos } from "src/assets/text/InfoTexts";
import Hero from "src/components/HeroContainer/HeroComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import TokenInfo from "src/components/token-info/token-info";
import { useParams } from "react-router-dom";
import { handleUrlLanguage } from "src/utility/globalUtlities";
import "./IndexStyle.scss";

const renderLoader = () => <p>Loading</p>;

function IndexScreen({
  tokenInfoData,
  language,
  urlLanguages,
}: {
  tokenInfoData: any;
  language: any;
  urlLanguages: any;
}) {
  const mainPageText = MainPageInfos;
  const lastElement = (index): boolean => {
    if (mainPageText.information.length - 1 === index) {
      return true;
    } else {
      return false;
    }
  };
  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguage(urlLanguage);
  useEffect(() => {
    urlLanguages(selectedLanguage);
  }, [urlLanguages, selectedLanguage]);
  return (
    <div>
      <Hero />
      <TokenInfo data={tokenInfoData} />
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
