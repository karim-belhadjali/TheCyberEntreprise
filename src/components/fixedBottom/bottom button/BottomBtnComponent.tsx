import React, { useRef, useState } from "react";
import { noiseTrigger } from "../../../hooks/useTrigger";
import "./BottomBtnStyle.scss";

function BottomBtn({ text }: { text: string }) {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const [breacketsDistance, setBracketDistance] = useState(0);

  return (
    <div
      className="bottom_btn"
      onMouseEnter={() => {
        noiseTrigger(textRef1.current, textRef2.current, textRef3.current);
        setBracketDistance(12);
      }}
      onMouseLeave={() => {
        setBracketDistance(0);
      }}
    >
      <a href="">
        <span className="bottom_button_text indigo indigo_1" ref={textRef1}>
          {text}
        </span>
        <span className="bottom_button_text indigo indigo_2" ref={textRef2}>
          {text}
        </span>
        <span className="bottom_button_text indigo indigo_3" ref={textRef3}>
          {text}
        </span>
        <span
          className="brackets_bottom bracket_left_bottom"
          style={{ left: breacketsDistance + "px" }}
        >
          [
        </span>
        <span
          className="brackets_bottom bracket_right_bottom"
          style={{ right: breacketsDistance + "px" }}
        >
          ]
        </span>
      </a>
    </div>
  );
}

export default BottomBtn;
