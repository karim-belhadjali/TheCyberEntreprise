import React from "react";

import "./MapLegendStyles.scss";

function MapLegend() {
  return (
    <div className="hand_info_border">
      <div className="hand_info_container">
        <div className="hand_title_element">
          <h3>Colour Key:</h3>
          <div className="red_color">In Preparation</div>
          <div className="green_color">Completed Tasks</div>
          <div className="yellow_color">In Progress</div>
        </div>
      </div>
    </div>
  );
}

export default MapLegend;
