import React from "react";
import "./token-info.scss";
function TokenInfo() {
  return (
    <div className="token_info">
      <div className="token_image"></div>
      <div className="token_info_border">
        <div className="token_info_container">
          <div className="token_info_element">
            <div className="info_title">contract address</div>
            <div className="info_data">
              0xd409BB122cc1CdaA5c1530f1E7Ff1512345477B9
            </div>
            <div className="info_links">
              <div className="link_element">
                <a href="#">copy address</a>
              </div>

              <div className="link_element">
                <a href="#">view on etherscan</a>
              </div>
            </div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Initial Supply</div>
            <div className="info_data">1,000,000,000,000,000</div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Burned Tokens</div>
            <div className="info_data">500,000,000,000</div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Circulating Tokens</div>
            <div className="info_data">999,500,000,000,000</div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Pooled Tokens</div>
            <div className="info_data">41,759,399,413,594</div>
            <div className="info_links">
              <div className="link_element">
                <a href="#">view on dextools</a>
              </div>
            </div>
          </div>

          <div className="token_info_element">
            <div className="info_title">Locked Liquidity</div>
            <div className="info_data" id="no_bracket">
              07/02/2022 03:14
            </div>
            <div className="info_data">Unlocks in 4 months, 2 days, 4 hours</div>
            <div className="info_links">
              <div className="link_element">
                <a href="#">view on unicrypt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenInfo;
