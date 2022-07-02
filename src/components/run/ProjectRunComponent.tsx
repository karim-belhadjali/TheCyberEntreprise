import React, { useEffect, useState } from "react";
import { projectRunAnimation } from "src/animations/documents";
import useScript from "src/hooks/useScript";

import "./ProjectRunStyle.scss";

function Run() {
  const [width, setwidth] = useState<any>(document.body.clientWidth);
  const [height, setheight] = useState<any>(document.body.clientHeight);

  const handleResize = () => {
    setwidth(document.body.clientWidth);
    setheight(document.body.clientHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    projectRunAnimation(width, height);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);
  useEffect(() => {}, []);
  return (
    <div className="run_container">
      <div className="run_env"></div>
      <div className="run_bg"></div>
      <div className="gold_token gt_1"></div>
      <div className="gold_token gt_2"></div>
      <div className="gold_token gt_3"></div>
      <div className="cyber_token"></div>
      <div className="save_point sp_off"></div>
      <div className="save_point sp_on"></div>
      <div className="run_enemy"></div>

      <div className="pew pew_1"></div>
      <div className="pew pew_2"></div>
      <div className="pew pew_3"></div>

      <div className="run_cyber run_cyber_click">
        <div className="cyber_stand"></div>
        <div className="cyber_to_right"></div>
        <div className="cyber_to_left"></div>
        <div className="cyber_stairs"></div>

        <div className="gun_to_right"></div>
        <div className="gun_to_left"></div>
      </div>
    </div>
  );
}

export default Run;
