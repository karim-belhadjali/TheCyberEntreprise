import React, { useRef, useEffect, useState } from "react";
import "./LanguageButtonStyle.scss";
import { addBracket, makeTextSpans } from "../../../animations/addBracket";
import { noiseTrigger } from "../../../animations/useTrigger";

function LanguageButton({
  onClick,
  language,
}: {
  onClick: any;
  language: string;
}) {
  const span1Ref = useRef<any>();
  useEffect(() => {
    addBracket(span1Ref.current, "left");
    addBracket(span1Ref.current, "right");
    makeTextSpans(span1Ref.current, language);
  }, [language]);
  return (
    <>
      <div onClick={onClick} className="language">
        <span
          onMouseEnter={() =>
            noiseTrigger(
              span1Ref.current.querySelector("span.indigo_1"),
              span1Ref.current.querySelector("span.indigo_2"),
              span1Ref.current.querySelector("span.indigo_3")
            )
          }
          ref={span1Ref}
          id="language_btn"
          className="language_btn"
        >
          <a>{language}</a>
        </span>
      </div>
      <div className="language_mask"></div>
    </>
  );
}

export default LanguageButton;
