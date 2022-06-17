import React, { useRef, useEffect } from "react";
import "./ButtonsContainer.scss";
import uniswapp from "../../../assets/svg/uniswap_yellow.svg";
import uniswap from "../../../assets/svg/uniswap_black.svg";
import { noiseTrigger } from "../../../animations/useTrigger";
import { shibaSwapAnimation } from "src/animations/main";

function ButtonsContainer({ menuClick }: { menuClick: any }) {
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);
  useEffect(() => {
    shibaSwapAnimation();
  }, []);

  return (
    <>
      <div className="mob_shibaswap">
        <div className="swap_angle_mob_shiba"></div>
      </div>

      <div className="mob_uniswap">
        <div className="swap_angle_mob_uniswap"></div>
      </div>

      <a
        href="https://shibaswap.com/#/"
        rel="nofollow noindex noopener"
        className="mob_shibaswap_link"
      >
        <img
          src={require("../../../assets/png/shibaswap.png")}
          width="50"
          height="50"
          alt=""
        />
      </a>

      <a
        href="https://app.uniswap.org/#/swap?chain=mainnet"
        rel="nofollow noindex noopener"
        className="mob_uniswap_link"
      >
        <img src={uniswap} width="60" height="60" alt="" />
      </a>

      <div className="shibaswap_buy">
        <a href="#shiba" target="_blank" rel="nofollow noindex noopener">
          <img
            src={require("../../../assets/png/shibaswap.png")}
            className="shiba_logo_btn"
            alt=""
          />
          <span className="text shibaswap_text">
            <span className="text_opacity">SHIBASWAP</span>
            <span className="text_p1 absolute">SHIBASWAP</span>
            <span className="text_p2 absolute">SHIBASWAP</span>
            <span className="text_p3 absolute">SHIBASWAP</span>
          </span>
          <span className="soon">soon</span>
        </a>
        <div className="swap_angle"></div>
      </div>

      <div className="buttons_container_bg">
        <span>
          <img src={uniswapp} width="100%" height="100%" alt="" />
        </span>
      </div>
      <div className="buttons_container">
        <div
          onMouseEnter={() =>
            noiseTrigger(span1Ref.current, span2Ref.current, span3Ref.current)
          }
          className="uniswap_btn"
        >
          <a
            href="https://app.uniswap.org/#/swap?chain=mainnet"
            target="_blank"
            rel="noopener noreferrer"
            className="mob_uniswap_link"
          >
            <span className="image">
              <img src={uniswap} width="100%" height="100%" alt="" />
            </span>
            <span className="text">
              <span className="text_opacity">UNISWAP</span>
              <span ref={span1Ref} className="text_p1 absolute">
                UNISWAP
              </span>
              <span ref={span2Ref} className="text_p2 absolute">
                UNISWAP
              </span>
              <span ref={span3Ref} className="text_p3 absolute">
                UNISWAP
              </span>
            </span>
          </a>
        </div>
        <div onClick={menuClick} id="menu_btn" className="menu_btn">
          <span className="btn"> MENU </span>
          <span className="loading_container">
            <span className="load1"></span>
            <span className="load2"></span>
            <span className="load3"></span>
            <span className="load4"></span>
            <span className="load5"></span>
          </span>
        </div>
        <div className="uniswap_white"></div>
      </div>
    </>
  );
}

export default ButtonsContainer;
