import React from "react";
import Announcements from "../annoucements/AnnouncementComponents";
import HeroContainer from "../hero/HeroContainerComponent";
import UtilityBar from "../utility-bar/UtilityBarComponent";
import TokenInfo from "../token-info/token-info";
import "./ContainerStyle.scss";

function Container() {
  return (
    <div className="container">
      <Announcements />
      <UtilityBar />
      <HeroContainer />
      <TokenInfo></TokenInfo>
    </div>
  );
}

export default Container;
