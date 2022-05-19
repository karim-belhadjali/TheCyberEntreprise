import * as React from "react";
import { useState } from "react";
import { CalculatorInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";

import "./CalculatorScreenStyle.scss";

function CalculatorScreen() {
  return (
    <>
      <div className="calculator">
        <div className="calculator_container">
          <div className="calc_first">
            <div className="image_container">
              <div className="image">
                <div className="bag to_hide">
                  <img
                    src={require("../../assets/calculator/bag.webp")}
                    className="piece_bag"
                    alt=""
                  />
                  <img
                    src={require("../../assets/calculator/bag_logo_cybr.webp")}
                    className="piece_logo_cybr"
                    alt=""
                  />
                </div>
                <div className="calc to_hide">
                  <img
                    src={require("../../assets/calculator/calculator_main.webp")}
                    className="piece_calculator_main"
                    alt=""
                  />

                  <div className="calc_text">
                    <div className="visible_text"></div>
                    <div className="hidden_text">
                      What is your entry point? - Is that bag big enough? - Got
                      an exit strategy?
                    </div>
                  </div>

                  <div className="calc_numbers">
                    <div className="visible_text_numbers"></div>
                  </div>

                  <div className="calc_error">
                    <div className="visible_error">
                      <span>E</span>
                      <span>R</span>
                      <span>R</span>
                      <span>O</span>
                      <span>R</span>
                    </div>
                  </div>

                  <div className="calc_line"></div>

                  <div className="calc_shadow"></div>

                  <div className="calc_buttons_hover btn_calc_mc"></div>
                  <div className="calc_buttons_hover btn_calc_m_minus"></div>
                  <div className="calc_buttons_hover btn_calc_m_plus"></div>
                  <div className="calc_buttons_hover btn_calc_on"></div>
                  <div className="calc_buttons_hover btn_calc_ce"></div>
                  <div className="calc_buttons_hover btn_calc_7"></div>
                  <div className="calc_buttons_hover btn_calc_8"></div>
                  <div className="calc_buttons_hover btn_calc_9"></div>
                  <div className="calc_buttons_hover btn_calc_divide"></div>
                  <div className="calc_buttons_hover btn_calc_multiply"></div>
                  <div className="calc_buttons_hover btn_calc_4"></div>
                  <div className="calc_buttons_hover btn_calc_5"></div>
                  <div className="calc_buttons_hover btn_calc_6"></div>
                  <div className="calc_buttons_hover btn_calc_plus_minus"></div>
                  <div className="calc_buttons_hover btn_calc_minus"></div>
                  <div className="calc_buttons_hover btn_calc_1"></div>
                  <div className="calc_buttons_hover btn_calc_2"></div>
                  <div className="calc_buttons_hover btn_calc_3"></div>
                  <div className="calc_buttons_hover btn_calc_radical"></div>
                  <div className="calc_buttons_hover btn_calc_plus"></div>
                  <div className="calc_buttons_hover btn_calc_0"></div>
                  <div className="calc_buttons_hover btn_calc_dot"></div>
                  <div className="calc_buttons_hover btn_calc_equal"></div>
                  <div className="calc_buttons_hover btn_calc_percent"></div>
                  <div className="calc_buttons_hover btn_calc_slash"></div>
                </div>
                <div className="pen to_hide">
                  <img
                    src={require("../../assets/calculator/main_feather.webp")}
                    className="piece_main_feather"
                    alt=""
                  />
                  <img
                    src={require("../../assets/calculator/feather.webp")}
                    className="piece_feather"
                    alt=""
                  />
                  <img
                    src={require("../../assets/calculator/cyber.webp")}
                    className="piece_cyber"
                    alt=""
                  />
                  <img
                    src={require("../../assets/calculator/pen.webp")}
                    className="piece_pen"
                    alt=""
                  />
                  <div className="piece_spark">
                    <div className="piece_spark_el">
                      <img
                        src={require("../../assets/calculator/spark.webp")}
                        width="1"
                        height="1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="pen_hover to_hide"></div>

                <div className="ink to_hide">
                  <img
                    src={require("../../assets/calculator/ink.webp")}
                    className="piece_ink"
                    alt=""
                  />
                </div>

                <div className="calc_copy">
                  <div className="calc_buttons_hover btn_calc_mc"></div>
                  <div className="calc_buttons_hover btn_calc_m_minus"></div>
                  <div className="calc_buttons_hover btn_calc_m_plus"></div>
                  <div className="calc_buttons_hover btn_calc_on"></div>
                  <div className="calc_buttons_hover btn_calc_ce"></div>
                  <div className="calc_buttons_hover btn_calc_7 btn_calc_number">
                    7
                  </div>
                  <div className="calc_buttons_hover btn_calc_8 btn_calc_number">
                    8
                  </div>
                  <div className="calc_buttons_hover btn_calc_9 btn_calc_number">
                    9
                  </div>
                  <div className="calc_buttons_hover btn_calc_divide"></div>
                  <div className="calc_buttons_hover btn_calc_multiply"></div>
                  <div className="calc_buttons_hover btn_calc_4 btn_calc_number">
                    4
                  </div>
                  <div className="calc_buttons_hover btn_calc_5 btn_calc_number">
                    5
                  </div>
                  <div className="calc_buttons_hover btn_calc_6 btn_calc_number">
                    6
                  </div>
                  <div className="calc_buttons_hover btn_calc_plus_minus"></div>
                  <div className="calc_buttons_hover btn_calc_minus"></div>
                  <div className="calc_buttons_hover btn_calc_1 btn_calc_number">
                    1
                  </div>
                  <div className="calc_buttons_hover btn_calc_2 btn_calc_number">
                    2
                  </div>
                  <div className="calc_buttons_hover btn_calc_3 btn_calc_number">
                    3
                  </div>
                  <div className="calc_buttons_hover btn_calc_radical"></div>
                  <div className="calc_buttons_hover btn_calc_plus"></div>
                  <div className="calc_buttons_hover btn_calc_0 btn_calc_number">
                    0
                  </div>
                  <div className="calc_buttons_hover btn_calc_dot"></div>
                  <div className="calc_buttons_hover btn_calc_equal equal_btn"></div>
                  <div className="calc_buttons_hover btn_calc_percent"></div>
                  <div className="calc_buttons_hover btn_calc_slash"></div>
                </div>

                <div className="calc_egg egg_80085"></div>

                <div className="calc_egg egg_800"></div>

                <div className="calc_egg egg_90"></div>

                <div className="calc_egg egg_2026"></div>
              </div>
            </div>
            <div className="calculator_form">
              <div className="calc_title">CyberNation Calculator</div>
              <div className="calc_buttons">
                <div className="continue_button">
                  <span className="btn_text_scene_intro">
                    Select Your Currency
                  </span>
                </div>

                <div className="continue_button">
                  <span className="btn_text_scene_intro">
                    Select Your Token
                  </span>
                </div>
              </div>

              <div className="calc_box">
                <div className="double_field no_top_margin">
                  <div className="half_field">
                    <div className="input_text">Amount in Currency</div>
                    <div className="input_holder">
                      <input type="text" id="amount_currency" />
                      <label htmlFor="amount_currency">
                        Amount in Currency
                      </label>
                      <span className="token_name">USD</span>
                    </div>
                  </div>

                  <div className="or_field">OR</div>

                  <div className="half_field">
                    <div className="input_text">Amount in Tokens</div>
                    <div className="input_holder">
                      <input type="text" id="amount_tokens" />
                      <label htmlFor="amount_tokens">Amount in Tokens</label>
                      <span className="token_name">CYBR</span>
                    </div>
                  </div>
                </div>

                <div className="double_field">
                  <div className="half_field">
                    <div className="input_text">Target Token Marketcap</div>
                    <div className="input_holder">
                      <input type="text" id="target_marketcap" />
                      <label htmlFor="target_marketcap">
                        Target Token Marketcap
                      </label>
                      <span className="token_name">USD</span>
                    </div>
                  </div>

                  <div className="or_field">OR</div>

                  <div className="half_field">
                    <div className="input_text">Target Token Price</div>
                    <div className="input_holder">
                      <input type="text" id="target_token_price" />
                      <label htmlFor="target_token_price">
                        Target Token Price
                      </label>
                      <span className="token_name">USD</span>
                    </div>
                  </div>
                </div>

                <div className="estimated_container">
                  <div className="estimated_text">Estimated Value</div>
                  <div className="estimated_number">100,000 USD</div>
                </div>

                <div className="select_currency">
                  <div className="select_container">
                    <div className="select_btn">USD</div>
                    <div className="select_btn">EUR</div>
                    <div className="select_btn">GDP</div>
                    <div className="select_btn">RUB</div>
                    <div className="select_btn">CNY</div>
                    <div className="select_btn">INR</div>
                    <div className="select_btn">AUD</div>
                    <div className="select_btn">JPY</div>
                    <div className="select_btn">KRW</div>
                    <div className="select_btn">AED</div>
                    <div className="select_btn">TRY</div>
                    <div className="select_btn">NGN</div>
                  </div>
                </div>

                <div className="select_token hide_select">
                  <div className="select_container">
                    <div className="select_btn">CYBR</div>
                    <div className="select_btn inactive_btn">V</div>
                    <div className="select_btn inactive_btn">CYBRC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="calc_second">
            <div className="calc_stats">
              <div className="calc_tittle">Quick Estimates</div>
              <div className="horizontal_sep"></div>

              <div className="calc_stats_container">
                <div className="calc_stats_first calc_stats_border">
                  <div className="calc_subtitle">
                    <span className="text">MarketCap</span>{" "}
                    <span className="currency">USD</span>
                  </div>

                  <div className="calc_stats_value quick_line_1">
                    <span className="color_boxes color_box_green"></span> 500
                    Thousand
                  </div>
                  <div className="calc_stats_value quick_line_2">
                    <span className="color_boxes color_box_yellow"></span> 1
                    Million
                  </div>
                  <div className="calc_stats_value quick_line_3">
                    <span className="color_boxes color_box_red"></span> 2.5
                    Million
                  </div>
                  <div className="calc_stats_value quick_line_4">
                    <span className="color_boxes color_box_red"></span> 5
                    Million
                  </div>
                  <div className="calc_stats_value quick_line_5">
                    <span className="color_boxes color_box_red"></span> 10
                    Million
                  </div>
                </div>

                <div className="calc_stats_third">
                  <div className="calc_subtitle">
                    <span className="text">User Value</span>{" "}
                    <span className="currency">USD</span>
                  </div>

                  <div className="calc_stats_value quick_line_1">100</div>
                  <div className="calc_stats_value quick_line_2">1,000</div>
                  <div className="calc_stats_value quick_line_3">10,000</div>
                  <div className="calc_stats_value quick_line_4">100,000</div>
                  <div className="calc_stats_value quick_line_5">1,000,000</div>
                </div>
              </div>
            </div>

            <div className="calc_stats calc_stats_3">
              <div className="calc_tittle">Quick Comparisons</div>
              <div className="horizontal_sep"></div>

              <div className="calc_stats_container">
                <div className="calc_stats_project">
                  <div className="calc_subtitle extra_padding">
                    <span className="simple_text">Token</span>
                  </div>

                  <div className="calc_stats_value quick_comp_line_1">
                    <span className="token_logo doge"></span>Doge Coin
                  </div>
                  <div className="calc_stats_value quick_comp_line_2">
                    <span className="token_logo shiba"></span>Shiba Inu
                  </div>
                  <div className="calc_stats_value quick_comp_line_3">
                    <span className="token_logo saitama"></span>Saitama
                  </div>
                  <div className="calc_stats_value quick_comp_line_4">
                    <span className="token_logo floki"></span>Floki
                  </div>
                  <div className="calc_stats_value quick_comp_line_5">
                    <span className="token_logo doge_elon"></span>Doge ElonMars
                  </div>
                </div>

                <div className="calc_stats_first calc_stats_border">
                  <div className="calc_subtitle">
                    <span className="text">MarketCap</span>{" "}
                    <span className="currency">USD</span>
                  </div>

                  <div className="calc_stats_value quick_comp_line_1">
                    1 Million
                  </div>
                  <div className="calc_stats_value quick_comp_line_2">
                    5 Million
                  </div>
                  <div className="calc_stats_value quick_comp_line_3">
                    10 Million
                  </div>
                  <div className="calc_stats_value quick_comp_line_4">
                    50 Million
                  </div>
                  <div className="calc_stats_value quick_comp_line_5">
                    100 Million
                  </div>
                </div>

                <div className="calc_stats_third">
                  <div className="calc_subtitle">
                    <span className="text">User Value</span>{" "}
                    <span className="currency">USD</span>
                  </div>

                  <div className="calc_stats_value quick_comp_line_1">100</div>
                  <div className="calc_stats_value quick_comp_line_2">
                    1,000
                  </div>
                  <div className="calc_stats_value quick_comp_line_3">
                    10,000
                  </div>
                  <div className="calc_stats_value quick_comp_line_4">
                    100,000
                  </div>
                  <div className="calc_stats_value quick_comp_line_5">
                    1,000,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator_bottom_svg">
          <img src="design/svg/top-mask-bar.svg" width="1" height="1" alt="" />
        </div>
      </div>
      <InfoBox title="Guide" info={CalculatorInfos.information} />
    </>
  );
}

export default CalculatorScreen;
