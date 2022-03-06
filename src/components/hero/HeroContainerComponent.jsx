import React from "react";
import "./HeroContainerStyle.scss";
import mascotSvg from "../../assets/webp/inu.webp";
import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
function HeroContainer() {
  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <div className="hero_svg"></div>
          <div className="mascot_svg">
            <img
              className="hero_mascot_img"
              src={mascotSvg}
              width="1"
              height="1"
              alt=""
            />
          </div>

          <div className="hero_main_bg">
            <div className="flame_small"></div>
            <div className="flame_big"></div>
          </div>

          <div className="hero_bottom_svg">
            <img
              className="bottom_hero_bottom_svg"
              src={hero_bottom_svg}
              width="1"
              height="auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroContainer;
