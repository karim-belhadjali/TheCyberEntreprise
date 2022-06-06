import React, { useRef } from "react";
import { animate } from "src/animations/team";
import { roleBanner, teamMemberPic } from "src/utility/team";

import "./TeamMemberItemStyle.scss";

function TeamMember({
  member,
  utc,
  interactions,
  index,
}: {
  member: any;
  utc: string;
  interactions: string;
  index: number;
}) {
  const teamMemberPicture = teamMemberPic(member.name);
  const teamPersonRelationRef = useRef<any>();

  return (
    <div className="team_person">
      <div className="team_person_image">
        <img src={teamMemberPicture} alt="" />
      </div>

      <div className="team_sep"></div>

      <div className="team_person_content">
        <div className="team_person_name">
          <div className="name_container">{member.name}</div>
        </div>

        <div className="person_timezone">
          {utc}: {member.timeZone}
        </div>

        <div className="person_contact">
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

        <div className="person_tags">
          {member.roles.map((value) => {
            const classname = "tag_element " + roleBanner(value);
            return (
              <div key={value} className={classname}>
                {value}
              </div>
            );
          })}
        </div>

        <div className="person_description">
          <p>{member.description}</p>
        </div>
      </div>

      <div className="team_sep team_sep_last"></div>

      <div className="team_person_relation">
        <div className="team_person_relation_title">{interactions}</div>

        <div className="team_rel_center">
          <div
            className="team_person_relation_container"
            ref={teamPersonRelationRef}
          >
            {member.interactions.map((value, position) => {
              const interactionPicture = teamMemberPic(value);

              return (
                <div key={value} className="rel_item">
                  <img
                    src={interactionPicture}
                    alt={value}
                    onMouseEnter={() => animate(index, value, position)}
                  />
                </div>
              );
            })}

            <div className="show_name"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
