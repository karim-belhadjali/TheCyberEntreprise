import React, { useRef, useEffect, useState } from "react";
import "./ButtonsContainer.scss";
import uniswapp from "../../../assets/svg/uniswap_yellow.svg";
import uniswap from "../../../assets/svg/uniswap_black.svg";
import { noiseTrigger } from "../../../animations/useTrigger";
import { shibaSwapAnimation } from "src/animations/main";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";

function ButtonsContainer(props) {
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);
  useEffect(() => {
    shibaSwapAnimation();
  }, []);
  const [globalText, setglobalText] = useState(EnglishText.Globaltext.Header);
  const [soonClassname, setsoonClassname] = useState(
    "soon noselect spanishSoon"
  );

  useEffect(() => {
    if (props.language === "English") {
      setglobalText(EnglishText.Globaltext.Header);
      setsoonClassname("soon noselect");
    } else if (props.language === "Spanish") {
      setglobalText(SpanishText.Globaltext.Header);
      setsoonClassname("soon noselect spanishSoon");
    }
  }, [globalText, props.language]);

  return (
    <>
      <div className="mob_shibaswap">
        <div className="swap_angle_mob_shiba"></div>
      </div>

      <div className="mob_uniswap">
        <div className="swap_angle_mob_uniswap"></div>
      </div>

      <a
        rel="nofollow noindex noreferrer noopener"
        target="_blank"
        className="mob_shibaswap_link"
      >
        <img
          src={require("../../../assets/png/shibaswap.png")}
          width="50"
          height="50"
          alt="Buy CYBR on ShibaSwap"
        />
      </a>

      <a
        href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x438a6E42813118548C065336844239b63ad4Fcfd&use=V3&chain=mainnet"
        rel="nofollow noindex noreferrer noopener"
        target="_blank"
        className="mob_uniswap_link"
      >
        <img src={uniswap} width="60" height="60" alt="Buy CYBR on Uniswap" />
      </a>

      <div className="shibaswap_buy">
        <div className="disabledhref noselect">
          <img
            src={require("../../../assets/png/shibaswap.png")}
            className="shiba_logo_btn"
            alt="Buy CYBR on ShibaSwap"
          />
          <span className="text shibaswap_text noselect ">
            <span className="text_opacity noselect">SHIBASWAP</span>
            <span className="text_p1 absolute noselect">SHIBASWAP</span>
            <span className="text_p2 absolute noselect">SHIBASWAP</span>
            <span className="text_p3 absolute noselect">SHIBASWAP</span>
          </span>
          <span className={soonClassname}>{globalText.soon}</span>
        </div>
        <div className="swap_angle noselect"></div>
      </div>

      <div className="buttons_container_bg">
        <span>
          <img
            src={uniswapp}
            width="100%"
            height="100%"
            alt="Buy CYBR on Uniswap"
          />
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
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x438a6E42813118548C065336844239b63ad4Fcfd&use=V3&chain=mainnet"
            target="_blank"
            rel="noopener noreferrer"
            className="mob_uniswap_link"
          >
            <span className="image">
              <img
                src={uniswap}
                width="100%"
                height="100%"
                alt="Buy CYBR on Uniswap"
              />
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
        <div onClick={props.menuClick} id="menu_btn" className="menu_btn">
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
