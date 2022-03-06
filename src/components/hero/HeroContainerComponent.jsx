import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./HeroContainerStyle.scss";
import mascotSvg from "../../assets/webp/inu.webp";
import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
const HeroContainer = forwardRef((props, ref) => {
  const [bigFlameLeft, setBigFlameLeft] = useState(0);
  const [bigFlameTop, setBigFlameTop] = useState(0);
  const [smallFlameLeft, setSmallFlameLeft] = useState(0);
  const [smallFlameTop, setSmallFlameTop] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const bigFlameStyle = {
    left: bigFlameLeft + "%",
    top: bigFlameTop + "%",
    opacity
  };
  const smallFlameStyle = {
    left: smallFlameLeft + "%",
    top: smallFlameTop + "%",
    opacity
  };
  const [hiddenFlames, setHiddenFlames] = useState(true);

  var xSize = document.body.clientWidth;
  var halfBodyWidth = xSize / 2;
  var ySize = document.body.clientHeight;
  var halfBodyHeight = ySize / 2;
  useImperativeHandle(ref, () => ({
    mouseMoving(e) {
      if (hiddenFlames) {
        setHiddenFlames(false);
        setOpacity(1);
        //opacity 1
      }
      let xPos = e.clientX;
      let yPos = e.clientY;

      let horizontalPercentageBig = ((xPos / halfBodyWidth) * 100) / 10;
      setBigFlameLeft(-horizontalPercentageBig);

      let verticalPercentageBig = ((yPos / halfBodyHeight) * 100) / 10;
      setBigFlameTop(-verticalPercentageBig);

      let horizontalPercentageSmall = ((xPos / halfBodyWidth) * 100) / 20;
      setSmallFlameLeft(-horizontalPercentageSmall);

      let verticalPercentageSmall = ((yPos / halfBodyHeight) * 100) / 20;
      setSmallFlameTop(-verticalPercentageSmall);
    }
  }));

  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <div className="hero_svg"></div>
          <div className="mascot_svg">
            <img
              className="hero_mascot_img"
              src={mascotSvg}
              width="1"
              height="1"
              alt=""
            />
          </div>

          <div className="hero_main_bg">
            <div className={"flame_small flame"} style={smallFlameStyle}></div>
            <div className={"flame_big flame"} style={bigFlameStyle}></div>
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
      </div>
    </>
  );
});

export default HeroContainer;
