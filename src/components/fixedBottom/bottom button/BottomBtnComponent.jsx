import React, { useRef } from "react";
import { noiseTrigger } from "../../../hooks/useTrigger";
import "./BottomBtnStyle.scss";

function BottomBtn({ text }) {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  return (
    <div
      className="bottom_btn"
      onMouseEnter={() =>
        noiseTrigger(textRef1.current, textRef2.current, textRef3.current)
      }
    >
      <span className="bottom_button_text" ref={textRef1}>
        {text}
      </span>
      <span className="bottom_icons" ref={textRef2}>
        {text}
      </span>
      <span className="bottom_icons" ref={textRef3}>
        {text}
      </span>

      <span className="brackets_bottom bracket_left_bottom">[</span>
      <span className="brackets_bottom bracket_right_bottom">]</span>
    </div>
  );
}

export default BottomBtn;
