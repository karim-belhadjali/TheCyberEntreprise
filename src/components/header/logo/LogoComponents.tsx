import React from "react";
import "./LogoStyle.scss";
import Image from "react-image-webp";

function Logo() {
  return (
    <div className="logo">
      <a href="#">
        <Image
          className="logo_first"
          webp={require("../../../assets/webp/logo-part1.webp")}
          width="1"
          height="1"
          alt="not loaded"
        />
        <Image
          className="logo_second"
          webp={require("../../../assets/webp/logo-part2.webp")}
          width="1"
          height="1"
          alt=""
        />
        <Image
          className="logo_text"
          webp={require("../../../assets/webp/cyber_inu_logo_text.webp")}
          width="202"
          height="50"
          alt="The Cyber Inu"
        />
      </a>
    </div>
  );
}

export default Logo;
