import * as React from "react";
import {
  folderAniamtionEnter,
  folderAnimationLeave,
} from "src/animations/documents";

import "./DocumentImageStyle.scss";

function DocumentImage() {
  const documents_file = React.useRef<any>();

  return (
    <div>
      <img
        src={require("../../../assets/documents/folder.webp")}
        width="340"
        height="288"
        className="documents_folder"
        alt=""
        onMouseEnter={() => folderAniamtionEnter(documents_file.current)}
        onMouseLeave={() => folderAnimationLeave(documents_file.current)}
      />
      <img
        src={require("../../../assets/documents/file.webp")}
        width="340"
        height="288"
        className="documents_file"
        alt=""
        ref={documents_file}
      />
    </div>
  );
}

export default DocumentImage;
