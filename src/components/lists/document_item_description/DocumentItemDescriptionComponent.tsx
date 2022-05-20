import React from "react";

import "./DocumentItemDescriptionStyle.scss";

function DocumentItemDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="document_el" key={title}>
      <div className="document_content">
        <div className="pdf_title">{title}</div>
        <div className="doc_description">{description}</div>
      </div>
      <div className="doc_vertical_line"></div>
      <div className="document_languages">
        <div className="language_btn">English</div>

        <div className="language_btn">Spanish</div>

        <div className="language_btn">Arabic</div>

        <div className="language_btn">French</div>

        <div className="language_btn">Chinese</div>

        <div className="language_btn">Croatian</div>

        <div className="language_btn">Czech</div>

        <div className="language_btn">German</div>

        <div className="language_btn">Romanian</div>
      </div>
    </div>
  );
}

export default DocumentItemDescription;
