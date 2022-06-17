import React from "react";
import { useState } from "react";

import { PressReleaseInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import PressItem from "src/components/lists/Press_item/PressItemComponent";

import "./PressReleaseScreenStyle.scss";

function PressRelease() {
  const [currentPage, setcurrentPage] = useState(1);
  const pressPerPage = 5;
  const pressReleases = PressReleaseInfos.sections.documents;

  // Logic for displaying todos
  const indexOfLastPress = currentPage * pressPerPage;
  const indexOfFirstPress = indexOfLastPress - pressPerPage;
  const currentPress = pressReleases.slice(indexOfFirstPress, indexOfLastPress);

  // Logic for displaying page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(pressReleases.length / pressPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setcurrentPage(parseInt(event.target.id));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClickPrev = () => {
    if (currentPage > pageNumbers[0]) {
      setcurrentPage(currentPage - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClickNext = () => {
    if (
      currentPage > pageNumbers[Math.ceil(pressReleases.length / pressPerPage)]
    ) {
      setcurrentPage(currentPage + 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClassName = (number): string => {
    if (number === currentPage) {
      return "selected_pag";
    }
    return "not_selected";
  };
  return (
    <div>
      <div className="press_release">
        <div className="press_release_container">
          <div className="pr_title">{PressReleaseInfos.title}</div>
          {currentPress.map((press, index) => {
            return <PressItem key={index} press={press} />;
          })}
          <div className="pagination_container">
            <div onClick={handleClickPrev}>prev</div>
            {pageNumbers.map((number) => {
              return (
                <div
                  key={number}
                  id={number.toString()}
                  onClick={(event) => handleClick(event)}
                  className={handleClassName(number)}
                >
                  {number}
                </div>
              );
            })}
            <div onClick={handleClickNext}>next</div>
          </div>
        </div>
      </div>
      <InfoBox title="" info={PressReleaseInfos.sections.information} />
    </div>
  );
}

export default PressRelease;
