import * as React from "react";
import { useRef, useEffect, useState } from "react";

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
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";
import { RoadmapInfos } from "src/assets/text/InfoTexts";
import { useParams } from "react-router-dom";
import { handleUrlLanguages } from "src/utility/globalUtlities";

function RoadmapScreen({
  language,
  urlLanguages,
  setcurrentScreen,
}: {
  language: any;
  urlLanguages: any;
  setcurrentScreen: any;
}) {
  setcurrentScreen("Roadmap");
  const [RoadmapText, setRoadmapText] = useState(EnglishText);

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

  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguages(urlLanguage);

  const lastElement = (index): boolean => {
    if (RoadmapText.RoadmapInfos.definitions.length - 1 === index) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (language === "English") {
      setRoadmapText(EnglishText);
    } else if (language === "Spanish") {
      setRoadmapText(SpanishText);
    }
  }, [RoadmapText, language]);

  useEffect(() => {
    completedLiquidAnim(completedBtn.current, completedLiquid.current);
    progressBtnLiquidAnim(progressBtn.current, progressLiquid.current);
    preparationBtnLiquidAnim(preparationBtn.current, preparationLiquid.current);
    if (selectedLanguage !== language) {
      urlLanguages(selectedLanguage);
    }
  }, [selectedLanguage]);

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
              data={RoadmapText}
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
                    <span className="quarter">
                      {RoadmapText.RoadmapInfos.current_Quarter.name}
                    </span>
                    <span className="date">
                      {RoadmapText.RoadmapInfos.current_Quarter.date}
                    </span>
                    <span className="year">
                      {RoadmapText.RoadmapInfos.current_Quarter.year}
                    </span>
                  </div>
                  <div className="horizontal_sep"></div>
                  <div className="tasks">
                    <div className="task_group">
                      <h3 className="comp">
                        {RoadmapText.RoadmapInfos.color_key.completed_tasks}
                      </h3>
                      <h4 className="t3_item comp_items">
                        <span className="dots completed_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Completed_Tasks[0].task_1
                        }
                      </h4>
                      <h4 className="t2_item comp_items">
                        <span className="dots completed_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Completed_Tasks[0].task_2
                        }
                      </h4>
                      <h4 className="t1_item comp_items">
                        <span className="dots completed_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Completed_Tasks[0].task_3
                        }
                      </h4>
                    </div>
                    <div className="vertical_sep"></div>
                    <div className="task_group">
                      <h3 className="prog">
                        {RoadmapText.RoadmapInfos.color_key.In_progress}
                      </h3>
                      <h4 className="t3_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_1
                        }
                      </h4>
                      <h4 className="t3_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_2
                        }
                      </h4>
                      <h4 className="t3_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_3
                        }
                      </h4>
                      <h4 className="t2_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_4
                        }
                      </h4>
                      <h4 className="t2_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_5
                        }
                      </h4>
                      <h4 className="t2_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_6
                        }
                      </h4>
                      <h4 className="t2_item prog_items">
                        <span className="dots progress_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .In_Progress[0].task_7
                        }
                      </h4>
                    </div>
                    <div className="vertical_sep"></div>
                    <div className="task_group">
                      <h3 className="prep">
                        {RoadmapText.RoadmapInfos.color_key.Planning_Phase}
                      </h3>
                      <h4 className="t3_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_1
                        }
                      </h4>
                      <h4 className="t3_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_2
                        }
                      </h4>
                      <h4 className="t3_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_3
                        }
                      </h4>
                      <h4 className="t3_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_4
                        }
                      </h4>
                      <h4 className="t3_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_5
                        }
                      </h4>
                      <h4 className="t3_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_6
                        }
                      </h4>
                      <h4 className="t2_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_7
                        }
                      </h4>
                      <h4 className="t2_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_8
                        }
                      </h4>
                      <h4 className="t2_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_9
                        }
                      </h4>
                      <h4 className="t1_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_10
                        }
                      </h4>
                      <h4 className="t1_item prep_items">
                        <span className="dots preparation_dot"></span>
                        {
                          RoadmapText.RoadmapInfos.current_Quarter
                            .Planning_Phase[0].task_11
                        }
                      </h4>
                    </div>
                  </div>
                </div>
              </TextContainer>
            </div>

            <div className="next_quarters">
              <div className="quarter_el">
                <div className="title">
                  <span className="quarter">
                    {RoadmapText.RoadmapInfos.other_Quarter_3.name}
                  </span>
                  <span className="date">
                    {RoadmapText.RoadmapInfos.other_Quarter_3.date}
                  </span>
                  <span className="year">
                    {RoadmapText.RoadmapInfos.other_Quarter_3.year}
                  </span>
                </div>
                <div className="text">
                  {RoadmapText.RoadmapInfos.other_Quarter_3.description}
                </div>
              </div>
              <div className="vertical_sep"></div>
              <div className="quarter_el">
                <div className="title">
                  <span className="quarter">
                    {RoadmapText.RoadmapInfos.other_Quarter_4.name}
                  </span>
                  <span className="date">
                    {RoadmapText.RoadmapInfos.other_Quarter_4.date}
                  </span>
                  <span className="year">
                    {RoadmapText.RoadmapInfos.other_Quarter_4.year}
                  </span>
                </div>
                <div className="text">
                  {RoadmapText.RoadmapInfos.other_Quarter_4.description}
                </div>
              </div>
              <div className="vertical_sep"></div>
              <div className="quarter_el">
                <div className="title">
                  <span className="quarter">
                    {RoadmapText.RoadmapInfos.other_Quarter_1.name}
                  </span>
                  <span className="date">
                    {RoadmapText.RoadmapInfos.other_Quarter_1.date}
                  </span>
                  <span className="year">
                    {RoadmapText.RoadmapInfos.other_Quarter_1.year}
                  </span>
                </div>
                <div className="text">
                  {RoadmapText.RoadmapInfos.other_Quarter_1.description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap_bottom_svg">
          <img src={top_mask_bar} width="1" height="1" alt="" />
        </div>
      </div>

      <InfoBox
        title="Information"
        info={RoadmapText.RoadmapInfos.information}
        last={false}
      />

      {RoadmapText.RoadmapInfos.definitions.map((section, index) => {
        return (
          <InfoBox
            info={section}
            title={section.title}
            key={section.title}
            last={lastElement(index)}
          />
        );
      })}
    </>
  );
}

export default RoadmapScreen;
