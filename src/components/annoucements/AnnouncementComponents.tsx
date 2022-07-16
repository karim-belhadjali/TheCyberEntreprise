import React, { useState, useEffect, useRef } from "react";
import "./AnnouncementStyle.scss";
import Anime from "react-animejs-wrapper";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";

function Announcements(props) {
  const annoucementRef = useRef<any>();
  const annoucementSpanRef = useRef<any>();
  const animeRef = useRef<any>();
  const [annoucmentsWidth, setannoucmentsWidth] = useState<any>([0]);
  const [annoucementsSpanWidth, setannoucementsSpanWidth] = useState(0);
  const [annoucementText, setannoucementText] = useState(
    EnglishText.HighlightedTextSVG.announcement
  );

  const handleResize = () => {
    setannoucmentsWidth(annoucementRef.current.offsetWidth);
    setannoucementsSpanWidth(annoucementSpanRef.current.offsetWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    if (props.language === "English") {
      setannoucementText(EnglishText.HighlightedTextSVG.announcement);
    } else if (props.language === "Spanish") {
      setannoucementText(SpanishText.HighlightedTextSVG.announcement);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let speed = 70;
  let loopDuration =
    (annoucementsSpanWidth / speed) * 1000 + (annoucmentsWidth / speed) * 1000;
  return (
    <Anime
      ref={animeRef}
      config={{
        targets: "div.announcements > span",
        easing: "linear",
        loop: true,
        duration: loopDuration,
        translateX: [annoucmentsWidth, "-" + annoucementsSpanWidth],
      }}
    >
      <div
        ref={annoucementRef}
        onMouseEnter={animeRef.current?.pause}
        onMouseLeave={animeRef.current?.play}
        className="announcements"
      >
        <span ref={annoucementSpanRef} className="announcements_text">
          {annoucementText}
        </span>
      </div>
    </Anime>
  );
}

export default Announcements;
