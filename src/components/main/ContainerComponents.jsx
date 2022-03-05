import React from "react";
import Announcements from "../annoucements/AnnouncementComponents";
import HeroContainer from "../hero/HeroContainerComponent";
import UtilityBar from "../utility-bar/UtilityBarComponent";
import "./ContainerStyle.scss";

function Container() {
  return (
    <div className="container">
      <Announcements />
      <UtilityBar />
      <HeroContainer />
    </div>
  );
}

export default Container;
