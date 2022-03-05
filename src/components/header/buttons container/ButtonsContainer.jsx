import React from "react";
import "./ButtonsContainer.scss";
import MenuButton from "../menu button/MenuButtonComponent";
import UniSwapButton from "../Uniswap button/UniswapButtonComponent";
import uniswapp from "../../../assets/svg/uniswap_yellow.svg";

function ButtonsContainer() {
  return (
    <>
      <div className="buttons_container_bg">
        <span className="backgtound_svg">
          <img
            className="second_backgtound_svg"
            src={uniswapp}
            width="100%"
            height="100%"
            alt=""
          />
        </span>
      </div>
      <div className="buttons_container">
        <UniSwapButton />
        <MenuButton />
      </div>
    </>
  );
}

export default ButtonsContainer;
