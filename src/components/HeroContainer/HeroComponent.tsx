import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  heroAnimation,
  removeHeroListener,
  resize,
} from "src/animations/heros";
import { HighlightedTextSVG } from "src/assets/text/InfoTexts";

import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";

import "./HeroStyle.scss";

function Hero() {
  const [width, setwidth] = useState<any>(document.body.clientWidth);
  const [height, setheight] = useState<any>(document.body.clientHeight);
  const hero_ref = useRef<any>();

  const heroSceneText = HighlightedTextSVG;

  const handleLinkclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    heroAnimation(hero_ref.current.clientWidth, hero_ref.current.clientHeight);
    window.addEventListener("resize", () =>
      resize(hero_ref.current.clientWidth, hero_ref.current.clientHeight)
    );
    return () => {
      window.removeEventListener("resize", () =>
        resize(hero_ref.current.clientWidth, hero_ref.current.clientHeight)
      );
      removeHeroListener();
    };
  }, [width, height]);
  return (
    <div className="hero" ref={hero_ref}>
      <div className="hero_mobile">
        <div className="mobile_text">
          <div className="mob_speech">
            <div className="mob_fade_background">
              <div className="mob_visible_text">
                <p className="margins">
                  {heroSceneText.mobileVersion[0]}{" "}
                  <span>{heroSceneText.mobileVersion[1]}</span>{" "}
                  {heroSceneText.mobileVersion[2]}
                  <span>{heroSceneText.mobileVersion[3]}</span>
                  {heroSceneText.mobileVersion[4]}
                  <span>{heroSceneText.mobileVersion[5]}</span>
                  {heroSceneText.mobileVersion[6]}
                  <span>{heroSceneText.mobileVersion[7]}</span>
                  {heroSceneText.mobileVersion[8]}{" "}
                  <span>{heroSceneText.mobileVersion[9]}</span>
                  {heroSceneText.mobileVersion[10]}
                  <span>{heroSceneText.mobileVersion[11]}</span>
                  {heroSceneText.mobileVersion[12]}
                </p>
                <p>{heroSceneText.mobileVersion[13]}</p>
              </div>
            </div>
            <div className="mob_corner_top"></div>
            <div className="mob_corner_bottom"></div>
          </div>
        </div>
        <div className="mobile_mascot">
          <img src={require("../../assets/mascot/normal.webp")} alt="" />
        </div>
      </div>

      <div className="hero_container">
        <div className="hero_images">
          <div className="hero_full">
            <img
              src={require("../../assets/main/main/placeholder.webp")}
              height="1"
              width="1"
              alt="hero_full"
            />
          </div>

          <div className="hero_naming"></div>
          <div className="hero_hover"></div>
        </div>

        <div className="speech">
          <div className="fade_background">
            <div className="visible_text">
              <p></p>
            </div>

            <div className="text_container">
              <div className="text_scene_1">
                {heroSceneText.intro.content[0]}
                <span className="colors">{heroSceneText.intro.content[1]}</span>
              </div>

              <div className="text_scene_2">
                {heroSceneText.scene1.content[0]}

                <span className="colors">
                  {heroSceneText.scene1.content[1]}
                </span>
              </div>

              <div className="text_scene_3">
                {heroSceneText.scene2.content[0]}

                <span className="colors">
                  {" "}
                  {heroSceneText.scene2.content[1]}
                </span>
              </div>

              <div className="text_scene_4">
                {heroSceneText.scene3.content[0]}

                <span className="colors">
                  {heroSceneText.scene3.content[1]}
                </span>
              </div>

              <div className="text_scene_5">
                {heroSceneText.scene4.content[0]}

                <span className="colors">
                  {heroSceneText.scene4.content[1]}
                </span>
              </div>
              <div className="text_scene_6">
                {heroSceneText.scene5.content[0]}

                <span className="colors">
                  {heroSceneText.scene5.content[1]}
                </span>
              </div>
              <div className="text_scene_7">
                {heroSceneText.scene6.content[0]}
              </div>
              <div className="text_scene_8">
                {heroSceneText.scene7.content[0]}

                <span className="colors">
                  {heroSceneText.scene7.content[1]}
                </span>
              </div>
              <div className="text_scene_9">
                {heroSceneText.scene8.content[0]}

                <span className="colors">
                  {heroSceneText.scene8.content[1]}
                </span>
              </div>
              <div className="text_scene_10">
                {heroSceneText.scene9.content[0]}

                <span className="colors">
                  {heroSceneText.scene9.content[1]}
                </span>
              </div>
              <div className="text_scene_11">
                {heroSceneText.scene10.content[0]}

                <span className="colors">
                  {heroSceneText.scene10.content[1]}
                </span>
              </div>
              <div className="text_scene_12">
                {heroSceneText.scene11.content[0]}

                <span className="colors">
                  {heroSceneText.scene11.content[1]}
                </span>
              </div>
              <div className="text_scene_13">
                {heroSceneText.scene12.content[0]}

                <span className="colors">
                  {heroSceneText.scene12.content[1]}
                </span>
              </div>
              <div className="text_scene_14">
                {heroSceneText.scene13.content[0]}

                <span className="colors">
                  {heroSceneText.scene13.content[1]}
                </span>
              </div>
              <div className="text_scene_15">
                {heroSceneText.scene14.content[0]}

                <span className="colors">
                  {heroSceneText.scene14.content[1]}
                </span>
              </div>
              <div className="text_scene_16">
                {heroSceneText.scene15.content[0]}

                <span className="colors">
                  {heroSceneText.scene15.content[1]}
                </span>
              </div>
              <div className="text_scene_17">
                {heroSceneText.scene16.content[0]}

                <span className="colors">
                  {heroSceneText.scene16.content[1]}
                </span>
              </div>
              <div className="text_scene_18">
                {heroSceneText.scene17.content[0]}

                <span className="colors">
                  {heroSceneText.scene17.content[1]}
                </span>
              </div>
              <div className="text_scene_19">
                {heroSceneText.scene18.content[0]}

                <span className="colors">
                  {heroSceneText.scene18.content[1]}
                </span>
              </div>
              <div className="text_scene_20">
                {heroSceneText.scene19.content}
              </div>
              <div className="text_scene_21">
                {heroSceneText.scene20.content}
              </div>
              <div className="text_scene_22">
                {heroSceneText.scene21.content}
              </div>
              <div className="text_scene_23">
                {heroSceneText.scene22.content}
              </div>
              <div className="text_scene_24">
                {heroSceneText.scene23.content}
              </div>
            </div>
          </div>
          <div className="corner_top"></div>
          <div className="corner_bottom"></div>

          <div className="continue_button">
            <span className="btn_text_scene_1">
              {heroSceneText.intro.btn_text}
            </span>
            <span className="btn_text_scene_2">
              {heroSceneText.scene1.btn_text}
            </span>
            <span className="btn_text_scene_3">
              {heroSceneText.scene2.btn_text}
            </span>
            <span className="btn_text_scene_4">
              {heroSceneText.scene3.btn_text}
            </span>
            <span className="btn_text_scene_5">
              {heroSceneText.scene4.btn_text}
            </span>
            <span className="btn_text_scene_6">
              {heroSceneText.scene5.btn_text}
            </span>
            <span className="btn_text_scene_7">
              {heroSceneText.scene6.btn_text}
            </span>
            <span className="btn_text_scene_8">
              {heroSceneText.scene7.btn_text}
            </span>
            <span className="btn_text_scene_9">
              {heroSceneText.scene8.btn_text}
            </span>
            <span className="btn_text_scene_10">
              {heroSceneText.scene9.btn_text}
            </span>
            <span className="btn_text_scene_11">
              {heroSceneText.scene10.btn_text}
            </span>
            <span className="btn_text_scene_12">
              {heroSceneText.scene11.btn_text}
            </span>
            <span className="btn_text_scene_13">
              {heroSceneText.scene12.btn_text}
            </span>
            <span className="btn_text_scene_14">
              {heroSceneText.scene13.btn_text}
            </span>
            <span className="btn_text_scene_15">
              {heroSceneText.scene14.btn_text}
            </span>
            <span className="btn_text_scene_16">
              {heroSceneText.scene15.btn_text}
            </span>
            <span className="btn_text_scene_17">
              {heroSceneText.scene16.btn_text}
            </span>
            <span className="btn_text_scene_18">
              {heroSceneText.scene17.btn_text}
            </span>
            <span className="btn_text_scene_19">
              {heroSceneText.scene18.btn_text}{" "}
            </span>
            <span className="btn_text_scene_20">
              {heroSceneText.scene19.btn_text}
            </span>
            <span className="btn_text_scene_21">
              {heroSceneText.scene20.btn_text}
            </span>
            <span className="btn_text_scene_22">
              {heroSceneText.scene21.btn_text}
            </span>
            <span className="btn_text_scene_23">
              {heroSceneText.scene22.btn_text}
            </span>
          </div>

          <div className="end_button join_button">
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x438a6E42813118548C065336844239b63ad4Fcfd&use=V3&chain=mainnet"
              target="_blank"
              rel="noopener noreferrer"
            >
              {heroSceneText.scene23.btn_text1}
            </a>
          </div>

          <div className="end_button informed_button">
            <div>
              <Link to={"/en/documents.html"} onClick={handleLinkclick}>
                {heroSceneText.scene23.btn_text2}
              </Link>
            </div>
          </div>
        </div>

        <div className="mascot_images">
          <img
            src={require("../../assets/mascot/placeholder.webp")}
            width="1"
            height="1"
            alt=""
          />
        </div>

        <div className="hero_main_bg">
          <div className="flame_small"></div>
          <div className="flame_big"></div>
        </div>
      </div>
      <div className="hero_bottom_svg">
        <img
          className="bottom_hero_bottom_svg"
          src={hero_bottom_svg}
          width="1"
          height="1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
