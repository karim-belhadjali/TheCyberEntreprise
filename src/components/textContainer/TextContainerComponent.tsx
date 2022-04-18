import React from "react";

import "./TextContainerStyle.scss";

function TextContainer({ children }: { children: any }) {
  return (
    <div className="about_project">
      <div className="fade_background">{children}</div>
      <div className="corner_top"></div>
      <div className="corner_bottom"></div>
    </div>
  );
}

export default TextContainer;
