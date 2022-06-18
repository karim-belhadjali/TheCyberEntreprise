import React, { useEffect } from "react";
import { animateHarmonyToken } from "src/animations/tokenInfo";
import "./token-info.scss";
function TokenInfo() {
  useEffect(() => {
    animateHarmonyToken();
  }, []);

  const contractAdress = "0x438a6E42813118548C065336844239b63ad4Fcfd";
  const handleCopyAdress = () => {
    navigator.clipboard.writeText(contractAdress);
  };
  return (
    <div className="token_info">
      <div className="token_image">
        <div className="token_image_container">
          <img
            src={require("../../assets/home_harmony/token.webp")}
            className="tkn_token"
            alt=""
          />
          <svg className="token_wave" height="86" width="86">
            <circle
              cx="43"
              cy="43"
              r="27"
              strokeWidth="0"
              fill="white"
              className="wave wave1"
            />
            <circle
              cx="43"
              cy="43"
              r="33"
              strokeWidth="0"
              fill="white"
              className="wave wave2"
            />
            <circle
              cx="43"
              cy="43"
              r="40"
              strokeWidth="0"
              fill="white"
              className="wave wave3"
            />
          </svg>
          <img
            src={require("../../assets/home_harmony/harmony.webp")}
            className="tkn_images tkn_harmony"
            width="1"
            height="1"
            alt=""
          />
          <img
            src={require("../../assets/home_harmony/box1.webp")}
            className="tkn_images tkn_box1"
            width="1"
            height="1"
            alt=""
          />
          <img
            src={require("../../assets/home_harmony/box2.webp")}
            className="tkn_images tkn_box2"
            width="1"
            height="1"
            alt=""
          />
          <img
            src={require("../../assets/home_harmony/box3.webp")}
            className="tkn_images tkn_box3"
            width="1"
            height="1"
            alt=""
          />
          <img
            src={require("../../assets/home_harmony/box4.webp")}
            className="tkn_images tkn_box4"
            width="1"
            height="1"
            alt=""
          />
          <img
            src={require("../../assets/home_harmony/box5.webp")}
            className="tkn_images tkn_box5"
            width="1"
            height="1"
            alt=""
          />
        </div>
      </div>
      <div className="token_info_border">
        <div className="token_info_container">
          <div className="token_info_element">
            <div className="info_title">contract address</div>
            <div className="info_data">{contractAdress}</div>
            <div className="info_links">
              <div className="link_element">
                <span onClick={handleCopyAdress}>copy address</span>
              </div>

              <div className="link_element">
                <a
                  href="https://etherscan.io/address/0x438a6E42813118548C065336844239b63ad4Fcfd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view on etherscan
                </a>
              </div>
            </div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Max Supply</div>
            <div className="info_data">1,000,000,000,000,000</div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Circulating Tokens</div>
            <div className="info_data">999,500,000,000,000</div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Burned Tokens</div>
            <div className="info_data">500,000,000,000</div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Pooled Tokens</div>
            <div className="info_data">41,759,399,413,594</div>
            <div className="info_links"></div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Uni V3 Locked LP</div>
            <div className="info_data" id="no_bracket">
              Unicrypt V3 Locking
            </div>
            <div className="info_data">Currently in development</div>
            <div className="info_links"></div>
            <div className="hourglass"></div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Received Donations</div>
            <div className="info_data">41,759,399,413,594</div>
            <div className="info_links"></div>
          </div>
        </div>
      </div>

      <div className="triangle_floor"></div>
    </div>
  );
}

export default TokenInfo;
