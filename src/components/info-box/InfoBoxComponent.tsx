import React from "react";

import "./infoBoxStyle.scss";

function InfoBox({
  title,
  info,
  last,
}: {
  title: string;
  info: any;
  last: Boolean;
}) {
  const titles = info.title;
  const sections = info.sections as [];

  const handleClassName = (): string => {
    if (last) {
      return "page_text last_page_text";
    } else {
      return "page_text";
    }
  };

  return (
    <>
      <div className={handleClassName()} itemScope={true}>
        <div className="pt_info">{titles}</div>

        {sections.map((list: any) => {
          return (
            <div key={list.title}>
              <div
                className="pt_text"
                itemScope={true}
                itemProp={"mainEntity"}
                itemType="https://schema.org/Question"
              >
                <div className="pt_text_title" itemProp="name">
                  {list.title}
                </div>
                <div
                  className="pt_text_container"
                  itemScope={true}
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="pt_answer" itemProp="text">
                    <p>{list.content}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default InfoBox;
