import * as React from "react";
import { useRef, useEffect } from "react";

import "./RoadmapScreenStyle.scss";

import {
  completedLiquidAnim,
  preparationBtnLiquidAnim,
  progressBtnLiquidAnim,
} from "src/animations/roadmap";

import top_mask_bar from "../../assets/svg/top-mask-bar.svg";
import CybrHand from "src/components/cyber-hand/CyberHandComponent";
import TextContainer from "src/components/textContainer/TextContainerComponent";
import RoadmapLegend from "src/components/roadmap-legend/RoadmapLegendComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import { RoadmapInfos } from "src/assets/text/InfoTexts";

function RoadmapScreen() {
  const completedBtn = useRef<any>();
  const progressBtn = useRef<any>(null);
  const preparationBtn = useRef<any>(null);

  const completedLiquid = useRef<any>(null);
  const progressLiquid = useRef<any>(null);
  const preparationLiquid = useRef<any>(null);

  const tier1Btn = useRef<any>(null);
  const tier2Btn = useRef<any>(null);
  const tier3Btn = useRef<any>(null);
  const tier4Btn = useRef<any>(null);

  useEffect(() => {
    completedLiquidAnim(completedBtn.current, completedLiquid.current);
    progressBtnLiquidAnim(progressBtn.current, progressLiquid.current);
    preparationBtnLiquidAnim(preparationBtn.current, preparationLiquid.current);
  }, []);

  return (
    <>
      <div className="roadmap">
        <div className="roadmap_container">
          <div className="roadmap_history">
            <RoadmapLegend
              completedBtn={completedBtn}
              progressBtn={progressBtn}
              preparationBtn={preparationBtn}
              completedLiquid={completedLiquid}
              progressLiquid={progressLiquid}
              preparationLiquid={preparationLiquid}
              tier1Btn={tier1Btn}
              tier2Btn={tier2Btn}
              tier3Btn={tier3Btn}
              tier4Btn={tier4Btn}
            />
          </div>

          <div className="roadmap_image">
            <CybrHand
              completedRef={completedLiquid}
              progRef={progressLiquid}
              prepRef={preparationLiquid}
              completedLiquidRef={completedLiquid}
              progressLiquidRef={progressLiquid}
              preparationLiquidRef={preparationLiquid}
            />
          </div>
          <div className="roadmap_text_container">
            <div className="current_quarter">
              <TextContainer>
                <div className="text_container">
                  <div className="title">
                    <span className="quarter">Quarter 2</span>
                    <span className="date">April 1st - June 30th</span>
                    <span className="year">2022</span>
                  </div>
                  <div className="horizontal_sep"></div>
                  <div className="tasks">
                    <div className="task_group">
                      <h3 className="comp">Completed Tasks</h3>
                      <h4 className="t3_item comp_items">
                        <span className="dots completed_dot"></span> T3: New V3
                        Custom Contract
                      </h4>
                      <h4 className="t2_item comp_items">
                        <span className="dots completed_dot"></span> T2:
                        Collected Marketing Data
                      </h4>
                      <h4 className="t1_item comp_items">
                        <span className="dots completed_dot"></span> T1: Banners
                        For Marketing
                      </h4>
                      <h4 className="t1_item comp_items">
                        <span className="dots completed_dot"></span> T1: Old
                        Etherscan Migrated
                      </h4>
                      <h4 className="t1_item comp_items">
                        <span className="dots completed_dot"></span> T1: New
                        Etherscan Updated
                      </h4>
                      <h4 className="t1_item comp_items">
                        <span className="dots completed_dot"></span> T1: Shill
                        Formats
                      </h4>
                    </div>
                    <div className="vertical_sep"></div>
                    <div className="task_group">
                      <h3 className="prog">In Progress</h3>
                      <h4 className="t3_item prog_items">
                        <span className="dots progress_dot"></span> T3: Cyber
                        Swap Locking Contract
                      </h4>
                      <h4 className="t3_item prog_items">
                        <span className="dots progress_dot"></span> T3: Cyber
                        Swap Swapping
                      </h4>
                      <h4 className="t2_item prog_items">
                        <span className="dots progress_dot"></span> T2:
                        Advertising
                      </h4>
                      <h4 className="t2_item prog_items">
                        <span className="dots progress_dot"></span> T2: minigame
                      </h4>
                    </div>
                    <div className="vertical_sep"></div>
                    <div className="task_group">
                      <h3 className="prep">In Preparation</h3>
                      <h4 className="t4_item prep_items">
                        <span className="dots preparation_dot"></span> T4: Cyber
                        Creditors
                      </h4>
                    </div>
                  </div>
                </div>
              </TextContainer>
            </div>

            <div className="next_quarters">
              <div className="quarter_el">
                <div className="title">
                  <span className="quarter">Quarter 3</span>
                  <span className="date">July 1st - August 31st</span>
                  <span className="year">2022</span>
                </div>
                <div className="text">
                  The goal for this quarter is to further improve the user
                  experience whilst on the Cyber Enterprise Website, and provide
                  Cybernators their first NFTs utility.
                </div>
              </div>
              <div className="vertical_sep"></div>
              <div className="quarter_el">
                <div className="title">
                  <span className="quarter">Quarter 4</span>
                  <span className="date">October 1st - December 31st</span>
                  <span className="year">2022</span>
                </div>
                <div className="text">
                  The goal for this quarter is to prioritise the creation of
                  further utilities for Cyber beyond first what was previously
                  created and achieved.
                </div>
              </div>
              <div className="vertical_sep"></div>
              <div className="quarter_el">
                <div className="title">
                  <span className="quarter">Quarter 1</span>
                  <span className="date">January 1st - March 31st</span>
                  <span className="year">2023</span>
                </div>
                <div className="text">
                  The goal for this quarter is to look into registering as a
                  legal entity within the borders of the EU and creating a
                  transnational cooperative.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap_bottom_svg">
          <img src={top_mask_bar} width="1" height="1" alt="" />
        </div>
      </div>

      <InfoBox title="Information" info={RoadmapInfos} />
    </>
  );
}

export default RoadmapScreen;
