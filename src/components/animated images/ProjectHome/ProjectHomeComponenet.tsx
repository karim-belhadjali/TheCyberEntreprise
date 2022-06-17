import React, { useEffect } from "react";
import { projectHomeAnimation } from "src/animations/documents";

import "./ProjectHomeStyle.scss";

function ProjectHome() {
  useEffect(() => {
    projectHomeAnimation();
  }, []);
  return (
    <div className="image_container_phome">
      <div className="phome_container">
        <img
          src={require("../../../assets/p_home/arm.webp")}
          className="on_mill"
          alt=""
        />
        <img
          src={require("../../../assets/p_home/leg.webp")}
          className="on_mill"
          alt=""
        />

        <img
          src={require("../../../assets/p_home/factory.webp")}
          className="factory"
          alt=""
        />
        <img
          src={require("../../../assets/p_home/mill.webp")}
          className="mill"
          alt=""
        />

        <img
          src={require("../../../assets/p_home/light_main.webp")}
          className="light light_main"
          alt=""
        />
        <img
          src={require("../../../assets/p_home/light_1.webp")}
          className="light light_1"
          alt=""
        />
        <img
          src={require("../../../assets/p_home/light_2.webp")}
          className="light light_2"
          alt=""
        />
        <img
          src={require("../../../assets/p_home/light_3.webp")}
          className="light light_3"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProjectHome;
