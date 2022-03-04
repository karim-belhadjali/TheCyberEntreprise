import React from "react";
import "./BottomBtnStyle.css";

function BottomBtn({ text }) {
  return (
    <div class="bottom_btn">
      <span className="bottom_button_text">{text}</span>
      <span className="brackets bracket_left_bottom">[</span>
      <span className="brackets bracket_right_bottom">]</span>
    </div>
  );
}

export default BottomBtn;
