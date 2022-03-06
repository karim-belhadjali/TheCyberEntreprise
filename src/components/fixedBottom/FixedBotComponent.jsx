import React from "react";
import "./FixedBotStyle.scss";
import fixed_bot_svg from "../../assets/svg/bottom-mask-bar.svg";
import BottomBtn from "./bottom button/BottomBtnComponent";

function FixedBot() {
  return (
    <div className="fixed_bot">
      <div className="fixed_bot_svg">
        <img
          className="imageBot"
          src={fixed_bot_svg}
          width="1"
          height="auto"
          alt=""
        />
      </div>
      <div className="fixed_bot_container">
        <div className="left_side">
          <BottomBtn text="Origins" />
          <BottomBtn text="about" />
          <BottomBtn text="Cyber Paper" />
        </div>
        <div className="right_side">
          <BottomBtn text="Discord" />
          <BottomBtn text="Telegram" />
        </div>
      </div>
    </div>
  );
}

export default FixedBot;
