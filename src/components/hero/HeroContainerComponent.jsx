import React from "react";
import "./HeroContainerStyle.scss";
import mascotSvg from "../../assets/webp/inu.webp";
import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
function HeroContainer() {
  return (
    <>
      <div class="hero">
        <div class="hero_container">
          <div class="hero_svg"></div>
          <div class="mascot_svg">
            <img
              className="hero_mascot_img"
              src={mascotSvg}
              width="1"
              height="1"
              alt=""
            />
          </div>

          <div class="hero_main_bg">
            <div class="flame_small"></div>
            <div class="flame_big"></div>
          </div>

          <div class="hero_bottom_svg">
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
