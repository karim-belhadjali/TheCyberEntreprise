import React from "react";

import "./PressItemStyle.scss";

function PressItem({ press }: { press: any }) {
  return (
    <div className="pr_box" key={press.title}>
      <div className="pr_content">
        <h1>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {press.title}
          </a>
        </h1>
        <div className="release">{press.release_date}</div>
        <div className="date">{press.date}</div>
        <div className="read_time">
          <span className="dots fast_read"></span>
          {press.read_time}
        </div>
        <div className="text">{press.content}</div>
      </div>

      <div className="line"></div>

      <div className="logo">
        <a href={press.link} target="_blank" rel="noopener noreferrer">
          <img src={require("../../../assets/webp/medium.webp")} alt="" />
        </a>
      </div>
    </div>
  );
}

export default PressItem;
