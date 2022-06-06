import React from "react";
import { animateRowEnter, animateRowLeave } from "src/animations/team";
import { TeamPageInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import TeamMember from "src/components/lists/team_member_item/TeamMemberItemComponent";

import "./TeamScreenStyle.scss";

function TeamScreen() {
  const timezone = TeamPageInfos.UTC;
  const interactions = TeamPageInfos.interactions;
  var relationContainerIndex = -1;
  const membersNames = ["0xmedia", "Vito Luciano", "DTrain", "Imtellingmum"];
  const positionNames = ["Marketing", "Expansion", "Twitter", "HR"];
  return (
    <div>
      <div className="team">
        <div className="team_container">
          <div className="team_title">Team</div>

          {TeamPageInfos.sections.map((section, index) => {
            return (
              <div className="team_cat">
                <div className="team_cat_title strategical_op">
                  {section.title}
                </div>
                {TeamPageInfos.sections[index].members.map((member) => {
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
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="team_p">
        <div className="team_p_thanks">
          <div className="doc_title align_left">
            {TeamPageInfos.mentions.title}
          </div>
          <div className="doc_thanks_text">
            {TeamPageInfos.mentions.content}
          </div>
          <div className="doc_thanks_list">
            <div className="list_names">
              <div className="name_title">
                <div className="name_title_text">Name</div>
              </div>
              {membersNames.map((value: string, position) => {
                return (
                  <div
                    className="thanks_name_el"
                    onMouseEnter={() => animateRowEnter(position)}
                    onMouseLeave={() => animateRowLeave(position)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
            <div className="list_languages">
              <div className="language_title">
                <div className="language_title_text">Position</div>
              </div>
              {positionNames.map((value, position) => {
                return (
                  <div
                    className="thanks_language_el"
                    onMouseEnter={() => animateRowEnter(position)}
                    onMouseLeave={() => animateRowLeave(position)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="team_p_form">
          <div className="doc_title">{TeamPageInfos.Join_team.title}</div>
          <div className="team_p_text">
            <p>
              The Cyber Enterprise is always looking for new members that would
              like to take part in revolutionising the crypto space with us. We
              are looking for people who are enthusiastic in helping us achieve
              this, and do not discriminate based on how much one can offer in
              terms of time, knowledge, or resources. As long as you are eager
              to grow with us, we will find a spot for you on the team. Here at
              Cyber enterprise we want to offer our investors, holders,
              community members the opportunity to DeFining our Future.{" "}
            </p>
          </div>

          <div className="filler_text_mob">
            If you are interested in joining the team, feel free to reach out to
            our Community or H&R Operations Lead.
          </div>

          <div className="filler">
            <div className="first_image">
              <img src={require("../../assets/team/darthwhite.webp")} alt="" />
              <div className="filler_contact">
                <a
                  href="#"
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
              </div>
            </div>
            <div className="filler_text">
              If you are interested in joining the team, feel free to reach out
              to our Community or H&R Operations Lead.
            </div>
            <div className="second_image">
              <div className="filler_contact">
                <a
                  href="#"
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
              </div>
              <img src={require("../../assets/team/mdking.webp")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <InfoBox
        info={TeamPageInfos.information}
        title={TeamPageInfos.information.title}
      />
    </div>
  );
}

export default TeamScreen;
