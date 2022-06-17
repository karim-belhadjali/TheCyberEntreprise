import React, { useEffect } from "react";

import { DocumentsInfos } from "src/assets/text/InfoTexts";
import CreditCard from "src/components/animated images/Cybr Credit Card/CreditCardComponent";
import CybrInu from "src/components/animated images/cybr Inu/CybrInuImageComponent";
import CybrScroll from "src/components/animated images/cybr Scroll/CybrScrollComponent";
import DocumentImage from "src/components/animated images/Document image/DocumentImageComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import { RoadmapInfos } from "src/assets/text/InfoTexts";
import DocumentItem from "src/components/lists/document_item_list/DocumentItemComponent";

import "./DocumentsScreenStyle.scss";
import { SocialAnimations } from "src/animations/team";
import { hoverBackgroundTable } from "src/animations/documents";
import ProjectRun from "src/components/animated images/projectRun/ProjectRunComponent";
import ProjectHome from "src/components/animated images/ProjectHome/ProjectHomeComponenet";

function DocumentsScreen({ data }: { data: any }) {
  useEffect(() => {
    SocialAnimations();
    hoverBackgroundTable();
  }, []);
  return (
    <>
      <div className="documents">
        <div className="documents_container">
          <div className="doc_title">Document Page</div>

          <div className="horizontal_line"></div>

          <DocumentItem
            document={DocumentsInfos.TheCyberEnterprise}
            imgComponent={<DocumentImage />}
            commingSoon={false}
            commingSoonText=""
            key="TheCyberEnterprise"
          />

          <DocumentItem
            document={DocumentsInfos.Cyber_Token}
            imgComponent={<CybrScroll botbanned={data.botBanned} />}
            key="Cyber_Token"
            commingSoonText=""
            commingSoon={false}
          />
          <DocumentItem
            document={DocumentsInfos.Cyber_Token}
            imgComponent={<ProjectRun />}
            key="Project Run"
            commingSoonText="Phase 1 coming in July."
            commingSoon={true}
          />
          <DocumentItem
            document={DocumentsInfos.Cyber_Token}
            imgComponent={<ProjectHome />}
            key="Cyber_Token"
            commingSoonText="Phase 1 coming in June."
            commingSoon={true}
          />
          <DocumentItem
            document={DocumentsInfos.Cyber_Creditors_Token}
            imgComponent={<CreditCard supply={data.circulatingSupply} />}
            key="Cyber_Creditors_Token"
            commingSoonText=""
            commingSoon={false}
          />
          <DocumentItem
            document={DocumentsInfos.Cyber_Inu}
            imgComponent={<CybrInu />}
            commingSoonText=""
            key="Cyber_Inu"
            commingSoon={false}
          />
        </div>
      </div>

      <div className="doc_team">
        <div className="doc_team_thanks">
          <div className="doc_title align_left">
            {DocumentsInfos.special_thanks.title}
          </div>
          <div className="doc_thanks_text">
            {DocumentsInfos.special_thanks.content}
          </div>
          <div className="doc_thanks_list">
            <div className="list_names">
              <div className="name_title">
                <div className="name_title_text">
                  {DocumentsInfos.special_thanks.name}
                </div>
              </div>

              <div className="thanks_name_el">Daniel D</div>

              <div className="thanks_name_el">I Love Gas</div>

              <div className="thanks_name_el">Marzopiens</div>
            </div>
            <div className="list_languages">
              <div className="language_title">
                <div className="language_title_text">
                  {DocumentsInfos.special_thanks.language}
                </div>
              </div>

              <div className="thanks_language_el">
                {DocumentsInfos.special_thanks.french}
              </div>

              <div className="thanks_language_el">
                {DocumentsInfos.special_thanks.arabic}
              </div>

              <div className="thanks_language_el">
                {DocumentsInfos.special_thanks.spanish}
              </div>
            </div>
          </div>
        </div>

        <div className="doc_team_form">
          <div className="doc_title">Join our Team!</div>
          <div className="doc_team_text">
            {DocumentsInfos.Join_team.content_first}
            <a
              href="https://discordapp.com/users/845761613621624843/"
              target="_blank"
              rel="noopener noreferrer"
            >
              $CYBR_mdking
            </a>
            {DocumentsInfos.Join_team.content_second}
            <a
              href="https://discordapp.com/users/675621674154065922/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Darthwhite
            </a>{" "}
            {DocumentsInfos.Join_team.content_third}
          </div>

          <div className="filler_text_mob">
            {DocumentsInfos.Join_team.content_filler}
          </div>

          <div className="filler">
            <div className="first_image">
              <img src={require("../../assets/team/darthwhite.png")} alt="" />
              <div className="filler_contact">
                <a
                  href="#"
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
              </div>
            </div>
            <div className="filler_text">
              {DocumentsInfos.Join_team.content_filler}
            </div>
            <div className="second_image">
              <div className="filler_contact">
                <a
                  href="#"
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
                <a
                  href="#"
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noopener"
                ></a>
              </div>
              <img src={require("../../assets/team/mdking.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <InfoBox title="Information" info={RoadmapInfos.information} />
    </>
  );
}

export default DocumentsScreen;
