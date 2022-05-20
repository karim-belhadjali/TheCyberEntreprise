import * as React from "react";
import { inuAnimationEnter, inuAnimationLeave } from "src/animations/documents";

import "./CybrInyImageStyle.scss";

function CybrInu() {
  const inuBaseRef = React.useRef<any>();
  return (
    <div>
      <img
        src={require("../../../assets/inu/base.png")}
        width="340"
        height="202"
        className="inu_base"
        alt=""
        ref={inuBaseRef}
      />
      <img
        src={require("../../../assets/inu/inu.webp")}
        className="inu_face"
        alt=""
      />
      <div
        className="inu_hover"
        onMouseEnter={() => inuAnimationEnter(inuBaseRef.current)}
        onMouseLeave={() => inuAnimationLeave(inuBaseRef.current)}
      ></div>
    </div>
  );
}

export default CybrInu;
