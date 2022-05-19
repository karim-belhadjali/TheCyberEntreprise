import * as React from "react";
import { DocumentsInfos } from "src/assets/text/InfoTexts";
import DocumentImage from "src/components/animated images/Document image/DocumentImageComponent";

import DocumentItem from "src/components/lists/document_item_list/DocumentItemComponent";

import "./DocumentsScreenStyle.scss";

function DocumentsScreen() {
  return (
    <>
      <div className="documents">
        <div className="documents_container">
          <div className="doc_title">Document Page</div>

          <div className="horizontal_line"></div>

          <DocumentItem
            document={DocumentsInfos.TheCyberEnterprise}
            imgComponent={<DocumentImage />}
          />
        </div>
      </div>

      <div className="doc_team">
        <div className="doc_team_thanks">
          <div className="doc_title align_left">Special Thanks</div>
          <div className="doc_thanks_text">
            In our effort to expand our international community and reach, we
            would like to accolade these people for their endeavors in ensuring
            we have the ability to do so. Translations such as the documentation
            seen above has enabled us to be internationally inclusive. Allowing
            individuals from all countries and cultural backgrounds to read
            about our project, our vision, and our ambitions. Therefore, special
            thanks are needed to those that have allowed us to spread the
            knowledge of what the Cyber Enterprise is about.
          </div>
          <div className="doc_thanks_list">
            <div className="list_names">
              <div className="name_title">
                <div className="name_title_text">Name</div>
              </div>

              <div className="thanks_name_el">Daniel D</div>

              <div className="thanks_name_el">I Love Gas</div>

              <div className="thanks_name_el">Marzopiens</div>
            </div>
            <div className="list_languages">
              <div className="language_title">
                <div className="language_title_text">Language</div>
              </div>

              <div className="thanks_language_el">French</div>

              <div className="thanks_language_el">Arabic</div>

              <div className="thanks_language_el">Spanish</div>
            </div>
          </div>
        </div>

        <div className="doc_team_form">
          <div className="doc_title">Join our Team!</div>
          <div className="doc_team_text">
            To become a translator today and help DeFine our Future, feel free
            to fill to send a message out a message to our HR & Operations
            department -{" "}
            <a
              href="https://discordapp.com/users/845761613621624843/"
              target="_blank"
              rel="noopener noreferrer"
            >
              $CYBR_mdking
            </a>{" "}
            or our Community{" "}
            <a
              href="https://discordapp.com/users/675621674154065922/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Darthwhite
            </a>{" "}
            department. The team members within these groups are the quickest
            way to establish a line of communication, but you are also welcome
            to message in chat on any of our socials or use our implemented
            ticket system within the Discord.
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentsScreen;
