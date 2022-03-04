import React from "react";
import Announcements from "../annoucements/AnnouncementComponents";
import FixedBot from "../fixedBottom/FixedBotComponent";
import UtilityBar from "../utility-bar/UtilityBarComponent";
import "./ContainerStyle.css";

function Container() {
  return (
    <div className="container">
      <Announcements />
      <UtilityBar />
      <FixedBot />
    </div>
  );
}

export default Container;
