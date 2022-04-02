import React from "react";
import ButtonsContainer from "../buttons container/ButtonsContainer";
import Logo from "../logo/LogoComponents";
import "./FixedTopStyle.scss";
function FixedTop({ menuClick }: { menuClick: any }) {
  return (
    <>
      <div className="fixed_top">
        <Logo />
        <ButtonsContainer menuClick={menuClick} />
      </div>
    </>
  );
}

export default FixedTop;
