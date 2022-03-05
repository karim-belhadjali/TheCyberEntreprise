import React from "react";
import ButtonsContainer from "../buttons container/ButtonsContainer";
import Logo from "../logo/LogoComponents";
import "./FixedTopStyle.scss";
function FixedTop() {
  return (
    <>
      <div className="fixed_top">
        <Logo />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default FixedTop;
