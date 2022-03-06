import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Announcements from "../annoucements/AnnouncementComponents";
import HeroContainer from "../hero/HeroContainerComponent";
import UtilityBar from "../utility-bar/UtilityBarComponent";
import TokenInfo from "../token-info/token-info";
import "./ContainerStyle.scss";

function Container() {
  const hero = React.useRef(null);

  return (
    <div className="container" onMouseMove={ev => hero.current.mouseMoving(ev)}>
      <Announcements />
      <UtilityBar />
      <HeroContainer ref={hero} />
      <TokenInfo></TokenInfo>
    </div>
  );
}

export default Container;
