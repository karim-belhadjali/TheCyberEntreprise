import React from "react";

import "./InfoSectionStyle.scss";

function InfoSection({ title, values }: { title: string; values: [...any] }) {
  return (
    <div className="info">
      <div className="info_name">{title}</div>
      <div className="info_doc">
        {values.map((value, i) => {
          return <span key={i}>{value}</span>;
        })}
      </div>
    </div>
  );
}

export default InfoSection;
