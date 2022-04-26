import * as React from "react";
import { useRef, useEffect } from "react";

import { floatLogo } from "src/animations/roadmap";

import roadmap_hand from "../../assets/webp/roadmap_hand.webp";
import roadmap_token from "../../assets/webp/roadmap_token.webp";

import "./CyberHandStyle.scss";
function CybrHand({
  completedRef,
  progRef,
  prepRef,
  completedLiquidRef,
  progressLiquidRef,
  preparationLiquidRef,
}: {
  completedRef: any;
  progRef: any;
  prepRef: any;
  completedLiquidRef: any;
  progressLiquidRef: any;
  preparationLiquidRef: any;
}) {
  const token = useRef<any>(null);

  useEffect(() => {
    floatLogo(token.current);
  }, [
    completedRef,
    progRef,
    prepRef,
    completedLiquidRef,
    progressLiquidRef,
    preparationLiquidRef,
  ]);

  return (
    <>
      <div className="hand">
        <img
          src={roadmap_hand}
          className="noselect"
          width="0"
          height="0"
          alt=""
        />
        <div className="inner_comp" ref={completedRef}></div>
        <div className="inner_prog" ref={progRef}></div>
        <div className="inner_prep" ref={prepRef}></div>
      </div>
      <div className="token" ref={token}>
        <img
          src={roadmap_token}
          className="noselect"
          width="0"
          height="0"
          alt=""
        />
      </div>
    </>
  );
}

export default CybrHand;
