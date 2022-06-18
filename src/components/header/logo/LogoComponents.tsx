import React, { useRef } from "react";
import { animateLogo } from "src/animations/main";
import { Link } from "react-router-dom";

import "./LogoStyle.scss";

function Logo() {
  const interior_eye = useRef<any>();

  const handleRedirect = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="logo">
        <div className="link_logo">
          <Link onClick={handleRedirect} to={"/"} id="logo_link">
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
          </Link>
        </div>
      </div>
      <div className="logo_text">
        <div className="link_text">
          <Link to={"/"} className="website">
            TheCyberEnterprise
          </Link>
        </div>
        <div className="link_text">
          <Link to={"/"} className="slogan">
            DeFine our Future
          </Link>
        </div>
      </div>
    </>
  );
}

export default Logo;
