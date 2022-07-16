import React, { useEffect, useState } from "react";
import {
  animateRowEnter,
  animateRowLeave,
  personContactAnimation,
  SocialAnimations,
} from "src/animations/team";
import { useParams } from "react-router-dom";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";

import InfoBox from "src/components/info-box/InfoBoxComponent";
import TeamMember from "src/components/lists/team_member_item/TeamMemberItemComponent";

import "./TeamScreenStyle.scss";
import { handleUrlLanguages } from "src/utility/globalUtlities";

function TeamScreen({
  language,
  urlLanguages,
  setcurrentScreen,
}: {
  language: any;
  urlLanguages: any;
  setcurrentScreen: any;
}) {
  setcurrentScreen("team");
  const [teamPageText, setteamPageText] = useState(EnglishText);
  const timezone = teamPageText.TeamPageInfos.UTC;
  const interactions = teamPageText.TeamPageInfos.interactions;
  var relationContainerIndex = -1;
  const membersNames = ["0xmedia", "Vito Luciano", "DTrain", "Imtellingmum"];
  const positionNames = ["Marketing", "Expansion", "Twitter", "HR"];
  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguages(urlLanguage);

  useEffect(() => {
    SocialAnimations();
    personContactAnimation();
    if (selectedLanguage !== language) {
      urlLanguages(selectedLanguage);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (language === "English") {
      setteamPageText(EnglishText);
    } else if (language === "Spanish") {
      setteamPageText(SpanishText);
    }
  }, [teamPageText, language]);

  return (
    <div>
      <div className="team">
        <div className="team_container">
          <div className="team_title">{teamPageText.TeamPageInfos.title}</div>

          {teamPageText.TeamPageInfos.sections.map((section, index) => {
            return (
              <div className="team_cat">
                <div className="team_cat_title strategical_op">
                  {section.title}
                </div>
                {teamPageText.TeamPageInfos.sections[index].members.map(
                  (member) => {
                    relationContainerIndex++;
                    return (
                      <TeamMember
                        member={member}
                        utc={timezone}
                        interactions={interactions}
                        index={relationContainerIndex}
                        key={member.name}
                      />
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="team_p">
        <div className="team_p_thanks">
          <div className="doc_title align_left">
            {teamPageText.TeamPageInfos.mentions.title}
          </div>
          <div className="doc_thanks_text">
            {teamPageText.TeamPageInfos.mentions.content}
          </div>
          <div className="doc_thanks_list">
            <div className="list_names">
              <div className="name_title">
                <div className="name_title_text">
                  {teamPageText.Globaltext.Team_Page.Name}
                </div>
              </div>
              {membersNames.map((value: string, position) => {
                return (
                  <div
                    className="thanks_name_el"
                    onMouseEnter={() => animateRowEnter(position)}
                    onMouseLeave={() => animateRowLeave(position)}
                    key={value}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
            <div className="list_languages">
              <div className="language_title">
                <div className="language_title_text">
                  {teamPageText.Globaltext.Team_Page.Position}
                </div>
              </div>
              {positionNames.map((value, position) => {
                return (
                  <div
                    className="thanks_language_el"
                    onMouseEnter={() => animateRowEnter(position)}
                    onMouseLeave={() => animateRowLeave(position)}
                    key={value}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="team_p_form">
          <div className="doc_title">
            {teamPageText.TeamPageInfos.Join_team.title}
          </div>
          <div className="team_p_text">
            <p>{teamPageText.TeamPageInfos.Join_team.content_first}</p>
          </div>

          <div className="filler_text_mob">
            {teamPageText.TeamPageInfos.Join_team.content_filler}
          </div>

          <div className="filler">
            <div className="first_image">
              <img
                src={require("../../assets/team/darthwhite.webp")}
                height="1"
                width="1"
                alt=""
              />
              <div className="filler_contact">
                <a
                  href={
                    teamPageText.TeamPageInfos.sections[1].members[0]
                      .discord_link
                  }
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Discord
                </a>
                <a
                  href={
                    teamPageText.TeamPageInfos.sections[1].members[0]
                      .telegram_link
                  }
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Telegram
                </a>
              </div>
            </div>
            <div className="filler_text">
              {teamPageText.TeamPageInfos.Join_team.content_filler}
            </div>
            <div className="second_image">
              <div className="filler_contact">
                <a
                  href={
                    teamPageText.TeamPageInfos.sections[1].members[1]
                      .discord_link
                  }
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Discord
                </a>
                <a
                  href={
                    teamPageText.TeamPageInfos.sections[1].members[1]
                      .telegram_link
                  }
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Telegram
                </a>
                <a
                  href={
                    teamPageText.TeamPageInfos.sections[1].members[1]
                      .twitter_link
                  }
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Twitter
                </a>
              </div>
              <img
                src={require("../../assets/team/mdking.webp")}
                height="1"
                width="1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <InfoBox
        info={teamPageText.TeamPageInfos.information}
        title={teamPageText.TeamPageInfos.information.title}
        last={true}
      />
    </div>
  );
}

export default TeamScreen;
