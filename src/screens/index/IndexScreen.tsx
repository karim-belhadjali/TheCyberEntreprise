import React, { useEffect, useState } from "react";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";
import Hero from "src/components/HeroContainer/HeroComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import TokenInfo from "src/components/token-info/token-info";
import { useParams } from "react-router-dom";
import { handleUrlLanguages } from "src/utility/globalUtlities";
import "./IndexStyle.scss";

const renderLoader = () => <p>Loading</p>;

function IndexScreen({
  tokenInfoData,
  language,
  urlLanguages,
  setcurrentScreen,
}: {
  tokenInfoData: any;
  language: any;
  urlLanguages: any;
  setcurrentScreen: any;
}) {
  const [mainPageText, setmainPageText] = useState<any>(EnglishText);
  const [reload, setreload] = useState(false);

  setcurrentScreen("home");

  const lastElement = (index): boolean => {
    if (mainPageText?.MainPageInfos.information.length - 1 === index) {
      return true;
    } else {
      return false;
    }
  };
  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguages(urlLanguage);

  useEffect(() => {
    if (language === "English") {
      setmainPageText(EnglishText);
    } else if (language === "Spanish") {
      setmainPageText(SpanishText);
    }
  }, [mainPageText, language]);

  useEffect(() => {
    if (selectedLanguage !== language) {
      urlLanguages(selectedLanguage);
      setreload(!reload);
    }
  }, [selectedLanguage]);

  return (
    <div>
      <Hero key={reload} data={mainPageText?.HighlightedTextSVG} />
      <TokenInfo globalData={mainPageText.Globaltext} data={tokenInfoData} />
      {mainPageText?.MainPageInfos.information.map((section, index) => {
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
