import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PressReleaseInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import PressItem from "src/components/lists/Press_item/PressItemComponent";
import { handleUrlLanguage } from "src/utility/globalUtlities";

import "./PressReleaseScreenStyle.scss";

function PressRelease({
  language,
  urlLanguages,
  ...othersProps
}: {
  language: any;
  urlLanguages: any;
}) {
  const [currentPage, setcurrentPage] = useState<any>(1);
  const pressPerPage = 5;
  const pressReleases = PressReleaseInfos.sections.documents;

  const { page } = useParams();
  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguage(urlLanguage);

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
    urlLanguages(selectedLanguage);
  }, []);

  return (
    <div>
      <div className="press_release">
        <div className="press_release_container">
          <div className="pr_title">{PressReleaseInfos.title}</div>
          <div className="pagination_container">
            <div className={handlePrevClassName()} onClick={handleClickPrev}>
              prev
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
              next
            </div>
          </div>
          {currentPress.map((press, index) => {
            return <PressItem key={index} press={press} />;
          })}
          <div className="pagination_container">
            <div className={handlePrevClassName()} onClick={handleClickPrev}>
              prev
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
              next
            </div>
          </div>
        </div>
      </div>
      <InfoBox
        title=""
        info={PressReleaseInfos.sections.information}
        last={true}
      />
    </div>
  );
}

export default PressRelease;
