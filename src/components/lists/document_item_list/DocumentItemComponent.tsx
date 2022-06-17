import React from "react";
import DocumentItemDescription from "../document_item_description/DocumentItemDescriptionComponent";

import "./DocumentItemStyle.scss";

function DocumentItem({
  document,
  imgComponent,
  commingSoon,
  commingSoonText,
}: {
  document: any;
  imgComponent: any;
  commingSoon: Boolean;
  commingSoonText: string;
}) {
  const description = document.documents as [];
  return (
    <div key={document.name}>
      <div className="doc_category">
        <div className="doc_left">
          <div className="doc_title_category">{document.name}</div>
          <div className="image">
            <div className="image_container_docs">{imgComponent}</div>
          </div>
        </div>
        <div className="doc_list">
          {commingSoon && (
            <div className="document_el">
              <div className="coming_soon">{commingSoonText}</div>
            </div>
          )}
          {!commingSoon &&
            description.map((value: any) => {
              return (
                <div className="doc_item" key={value.title}>
                  <DocumentItemDescription
                    english={require("../../../assets/documents/english-documents/cyber-contract-functions_EN_V1.10.pdf")}
                    spanish={null}
                    arabic={null}
                    chinese={null}
                    french={null}
                    title={value.title}
                    description={value.content}
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
