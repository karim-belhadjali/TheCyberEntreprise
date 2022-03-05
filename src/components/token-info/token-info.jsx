import React from "react";
import "./token-info.scss";
import mascotSvg from "../../assets/webp/inu.webp";
import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";
function TokenInfo() {
  return (
    <div class="token_info">
      <div class="token_image"></div>
      <div class="token_info_border">
        <div class="token_info_container">
          <div class="token_info_element">
            <div class="info_title">contract address</div>
            <div class="info_data">
              0xd409BB122cc1CdaA5c1530f1E7Ff1512345477B9
            </div>
            <div class="info_links">
              <div class="link_element">
                <a href="#">copy address</a>
              </div>

              <div class="link_element">
                <a href="#">view on etherscan</a>
              </div>
            </div>
          </div>

          <div class="token_info_element">
            <div class="info_title">Initial Supply</div>
            <div class="info_data">1,000,000,000,000,000</div>
          </div>

          <div class="token_info_element">
            <div class="info_title">Burned Tokens</div>
            <div class="info_data">500,000,000,000</div>
          </div>

          <div class="token_info_element">
            <div class="info_title">Circulating Tokens</div>
            <div class="info_data">999,500,000,000,000</div>
          </div>

          <div class="token_info_element">
            <div class="info_title">Pooled Tokens</div>
            <div class="info_data">41,759,399,413,594</div>
            <div class="info_links">
              <div class="link_element">
                <a href="#">view on dextools</a>
              </div>
            </div>
          </div>

          <div class="token_info_element">
            <div class="info_title">Locked Liquidity</div>
            <div class="info_data" id="no_bracket">
              07/02/2022 03:14
            </div>
            <div class="info_data">Unlocks in 4 months, 2 days, 4 hours</div>
            <div class="info_links">
              <div class="link_element">
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
