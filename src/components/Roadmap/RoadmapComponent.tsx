import React from "react";
import { Grid } from "@mui/material";

import "./RoadmapStyle.scss";

import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
import RoadmapInfo from "./info/RoadmapInfoComponent";
import RoadmapHand from "./handmap/RoadmapHandComponent";
import MapLegend from "./mapLegend/MapLegendComponent";
function Roadmap() {
  return (
    <div className="roadmap">
      <Grid container spacing={2}>
        <Grid item md={7} sm={7} xs={12}>
          <RoadmapInfo />
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <Grid className="progress" container direction="row">
            <Grid item md={5} sm={12} xs={12}>
              <MapLegend />
            </Grid>
            <Grid item md={7} xs={12} className="map">
              <RoadmapHand />
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
