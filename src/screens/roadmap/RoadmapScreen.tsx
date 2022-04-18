import * as React from "react";
import { useRef, useEffect } from "react";

import "./RoadmapScreenStyle.scss";

import top_mask_bar from "../../assets/svg/top-mask-bar.svg";
import CybrHand from "src/components/cyber-hand/CyberHandComponent";
import TextContainer from "src/components/textContainer/TextContainerComponent";
import {
  completedLiquidAnim,
  completedTasksEnter,
  completedTasksLeave,
  progressBtnLiquidAnim,
  progressTasksEnter,
  progressTasksLeave,
} from "src/animations/roadmap";

function RoadmapScreen() {
  const completedBtn = useRef<any>();
  const progressBtn = useRef<any>(null);
  const preparationBtn = useRef<any>(null);
  const completedLiquid = useRef<any>(null);
  const progressLiquid = useRef<any>(null);
  const preparationLiquid = useRef<any>(null);
  useEffect(() => {
    completedLiquidAnim(completedBtn.current, completedLiquid.current);
    progressBtnLiquidAnim(progressBtn.current, progressLiquid.current);
    completedLiquidAnim(preparationBtn.current, preparationLiquid.current);
  }, [completedBtn, completedLiquid]);
  return (
    <>
      <div className="roadmap">
        <div className="roadmap_container">
          <div className="roadmap_history">
            <div className="list">
              <h3>Colour Key:</h3>
              <h4
                className="comp rm_btn"
                ref={completedBtn}
                onMouseEnter={() =>
                  completedTasksEnter(
                    progressBtn.current,
                    preparationBtn.current,
                    progressLiquid.current,
                    preparationLiquid.current
                  )
                }
                onMouseLeave={() => {
                  completedTasksLeave(
                    progressBtn.current,
                    preparationBtn.current,
                    progressLiquid.current,
                    preparationLiquid.current
                  );
                }}
              >
                Completed Tasks
              </h4>
              <h4
                className="prog rm_btn"
                ref={progressBtn}
                onMouseEnter={() =>
                  progressTasksEnter(
                    completedBtn.current,
                    preparationBtn.current,
                    completedLiquid.current,
                    preparationLiquid.current
                  )
                }
                onMouseLeave={() => {
                  progressTasksLeave(
                    completedBtn.current,
                    preparationBtn.current,
                    completedLiquid.current,
                    preparationLiquid.current
                  );
                }}
              >
                In Progress
              </h4>
              <h4
                className="prep rm_btn"
                ref={preparationBtn}
                onMouseEnter={() =>
                  completedTasksEnter(
                    progressBtn.current,
                    completedBtn.current,
                    progressLiquid.current,
                    completedLiquid.current
                  )
                }
                onMouseLeave={() => {
                  completedTasksLeave(
                    progressBtn.current,
                    completedBtn.current,
                    progressLiquid.current,
                    completedLiquid.current
                  );
                }}
              >
                In Preparation
              </h4>
            </div>

            <div className="list">
              <h3>Number Key:</h3>
              <h4 className="t1 rm_btn" id="tier1Btn">
                T1: Tier 1 project
              </h4>
              <h4 className="t2 rm_btn" id="tier2Btn">
                T2: Tier 2 project
              </h4>
              <h4 className="t3 rm_btn" id="tier3Btn">
                T3: Tier 3 project
              </h4>
              <h4 className="t4 rm_btn" id="tier4Btn">
                T4: Symbiotic project
              </h4>
            </div>
          </div>

          <div className="roadmap_image">
            <CybrHand
              completedRef={completedLiquid}
              progRef={progressLiquid}
              prepRef={preparationLiquid}
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

      <div className="page_text" itemScope={true}>
        <div className="pt_info">Information</div>

        <div
          className="pt_text"
          itemScope={true}
          itemProp={"mainEntity"}
          itemType="https://schema.org/Question"
        >
          <div className="pt_text_title" itemProp="name">
            Roadmap Meaning
          </div>
          <div
            className="pt_text_container"
            itemScope={true}
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="pt_answer" itemProp="text">
              <p>
                A roadmap is a strategic plan that defines our goals and desired
                outcomes over a period of time and includes the major steps or
                milestones needed to reach it.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt_text"
          itemScope={true}
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div className="pt_text_title" itemProp="name">
            Why is a roadmap important?
          </div>
          <div
            className="pt_text_container"
            itemScope={true}
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="pt_answer" itemProp="text">
              <p>
                When a roadmap is on track it provides clarity to investors what
                the tasks at hand are, as well as provides an estimated time for
                what areas.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt_text"
          itemScope={true}
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div className="pt_text_title" itemProp="name">
            Will a roadmap work?
          </div>
          <div
            className="pt_text_container"
            itemScope={true}
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="pt_answer" itemProp="text">
              <p>
                There are a few key things that a roadmap needs in order for it
                to not only work smoothly, but also work effectively. A roadmap
                without dates, can pose as a threat to investors as uncertainty
                of the execution plan.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadmapScreen;
