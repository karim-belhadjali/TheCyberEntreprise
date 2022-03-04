import React from "react";
import "./ButtonsContainer.css";
import Image from "react-image-webp";
import MenuButton from "../menu button/MenuButtonComponent";
import UniSwapButton from "../Uniswap button/UniswapButtonComponent";

function ButtonsContainer() {
  return (
    <>
      <div class="buttons_container_bg">
        <span>
          <img
            src={require("../../../assets/svg/uniswap_yellow.svg")}
            width="100%"
            height="100%"
            alt=""
          />
        </span>
      </div>
      <div className="buttons_container">
        <UniSwapButton />
        <MenuButton />
        <div className="uniswap_white"></div>
      </div>
    </>
  );
}

export default ButtonsContainer;
