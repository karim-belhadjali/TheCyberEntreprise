import React from "react";
import "./UniswapButtonStyle.css";
import uniswap from "../../../assets/svg/uniswap_black.svg";

function UniSwapButton() {
  return (
    <>
      <div className="uniswap_white"></div>
      <div className="uniswap_btn">
        <span className="image">
          <img src={uniswap} width="100%" height="100%" alt="" />
        </span>
        <span className="text_btn">
          <span className="text_opacity">BUY ON UNISWAP</span>
          <span className="text_p1 absolute">BUY ON UNISWAP</span>
          <span className="text_p2 absolute">BUY ON UNISWAP</span>
          <span className="text_p3 absolute">BUY ON UNISWAP</span>
        </span>
      </div>
    </>
  );
}

export default UniSwapButton;
