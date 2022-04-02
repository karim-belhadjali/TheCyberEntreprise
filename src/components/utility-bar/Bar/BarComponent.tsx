import React from "react";
import "./BarStyle.scss";

function Bar({ text }: { text: string }) {
  return <span className="bar">{text}</span>;
}

export default Bar;