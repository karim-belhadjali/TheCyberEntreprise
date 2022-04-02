import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { noiseTrigger } from "../../../animations/useTrigger";
import "./SideBtnStyle.scss";
import {
  changeBackgroundToNormal,
  changeBackgroundToWhite,
} from "../../../animations/menu_right";

function SideBtn({
  text,
  link,
  onClick,
}: {
  text: string;
  link: string;
  onClick: any;
}) {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const [breacketsDistance, setBracketDistance] = useState(0);

  return (
    <div
      ref={mainRef}
      className="btn"
      onMouseEnter={() => {
        setBracketDistance(19);
        changeBackgroundToWhite(mainRef.current);
      }}
      onMouseLeave={() => {
        noiseTrigger(textRef1.current, textRef2.current, textRef3.current);
        setBracketDistance(0);
        changeBackgroundToNormal(mainRef.current);
      }}
    >
      <Link onClick={onClick} to={link} className="indigo-container">
        <span
          className="brackets bracket_left_bottom"
          style={{ left: breacketsDistance + "px" }}
        >
          [
        </span>
        <span className="indigo indigo_1" ref={textRef1}>
          {text}
        </span>
        <span className="indigo indigo_2" ref={textRef2}>
          {text}
        </span>
        <span className="indigo indigo_3" ref={textRef3}>
          {text}
        </span>

        <span
          className="brackets bracket_right_bottom"
          style={{ right: breacketsDistance + "px" }}
        >
          ]
        </span>
      </Link>
    </div>
  );
}

export default SideBtn;
