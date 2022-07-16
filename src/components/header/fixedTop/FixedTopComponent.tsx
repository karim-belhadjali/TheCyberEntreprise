import React from "react";
import ButtonsContainer from "../buttons container/ButtonsContainer";
import Logo from "../logo/LogoComponents";
import "./FixedTopStyle.scss";
function FixedTop(props) {
  return (
    <>
      <div className="fixed_top">
        <Logo />
        <ButtonsContainer {...props} />
      </div>
    </>
  );
}

export default FixedTop;
