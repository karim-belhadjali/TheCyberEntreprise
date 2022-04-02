import { Grid } from "@mui/material";
import React from "react";
import InfoSection from "./info section/InfoSectionComponent";

import "./RoadmapInfoStyle.scss";

function RoadmapInfo() {
  return (
    <div className="roadmap_info">
      <h2>Roadmap</h2>
      <Grid
        container
        flexWrap="wrap"
        flexDirection="row"
        rowSpacing={4}
        spacing={1}
      >
        <Grid item md={12} sm={12} xs={12}>
          <InfoSection
            title="Number Key"
            values={[
              "T1: Tier 1 project",
              "T2: Tier 2 project",
              "T3: Tier 3 project",
              "T4: Tier 4 symbiotic project",
            ]}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <InfoSection
            title="In Preparation"
            values={["T4: Cyber Creditors"]}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <InfoSection
            title="In Progress"
            values={[
              "T3: Cyber Swap Locking Contract",
              "T3: Cyber Swap Swapping",
              "T2: Advertising",
            ]}
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default RoadmapInfo;
