import React, { useRef } from "react";
import "./ButtonsContainer.scss";
import uniswapp from "../../../assets/svg/uniswap_yellow.svg";
import uniswap from "../../../assets/svg/uniswap_black.svg";
import { noiseTrigger } from "../../../animations/useTrigger";

function ButtonsContainer({ menuClick }: { menuClick: any }) {
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);

  return (
    <>
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
          <a>
            <span className="image">
              <img src={uniswap} width="100%" height="100%" alt="" />
            </span>
            <span className="text">
              <span className="text_opacity">BUY ON UNISWAP</span>
              <span ref={span1Ref} className="text_p1 absolute">
                BUY ON UNISWAP
              </span>
              <span ref={span2Ref} className="text_p2 absolute">
                BUY ON UNISWAP
              </span>
              <span ref={span3Ref} className="text_p3 absolute">
                BUY ON UNISWAP
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
