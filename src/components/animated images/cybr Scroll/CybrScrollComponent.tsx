import React, { useRef } from "react";
import {
  diamondLeftAnimationEnter,
  diamondLeftAnimationLeave,
  diamondRightAnimationEnter,
  diamondRightAnimationLeave,
  scrollSignatureAnimation,
  stampActivation,
} from "src/animations/documents";

import "./CybrScrollStyle.scss";

function CybrScroll({ botbanned }: { botbanned: string }) {
  const stampBtnRef = useRef<any>();
  const scrollStampRef = useRef<any>();
  const scrollSignatureRef = useRef<any>();
  const scrollContractRef = useRef<any>();
  const scrollContractOverflowRef = useRef<any>();
  const scrollContractImageRef = useRef<any>();
  const scrollContractImageEmptyRef = useRef<any>();
  const scrollDataRef = useRef<any>();
  const scrollBlueLeftRef = useRef<any>();
  const scrollBlueRightRef = useRef<any>();

  return (
    <div>
      <div className="scroll_gray_background"></div>
      <div className="scroll_blue_left" ref={scrollBlueLeftRef}></div>
      <div className="scroll_blue_right" ref={scrollBlueRightRef}></div>
      <img
        src={require("../../../assets/scroll/scroll_top.webp")}
        width="340"
        height="260"
        className="main_scroll"
        alt=""
      />

      <div className="scroll_contract" ref={scrollContractRef}>
        <div
          className="scroll_contract_overflow"
          ref={scrollContractOverflowRef}
        >
          <img
            src={require("../../../assets/scroll/scroll_contract.webp")}
            width="148"
            height="196"
            className="scroll_contract_image"
            ref={scrollContractImageRef}
            alt=""
          />
          <img
            src={require("../../../assets/scroll/scroll_contract_empty.webp")}
            className="scroll_contract_image_empty"
            ref={scrollContractImageEmptyRef}
            alt=""
          />
          <div className="scroll_data" ref={scrollDataRef}>
            <span className="title">Bots defeated</span>
            <span className="number">{botbanned}</span>
          </div>
        </div>
        <div
          className="stamp_button point_cursor"
          ref={stampBtnRef}
          onClick={() =>
            stampActivation(stampBtnRef.current, scrollStampRef.current)
          }
        ></div>
        <div
          className="scroll_signature_click point_cursor"
          ref={scrollSignatureRef}
          onClick={() =>
            scrollSignatureAnimation(
              scrollSignatureRef.current,
              stampBtnRef.current,
              scrollStampRef.current,
              scrollContractRef.current,
              scrollContractOverflowRef.current,
              scrollContractImageRef.current,
              scrollContractImageEmptyRef.current,
              scrollDataRef.current
            )
          }
        ></div>
        <img
          src={require("../../../assets/scroll/scroll_bottom_wood.webp")}
          alt=""
          className="scroll_wood"
        />
      </div>

      <img
        src={require("../../../assets/scroll/scroll_stamp.webp")}
        className="scroll_stamp"
        ref={scrollStampRef}
        alt=""
      />

      <div
        className="diamond_left"
        onMouseEnter={() =>
          diamondLeftAnimationEnter(scrollBlueLeftRef.current)
        }
        onMouseLeave={() =>
          diamondLeftAnimationLeave(scrollBlueLeftRef.current)
        }
      ></div>
      <div
        className="diamond_right"
        onMouseEnter={() =>
          diamondRightAnimationEnter(scrollBlueRightRef.current)
        }
        onMouseLeave={() =>
          diamondRightAnimationLeave(scrollBlueRightRef.current)
        }
      ></div>
    </div>
  );
}

export default CybrScroll;
