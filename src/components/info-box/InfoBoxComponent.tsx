import React from "react";

import "./infoBoxStyle.scss";

function InfoBox({ title, info }: { title: string; info: string[][] }) {
  return (
    <>
      <div className="page_text" itemScope={true}>
        <div className="pt_info">{title}</div>

        {info.map((list) => {
          return (
            <>
              <div
                className="pt_text"
                itemScope={true}
                itemProp={"mainEntity"}
                itemType="https://schema.org/Question"
              >
                <div className="pt_text_title" itemProp="name">
                  {list[0]}
                </div>
                <div
                  className="pt_text_container"
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="pt_answer" itemProp="text">
                    <p>{list[1]}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default InfoBox;
