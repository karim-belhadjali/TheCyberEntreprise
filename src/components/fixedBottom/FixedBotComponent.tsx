import React, { useEffect } from "react";
import "./FixedBotStyle.scss";
import fixed_bot_svg from "../../assets/svg/bottom-mask-bar.svg";
import BottomBtn from "./bottom button/BottomBtnComponent";
import { fixedBotAnimation } from "src/animations/fixedBot";

function FixedBot() {
  useEffect(() => {
    fixedBotAnimation();
  }, []);
  return (
    <div className="fixed_bot">
      <div className="fixed_bot_svg">
        <img
          className="imageBot"
          src={fixed_bot_svg}
          width="1"
          height="1"
          alt=""
        />
      </div>
      <div className="fixed_bot_container">
        <div className="right_side">
          <div className="bottom_btn">
            <a
              href="https://thecyberenterprise.medium.com/"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              medium
            </a>
          </div>

          <div className="bottom_btn">
            <a
              href=" https://twitter.com/CybrEnterprise"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              twitter
            </a>
          </div>

          <div className="bottom_btn">
            <a
              href="https://t.me/TheCyberEnterprise"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              telegram
            </a>
          </div>

          <div className="bottom_btn">
            <a
              href=" https://discord.gg/thecyberenterprise"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              discord
            </a>
          </div>

          <div className="bottom_icons button_medium">
            <a
              href="https://thecyberenterprise.medium.com/"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              medium
            </a>
          </div>

          <div className="bottom_icons button_twitter">
            <a
              href="https://twitter.com/CybrEnterprise"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              twitter
            </a>
          </div>

          <div className="bottom_icons button_telegram">
            <a
              href="https://t.me/TheCyberEnterprise"
              target="_blank"
              rel="nofollow noindex noreferrer noopener"
            >
              telegram
            </a>
          </div>

          <div className="bottom_icons button_discord">
            <a
              href=" https://discord.gg/thecyberenterprise"
              target="_blank"
              rel="noopener noreferrer "
            >
              discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedBot;
