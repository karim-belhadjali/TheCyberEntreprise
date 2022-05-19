import React from "react";
import DocumentItemDescription from "../document_item_description/DocumentItemDescriptionComponent";

import "./DocumentItemStyle.scss";

function DocumentItem({
  document,
  imgComponent,
}: {
  document: any;
  imgComponent: any;
}) {
  const description = document.documents as [];
  return (
    <div>
      <div className="doc_category">
        <div className="doc_left">
          <div className="doc_title_category">{document.name}</div>
          <div className="image">
            <div className="image_container_docs">{imgComponent}</div>
          </div>
        </div>
        <div className="doc_list">
          {description.map((document: any) => {
            return (
              <div className="doc_item">
                <DocumentItemDescription
                  title={document.title}
                  description={document.content}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="horizontal_line"></div>
    </div>
  );
}

export default DocumentItem;
