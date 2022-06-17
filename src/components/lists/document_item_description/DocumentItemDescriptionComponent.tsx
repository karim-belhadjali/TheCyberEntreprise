import React from "react";

import "./DocumentItemDescriptionStyle.scss";

function DocumentItemDescription({
  title,
  description,
  english = null,
  spanish = null,
  arabic = null,
  chinese = null,
  french = null,
}: {
  title: string;
  description: string;
  english: any;
  spanish: any;
  arabic: any;
  chinese: any;
  french: any;
}) {
  return (
    <div className="document_el" key={title}>
      <div className="document_content">
        <div className="pdf_title">{title}</div>
        <div className="doc_description">{description}</div>
      </div>
      <div className="doc_vertical_line"></div>
      <div className="document_languages">
        <div className="language_btn">
          {english && (
            <a href={english} download="">
              English
            </a>
          )}
          {english == null && "English"}
        </div>

        <div className="language_btn">
          {spanish && (
            <a href={spanish} download="">
              Spanish
            </a>
          )}
          {spanish == null && "Spanish"}
        </div>

        <div className="language_btn">
          {arabic && (
            <a href={arabic} download="">
              Arabic
            </a>
          )}
          {arabic == null && "Arabic"}
        </div>

        <div className="language_btn">
          {french && (
            <a href={french} download="">
              French
            </a>
          )}
          {french == null && "French"}
        </div>

        <div className="language_btn">
          {chinese && (
            <a href={chinese} download="">
              Chinese
            </a>
          )}
          {chinese == null && "Chinese"}
        </div>

        <div className="language_btn">Croatian</div>

        <div className="language_btn">Czech</div>

        <div className="language_btn">German</div>

        <div className="language_btn">Romanian</div>
      </div>
    </div>
  );
}

export default DocumentItemDescription;
