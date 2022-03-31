import React, { useState, useEffect, useRef } from "react";
import Anime from "react-animejs-wrapper";
import { Grid } from '@mui/material';

import "./RoadmapStyle.scss";
import logo_cybr from '../../assets/png/cyberLogo.png'
import hand_cybr from '../../assets/png/cybrHand.png'
function Roadmap() {
  const logoGridRef = useRef(null);
  const logoItemRef = useRef(null);

  const [logoGridWidth, setlogoGridWidth] = useState(0);
  const [logoItemWidth, setlogoItemWidth] = useState(0);

  useEffect(() => {
    setlogoGridWidth(logoGridRef.current.offsetWidth);
    setlogoItemWidth(logoItemRef.current.offsetWidth);
  }, [logoGridWidth, logoItemWidth]);



  return (
    <div class="roadmap">
      <Grid container columns={12} spacing={2}>
        <Grid item xs={7}>
          <div class="rules">
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

            <p class="note">
              Note: All winners will be chosen completely at random
            </p>
          </div>

        </Grid>
        <Grid item xs={5}>
          <Grid container direction="row">
            <Grid item xs={5}>
              <div className="hand_info_border">
                <div className="hand_info_container">
                  <div class="hand_title_element">
                    <h3>Colour Key:</h3>
                  </div>
                </div>
              </div>

            </Grid>
            <Grid item xs={7}>
              <div className="rules">
                <Grid container direction="column" spacing={2}>
                  <div ref={logoGridRef}>
                    <Grid item xs={3}>
                      <img ref={logoItemRef} src={logo_cybr} className="cyber_logo" alt="" />
                    </Grid>
                  </div>
                  <Grid item md="auto" >
                    <img src={hand_cybr} className="cyber_hand" alt="" />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Roadmap;
