import React from "react";

import "./PressItemStyle.scss";

function PressItem({ press }: { press: any }) {
  const dotsClassname = (): string => {
    switch (press.box_color) {
      case "Green": {
        return "dots fast_read";
      }
      case "Orange": {
        return "dots medium_read";
      }
      case "Red": {
        return "dots long_read";
      }
      default: {
        return "dots fast_read";
      }
    }
  };
  return (
    <div className="pr_box" key={press.title}>
      <div className="pr_content">
        <h1>
          <a href={press.link} target="_blank" rel="noopener noreferrer">
            {press.title}
          </a>
        </h1>
        <div className="release">{press.release_date}</div>
        <div className="date">{press.date}</div>
        <div className="read_time">
          <span className={dotsClassname()}></span>
          {press.read_time}
        </div>
        <div className="text">{press.content}</div>
      </div>

      <div className="line"></div>

      <div className="logos">
        <a href={press.link} target="_blank" rel="noopener noreferrer">
          <img src={require("../../../assets/png/medium.png")} alt="" />
        </a>
      </div>
    </div>
  );
}

export default PressItem;
