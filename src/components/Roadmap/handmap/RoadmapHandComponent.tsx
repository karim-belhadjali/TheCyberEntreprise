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
    <Grid container direction="column" spacing={2}>
      <div ref={logoGridRef}>
        <Grid item md={2} sm={2} xs={12}>
          <img
            ref={logoItemRef}
            src={logo_cybr}
            className="cyber_logo"
            alt=""
          />
        </Grid>
      </div>
      <Grid item md="auto" sm="auto" xs={12}>
        <img src={hand_cybr} className="cyber_hand" alt="" />
      </Grid>
    </Grid>
  );
}

export default RoadmapHand;
