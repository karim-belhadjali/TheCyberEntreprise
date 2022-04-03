import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@mui/material";

import "./RoadmapHandStyle.scss";
import { floatLogo } from "../../../animations/roadmap";
import logo_cybr from "../../../assets/png/cyberLogo.png";
import hand_cybr from "../../../assets/png/cybrHand.png";

function RoadmapHand() {
  const logoGridRef = useRef<any>();
  const logoItemRef = useRef<any>();

  const [logoGridHeight, setlogoGridHeight] = useState(0);
  const [logoItemHeight, setlogoItemHeight] = useState(0);

  useEffect(() => {
    setlogoGridHeight(logoGridRef.current?.offsetWidth);
    setlogoItemHeight(logoItemRef.current?.offsetWidth);
    if (logoGridHeight !== 0) {
      floatLogo(logoItemRef.current, logoItemHeight, logoGridHeight);
    }
  }, [logoGridHeight, logoItemHeight]);
  return (
    <div className="hand_wrapper">
      <div ref={logoGridRef} className="logo_wrapper">
        <img ref={logoItemRef} src={logo_cybr} className="cyber_logo" alt="" />
      </div>
      <img src={hand_cybr} className="cyber_hand" alt="" />
    </div>
  );
}

export default RoadmapHand;
