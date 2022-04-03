import React from "react";
import InfoSection from "./info section/InfoSectionComponent";

import "./RoadmapInfoStyle.scss";

function RoadmapInfo() {
  return (
    <div className="roadmap_info">
      <h2>Roadmap</h2>
      <InfoSection
        title="Number Key"
        values={[
          "T1: Tier 1 project",
          "T2: Tier 2 project",
          "T3: Tier 3 project",
          "T4: Tier 4 symbiotic project",
        ]}
      />

      <div className="tasks_wrapper">
        <InfoSection title="In Preparation" values={["T4: Cyber Creditors"]} />
        <InfoSection
          title="In Progress"
          values={[
            "T3: Cyber Swap Locking Contract",
            "T3: Cyber Swap Swapping",
            "T2: Advertising",
          ]}
        />
        <InfoSection
          title="Completed Tasks"
          values={[
            "T3: New V3 Custom Contract",
            "T2: Collected Marketing Data",
            "T1: Banners For Marketing",
            "T1: Old Etherscan Migrated",
            "T1: New Etherscan Updated",
            "T1: Shill Formats",
          ]}
        />
      </div>
    </div>
  );
}

export default RoadmapInfo;
