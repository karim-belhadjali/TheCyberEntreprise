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
          <div className="bottom_icons button_pdf"></div>
        </div>
        <div className="right_side">
          <div className="bottom_icons button_medium">
            <BottomBtn text="Medium" />
          </div>

          <div className="bottom_icons button_twitter">
            <BottomBtn text="Twitter" />
          </div>
          <div className="bottom_icons button_discord"></div>
          <BottomBtn text="Discord" />
          <div className="bottom_icons button_telegram"></div>
          <BottomBtn text="Telegram" />
        </div>
      </div>
    </div>
  );
}

export default FixedBot;
