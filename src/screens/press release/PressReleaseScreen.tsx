import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PressReleaseInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import PressItem from "src/components/lists/Press_item/PressItemComponent";
import { handleUrlLanguages } from "src/utility/globalUtlities";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";

import "./PressReleaseScreenStyle.scss";

function PressRelease({
  language,
  urlLanguages,
  setcurrentScreen,
  ...othersProps
}: {
  language: any;
  urlLanguages: any;
  setcurrentScreen: any;
}) {
  setcurrentScreen("press");

  const [PressRelaseText, setPressRelaseText] = useState(
    EnglishText.PressReleaseInfos
  );

  const [currentPage, setcurrentPage] = useState<any>(1);
  const pressPerPage = 5;
  const pressReleases = PressRelaseText.sections.documents;

  const { page } = useParams();
  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguages(urlLanguage);

  let indexOfLastPress;
  let indexOfFirstPress;
  let currentPress;
  let firstRender = false;
  if (page) {
    indexOfLastPress = parseInt(page) * pressPerPage;
    indexOfFirstPress = indexOfLastPress - pressPerPage;
    currentPress = pressReleases.slice(indexOfFirstPress, indexOfLastPress);
  } else {
    indexOfLastPress = currentPage * pressPerPage;
    indexOfFirstPress = indexOfLastPress - pressPerPage;
    currentPress = pressReleases.slice(indexOfFirstPress, indexOfLastPress);
  }

  // Logic for displaying page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(pressReleases.length / pressPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginationClassName = (number): string => {
    if (firstRender === false) {
      if (page && number === parseInt(page)) {
        firstRender = true;
        return "selected_pag";
      } else if (!page && number === currentPage) {
        firstRender = true;
        return "selected_pag";
      }
    } else if (number === currentPage) {
      return "selected_pag";
    }

    return "not_selected";
  };

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setcurrentPage(parseInt(event.target.id));
  };
  const handleClickPrev = () => {
    setcurrentPage(currentPage - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClickNext = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setcurrentPage(currentPage + 1);
  };

  const handlePrevClassName = (): string => {
    if (currentPage === pageNumbers[0]) {
      return "hide";
    }
    return "";
  };
  const handleNextClassName = (): string => {
    if (currentPage === Math.ceil(pressReleases.length / pressPerPage)) {
      return "hide";
    }
    return "";
  };

  useEffect(() => {
    if (selectedLanguage !== language) {
      urlLanguages(selectedLanguage);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (language === "English") {
      setPressRelaseText(EnglishText.PressReleaseInfos);
    } else if (language === "Spanish") {
      setPressRelaseText(SpanishText.PressReleaseInfos);
    }
  }, [PressRelaseText, language]);

  return (
    <div>
      <div className="press_release">
        <div className="press_release_container">
          <div className="pr_title">{PressRelaseText.title}</div>
          <div className="pagination_container">
            <div className={handlePrevClassName()} onClick={handleClickPrev}>
              {PressRelaseText.global.perv}
            </div>
            {pageNumbers.map((number) => {
              return (
                <div
                  key={number}
                  id={number.toString()}
                  onClick={(event) => handleClick(event)}
                  className={handlePaginationClassName(number)}
                >
                  {number}
                </div>
              );
            })}
            <div className={handleNextClassName()} onClick={handleClickNext}>
              {PressRelaseText.global.next}
            </div>
          </div>
          {currentPress.map((press, index) => {
            return <PressItem key={index} press={press} />;
          })}
          <div className="pagination_container">
            <div className={handlePrevClassName()} onClick={handleClickPrev}>
              {PressRelaseText.global.perv}
            </div>
            {pageNumbers.map((number) => {
              return (
                <div
                  key={number}
                  id={number.toString()}
                  onClick={(event) => handleClick(event)}
                  className={handlePaginationClassName(number)}
                >
                  {number}
                </div>
              );
            })}
            <div className={handleNextClassName()} onClick={handleClickNext}>
              {PressRelaseText.global.next}
            </div>
          </div>
        </div>
      </div>
      <InfoBox
        title=""
        info={PressRelaseText.sections.information}
        last={true}
      />
    </div>
  );
}

export default PressRelease;
