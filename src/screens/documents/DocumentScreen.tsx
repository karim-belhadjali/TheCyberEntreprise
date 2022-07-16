import React, { useEffect, useState } from "react";

import { DocumentsInfos, TeamPageInfos } from "src/assets/text/InfoTexts";
import { SocialAnimations } from "src/animations/documents";
import { hoverBackgroundTable } from "src/animations/documents";

import "./DocumentsScreenStyle.scss";
import DocumentItem from "src/components/lists/document_item_list/DocumentItemComponent";
import DocumentImage from "src/components/animated images/Document image/DocumentImageComponent";
import CybrScroll from "src/components/animated images/cybr Scroll/CybrScrollComponent";
import Run from "src/components/run/ProjectRunComponent";
import ProjectHome from "src/components/animated images/ProjectHome/ProjectHomeComponenet";
import CreditCard from "src/components/animated images/Cybr Credit Card/CreditCardComponent";
import CybrInu from "src/components/animated images/cybr Inu/CybrInuImageComponent";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import { useParams } from "react-router-dom";
import { handleUrlLanguages } from "src/utility/globalUtlities";
import * as EnglishText from "src/assets/text/InfoTexts";
import * as SpanishText from "src/assets/text/SpanishJSFile";

function DocumentsScreen({
  data,
  language,
  urlLanguages,
  setcurrentScreen,
}: {
  data: any;
  language: string;
  urlLanguages: any;
  setcurrentScreen: any;
}) {
  setcurrentScreen("doc");

  const [DocumentPageText, setDocumentPageText] = useState(
    EnglishText.DocumentsInfos
  );
  const [GlobalDocumentText, setGlobalDocumentText] = useState(
    EnglishText.Globaltext.Documents_Page
  );

  const teamPageText = TeamPageInfos;

  const lastElement = (index): boolean => {
    if (DocumentPageText.information.length - 1 === index) {
      return true;
    } else {
      return false;
    }
  };
  const { urlLanguage } = useParams();

  const selectedLanguage = handleUrlLanguages(urlLanguage);

  useEffect(() => {
    SocialAnimations();
    hoverBackgroundTable();
    if (selectedLanguage !== language) {
      urlLanguages(selectedLanguage);
    }
  }, [selectedLanguage]);
  useEffect(() => {
    if (language === "English") {
      setDocumentPageText(EnglishText.DocumentsInfos);
      setGlobalDocumentText(EnglishText.Globaltext.Documents_Page);
    } else if (language === "Spanish") {
      setDocumentPageText(SpanishText.DocumentsInfos);
      setGlobalDocumentText(SpanishText.Globaltext.Documents_Page);
    }
  }, [language]);
  return (
    <div>
      <div className="documents">
        <div className="documents_container">
          <div className="doc_title">{DocumentPageText.title}</div>

          <div className="horizontal_line"></div>

          <DocumentItem
            document={DocumentPageText.TheCyberEnterprise}
            imgComponent={<DocumentImage />}
            commingSoon={false}
            commingSoonText=""
            commingSoonText2=""
            key="TheCyberEnterprise"
            last={false}
          />

          <DocumentItem
            document={DocumentPageText.Cyber_Token}
            imgComponent={<CybrScroll botbanned={data.botBanned} />}
            key="Cyber_Token"
            commingSoonText=""
            commingSoonText2=""
            commingSoon={false}
            last={false}
          />
          <DocumentItem
            document={DocumentPageText.Project_Run}
            imgComponent={<Run />}
            key="Project Run"
            commingSoonText={GlobalDocumentText.Introduction_Article_Medium}
            commingSoonText2="Medium"
            commingSoon={true}
            last={false}
          />
          <DocumentItem
            document={DocumentPageText.Project_Home}
            imgComponent={<ProjectHome />}
            key="Project_Home"
            commingSoonText={GlobalDocumentText.Introduction_coming}
            commingSoonText2=""
            commingSoon={true}
            last={false}
          />
          <DocumentItem
            document={DocumentPageText.Cyber_Creditors_Token}
            imgComponent={<CreditCard supply={data.circulatingSupply} />}
            key="Cyber_Creditors_Token"
            commingSoonText=""
            commingSoonText2=""
            commingSoon={false}
            last={false}
          />
          <DocumentItem
            document={DocumentPageText.Cyber_Inu}
            imgComponent={<CybrInu />}
            commingSoonText=""
            commingSoonText2=""
            key="Cyber_Inu"
            commingSoon={false}
            last={true}
          />
        </div>
      </div>

      <div className="doc_team">
        <div className="doc_team_thanks">
          <div className="doc_title align_left">
            {DocumentPageText.special_thanks.title}
          </div>
          <div className="doc_thanks_text">
            {DocumentPageText.special_thanks.content}
          </div>
          <div className="doc_thanks_list">
            <div className="list_names">
              <div className="name_title">
                <div className="name_title_text">
                  {DocumentPageText.special_thanks.name}
                </div>
              </div>

              <div className="thanks_name_el">Daniel D</div>

              <div className="thanks_name_el">I Love Gas</div>
              <div className="thanks_name_el">I Love Gas</div>
              <div className="thanks_name_el">Marzopiens</div>
              <div className="thanks_name_el">Stevenon</div>
              <div className="thanks_name_el">Rebel77</div>
            </div>
            <div className="list_languages">
              <div className="language_title">
                <div className="language_title_text">
                  {DocumentPageText.special_thanks.language}
                </div>
              </div>

              <div className="thanks_language_el">
                {DocumentPageText.special_thanks.french}
              </div>

              <div className="thanks_language_el">
                {DocumentPageText.special_thanks.arabic}
              </div>
              <div className="thanks_language_el">
                {DocumentPageText.special_thanks.dutch}
              </div>

              <div className="thanks_language_el">
                {DocumentPageText.special_thanks.spanish}
              </div>

              <div className="thanks_language_el">
                {DocumentPageText.special_thanks.italic}
              </div>
              <div className="thanks_language_el">
                {DocumentPageText.special_thanks.italic}
              </div>
            </div>
          </div>
        </div>

        <div className="doc_team_form">
          <div className="doc_title">{DocumentPageText.Join_team.title}</div>
          <div className="doc_team_text">
            {DocumentPageText.Join_team.content_first}
            <a
              href="https://discordapp.com/users/810141997448822824/"
              target="_blank"
              rel="noopener noreferrer"
            >
              I Love Gas
            </a>
            {DocumentPageText.Join_team.content_second}
            <a
              href="https://discordapp.com/users/822974650082394118/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marzopiens
            </a>
            {DocumentPageText.Join_team.content_third}
          </div>

          <div className="filler_text_mob">
            {DocumentPageText.Join_team.content_filler}
          </div>

          <div className="filler">
            <div className="first_image">
              <img
                src={require("../../assets/team/gas.webp")}
                height="1"
                width="1"
                alt=""
              />
              <div className="filler_contact">
                <a
                  href={teamPageText.sections[3].members[0].discord_link}
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Discord
                </a>
                <a
                  href={teamPageText.sections[3].members[0].telegram_link}
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Telegram
                </a>
                <a
                  href={teamPageText.sections[3].members[0].twitter_link}
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="filler_text">
              {DocumentPageText.Join_team.content_filler}
            </div>
            <div className="second_image">
              <div className="filler_contact">
                <a
                  href={teamPageText.sections[3].members[1].discord_link}
                  className="discord"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Discord
                </a>
                <a
                  href={teamPageText.sections[3].members[1].telegram_link}
                  className="telegram"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Telegram
                </a>
                <a
                  href={teamPageText.sections[3].members[1].twitter_link}
                  className="twitter"
                  target="_blank"
                  rel="nofollow noindex noreferrer noopener"
                >
                  Twitter
                </a>
              </div>
              <img
                src={require("../../assets/team/marzo.webp")}
                height="1"
                width="1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {DocumentPageText.information.map((section, index) => {
        return (
          <InfoBox
            info={section}
            title={section.title}
            key={section.title}
            last={lastElement(index)}
          />
        );
      })}
    </div>
  );
}

export default DocumentsScreen;
