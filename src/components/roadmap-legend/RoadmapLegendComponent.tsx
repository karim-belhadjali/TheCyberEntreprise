import React from "react";
import {
  completedTasksEnter,
  completedTasksLeave,
  prepTasksEnter,
  prepTasksLeave,
  progressTasksEnter,
  progressTasksLeave,
  tier1TasksEnter,
  tier1TasksLeave,
  tier2TasksEnter,
  tier2TasksLeave,
  tier3TasksEnter,
  tier3TasksLeave,
  tier4TasksEnter,
  tier4TasksLeave,
} from "src/animations/roadmap";

function RoadmapLegend({
  completedBtn,
  progressBtn,
  preparationBtn,
  completedLiquid,
  progressLiquid,
  preparationLiquid,
  tier1Btn,
  tier2Btn,
  tier3Btn,
  tier4Btn,
}: {
  completedBtn: any;
  progressBtn: any;
  preparationBtn: any;
  completedLiquid: any;
  progressLiquid: any;
  preparationLiquid: any;
  tier1Btn: any;
  tier2Btn: any;
  tier3Btn: any;
  tier4Btn: any;
}) {
  return (
    <>
      <div className="list">
        <h3>Colour Key:</h3>

        {/*  Completed Tasks  */}
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

        {/*  In Progress  */}
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

        {/*  In Preparation  */}
        <h4
          className="prep rm_btn"
          ref={preparationBtn}
          onMouseEnter={() =>
            prepTasksEnter(
              progressBtn.current,
              completedBtn.current,
              progressLiquid.current,
              completedLiquid.current
            )
          }
          onMouseLeave={() => {
            prepTasksLeave(
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

        {/*   T1: Tier 1 project  */}
        <h4
          className="t1 rm_btn"
          ref={tier1Btn}
          onMouseEnter={() => tier1TasksEnter(tier2Btn, tier3Btn, tier4Btn)}
          onMouseLeave={() => tier1TasksLeave(tier2Btn, tier3Btn, tier4Btn)}
        >
          T1: Tier 1 project
        </h4>

        {/*   T2: Tier 2 project  */}
        <h4
          className="t2 rm_btn"
          ref={tier2Btn}
          onMouseEnter={() => tier2TasksEnter(tier1Btn, tier3Btn, tier4Btn)}
          onMouseLeave={() => tier2TasksLeave(tier1Btn, tier3Btn, tier4Btn)}
        >
          T2: Tier 2 project
        </h4>

        {/*  T3: Tier 3 project  */}
        <h4
          className="t3 rm_btn"
          ref={tier3Btn}
          onMouseEnter={() => tier3TasksEnter(tier1Btn, tier2Btn, tier4Btn)}
          onMouseLeave={() => tier3TasksLeave(tier1Btn, tier2Btn, tier4Btn)}
        >
          T3: Tier 3 project
        </h4>

        {/*  T4: Symbiotic project */}
        <h4
          className="t4 rm_btn"
          ref={tier4Btn}
          onMouseEnter={() => tier4TasksEnter(tier1Btn, tier2Btn, tier3Btn)}
          onMouseLeave={() => tier4TasksLeave(tier1Btn, tier2Btn, tier3Btn)}
        >
          T4: Symbiotic project
        </h4>
      </div>
    </>
  );
}

export default RoadmapLegend;
