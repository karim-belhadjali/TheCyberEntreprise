import React, { useEffect } from "react";
import { projectRunAnimation } from "src/animations/documents";

import "./ProjectRunStyle.scss";

function ProjectRun() {
  useEffect(() => {
    projectRunAnimation();
  }, []);
  return (
    <div className="run_container">
      <img
        className="run_env"
        src={require("../../../assets/run/env.png")}
        alt=""
      />
      <img
        className="run_bg"
        src={require("../../../assets/run/bg.png")}
        alt=""
      />
      <img
        className="gold_token gt_1"
        src={require("../../../assets/run/gold_coin.png")}
        alt=""
      />
      <img
        className="gold_token gt_2"
        src={require("../../../assets/run/gold_coin.png")}
        alt=""
      />
      <img
        className="gold_token gt_3"
        src={require("../../../assets/run/gold_coin.png")}
        alt=""
      />
      <img
        className="cyber_token"
        src={require("../../../assets/run/token_c.png")}
        alt=""
      />
      <img
        className="save_point sp_off"
        src={require("../../../assets/run/save_off.png")}
        alt=""
      />
      <img
        className="save_point sp_on"
        src={require("../../../assets/run/save_on.png")}
        alt=""
      />
      <img
        className="run_enemy"
        src={require("../../../assets/run/enemy_sprite.png")}
        alt=""
      />
      <div className="pew pew_1"></div>
      <div className="pew pew_2"></div>
      <div className="pew pew_3"></div>

      <div className="run_cyber run_cyber_click">
        <img
          className="cyber_stand"
          src={require("../../../assets/run/cyber_stand.png")}
          alt=""
        />
        <img
          className="cyber_to_right"
          src={require("../../../assets/run/cyber_1.png")}
          alt=""
        />
        <img
          className="cyber_to_left"
          src={require("../../../assets/run/cyber_2.png")}
          alt=""
        />
        <img
          className="cyber_stairs"
          src={require("../../../assets/run/cyber_stairs.png")}
          alt=""
        />

        <img
          className="gun_to_right"
          src={require("../../../assets/run/shotgun_sprite_1.png")}
          alt=""
        />
        <img
          className="gun_to_left"
          src={require("../../../assets/run/shotgun_sprite_2.png")}
          alt=""
        />
      </div>
    </div>
  );
}

export default ProjectRun;
