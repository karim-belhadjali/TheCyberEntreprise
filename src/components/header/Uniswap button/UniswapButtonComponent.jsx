import React from "react";
import "./UniswapButtonStyle.css";
import Image from "react-image-webp";

function UniSwapButton() {
  return (
    <div className="uniswap_btn">
      <span className="image">
        <Image
          src={require("../../../assets/svg/uniswap_black.svg")}
          width="100%"
          height="100%"
          alt=""
        />
      </span>
      <span className="text">
        <span className="text_opacity">BUY ON UNISWAP</span>
        <span className="text_p1 absolute">BUY ON UNISWAP</span>
        <span className="text_p2 absolute">BUY ON UNISWAP</span>
        <span className="text_p3 absolute">BUY ON UNISWAP</span>
      </span>
    </div>
  );
}

export default UniSwapButton;
