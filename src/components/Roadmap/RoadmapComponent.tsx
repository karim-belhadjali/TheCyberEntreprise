import React, { useState, useEffect, useRef } from "react";
import Anime from "react-animejs-wrapper";
import { Grid } from "@mui/material";

import "./RoadmapStyle.scss";
import logo_cybr from "../../assets/png/cyberLogo.png";
import hand_cybr from "../../assets/png/cybrHand.png";
import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
import { floatLogo } from "../../animations/roadmap";
function Roadmap() {
  const logoGridRef = useRef<any>();
  const logoItemRef = useRef<any>();

  const [logoGridWidth, setlogoGridWidth] = useState(0);
  const [logoItemWidth, setlogoItemWidth] = useState(0);

  useEffect(() => {
    setlogoGridWidth(logoGridRef.current.offsetWidth);
    setlogoItemWidth(logoItemRef.current.offsetWidth);
    if (logoGridWidth !== 0) {
      floatLogo(logoItemRef.current, logoItemWidth, logoGridWidth);
    }
  }, [logoGridWidth, logoItemWidth]);

  return (
    <div className="roadmap">
      <Grid container spacing={2}>
        <Grid item md={7} sm={7} xs={12}>
          <div className="rules">
            <h3>Competition Rules:</h3>

            <p>
              1. Followers who enter the competition will only be able to
              participate for that week. They will not be able to participate in
              the following weeks.
            </p>
            <p>
              2. Each week, the shiller count will be set to Zero to ensure that
              everyone shilling during that specific week will have an equal
              chance to win. Remember, each invite is one extra chance to win.
            </p>
            <p>
              3. There will be a special NFT prize at the end of week 3 ,
              Cybernator-0182, for all shillers that have participated over the
              course of the event (Yes, you heard us, all shillers counts from
              week 1 - week 3 will be taken into consideration).
            </p>

            <p className="note">
              Note: All winners will be chosen completely at random
            </p>
          </div>
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <Grid container direction="row">
            <Grid item md={5} xs={12}>
              <div className="hand_info_border">
                <div className="hand_info_container">
                  <div className="hand_title_element">
                    <h3>Colour Key:</h3>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={7} xs={12}>
              <div className="rules">
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
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
  );
}

export default Roadmap;
