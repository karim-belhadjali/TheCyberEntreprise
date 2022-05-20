import React from "react";
import { PressReleaseInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import PressItem from "src/components/lists/Press_item/PressItemComponent";

import "./PressReleaseScreenStyle.scss";

function PressRelease() {
  return (
    <div>
      <div className="press_release">
        <div className="press_release_container">
          <div className="pr_title">{PressReleaseInfos.title}</div>
          {PressReleaseInfos.sections.documents.map((press) => {
            return <PressItem press={press} />;
          })}
        </div>
      </div>
      <InfoBox title="" info={PressReleaseInfos.sections.information} />
    </div>
  );
}

export default PressRelease;
