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
  const mainPathEnglish = "../../../assets/documents/english-documents/";

  const handleFileLocation = (document_title) => {
    switch (document_title) {
      case "cyberpaper_inu": {
        return require("../../../assets/documents/english-documents/cyberpaper_inu.pdf");
      }
      case "aboutus_inu": {
        return require("../../../assets/documents/english-documents/aboutus_inu.pdf");
      }
      case "origins_inu": {
        return require("../../../assets/documents/english-documents/origins_inu.pdf");
      }
      case "cyber-creditors": {
        return require("../../../assets/documents/english-documents/the-cyber-creditors_EN_V1.10.pdf");
      }
      case "cyber-creditors-lite": {
        return require("../../../assets/documents/english-documents/cyberpaper-lite_EN_V1.10.pdf");
      }
      case "cyber-credit-tokenomics": {
        return require("../../../assets/documents/english-documents/cyber-credit-tokenomics_EN_V1.10.pdf");
      }
      case "cybr-contract-functions": {
        return require("../../../assets/documents/english-documents/cyber-contract-functions_EN_V1.10.pdf");
      }
      case "import-cybr-token": {
        return require("../../../assets/documents/english-documents/import-cybr-token_EN_V1.10.pdf");
      }

      case "the-cybr-enterprise": {
        return require("../../../assets/documents/english-documents/the-cyber-enterprise_EN_V1.10.pdf");
      }
      case "CyberPaper-Lite": {
        return require("../../../assets/documents/english-documents/cyberpaper-lite_EN_V1.10.pdf");
      }
      default: {
        return require("../../../assets/documents/english-documents/the-cyber-enterprise_EN_V1.10.pdf");
      }
    }
  };
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
                    english={handleFileLocation(value.document_title)}
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
