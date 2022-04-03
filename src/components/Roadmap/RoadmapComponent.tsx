import React from "react";
import "./RoadmapStyle.scss";

import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
import RoadmapInfo from "./info/RoadmapInfoComponent";
import RoadmapHand from "./handmap/RoadmapHandComponent";
import MapLegend from "./mapLegend/MapLegendComponent";
function Roadmap() {
  return (
    <>
      <div className="roadmap_container">
        <div className="roadmap">
          <div className="roadmap_info">
            <RoadmapInfo />
          </div>
          <div className="roadmap_legend">
            <div className="progress">
              <MapLegend />
            </div>
            <div className="map">
              <RoadmapHand />
            </div>
          </div>
        </div>
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
    </>
  );
}

export default Roadmap;
