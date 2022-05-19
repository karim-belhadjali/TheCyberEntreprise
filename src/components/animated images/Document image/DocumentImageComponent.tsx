import * as React from "react";

import "./DocumentImageStyle.scss";

function DocumentImage() {
  return (
    <div>
      <img
        src={require("../../../assets/documents/folder.webp")}
        width="340"
        height="288"
        className="documents_folder"
        alt=""
      />
      <img
        src={require("../../../assets/documents/file.webp")}
        width="340"
        height="288"
        className="documents_file"
        alt=""
      />
    </div>
  );
}

export default DocumentImage;
