import React, { useRef } from "react";
import { animateLogo } from "src/animations/main";
import "./LogoStyle.scss";

function Logo() {
  const interior_eye = useRef<any>();

  return (
    <>
      <div className="logo">
        <a href="https://thecyberenterprise.com/" id="logo_link">
          <img
            src={require("../../../assets/webp/anim_eye_x2.webp")}
            width="62"
            height="50"
            alt="The Cyber Enterprise"
          />
          <img
            src={require("../../../assets/webp/anim_eye_interior_x2.webp")}
            className="interior_eye"
            ref={interior_eye}
            onMouseEnter={() => animateLogo(interior_eye.current)}
            width="25"
            height="25"
            alt=""
          />
        </a>
      </div>
      <div className="logo_text">
        <a href="https://thecyberenterprise.com/">TheCyberEnterprise.com</a>
      </div>
    </>
  );
}

export default Logo;
