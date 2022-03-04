import React from "react";
import "./LanguageButtonStyle.css";

function LanguageButton() {
  return (
    <>
      <div class="language">
        <span id="language_btn" class="language_btn">
          <span className="language-text">English</span>
          <span className="bracket_left">[</span>
          <span className="bracket_right">]</span>
        </span>
      </div>
      <div class="language_mask"></div>
    </>
  );
}

export default LanguageButton;
