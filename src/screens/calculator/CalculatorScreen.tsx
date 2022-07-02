import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  addHover,
  calcBtnHoverDown,
  calcBtnHoverEnter,
  calcBtnHoverOut,
  calcBtnHoverUp,
  calculatorAnimation,
  hideElement,
  penHoverAnimation,
  removeHover,
  showElement,
} from "src/animations/calculator";
import { getcurrency, getTokensInfo } from "src/api/CurrencyApi";
import { CalculatorInfos } from "src/assets/text/InfoTexts";
import InfoBox from "src/components/info-box/InfoBoxComponent";
import { mockedCurrencies, mockedTokens } from "src/data/CybrApidData";
import { lastTimeUpdated } from "src/utility/date";
import { useParams } from "react-router-dom";
import { handleUrlLanguage } from "src/utility/globalUtlities";
import "./CalculatorScreenStyle.scss";

// const InfoBox = lazy(() => import("src/components/info-box/InfoBoxComponent"));
const renderLoader = () => <p>Loading</p>;

function CalculatorScreen({
  data,
  language,
  urlLanguages,
}: {
  data: any;
  language: any;
  urlLanguages: any;
}) {
  const { urlLanguage } = useParams();
  const selectedLanguage = handleUrlLanguage(urlLanguage);

  const quick_line_1_ref = useRef<any>();
  const quick_line_2_ref = useRef<any>();
  const quick_line_3_ref = useRef<any>();
  const quick_line_4_ref = useRef<any>();
  const quick_line_5_ref = useRef<any>();
  const quick_line_2_1_ref = useRef<any>();
  const quick_line_2_2_ref = useRef<any>();
  const quick_line_2_3_ref = useRef<any>();
  const quick_line_2_4_ref = useRef<any>();
  const quick_line_2_5_ref = useRef<any>();
  const btn_calc_mc_ref = useRef<any>();
  const btn_calc_m_minus_ref = useRef<any>();
  const btn_calc_m_plus_ref = useRef<any>();
  const btn_calc_on_ref = useRef<any>();
  const btn_calc_ce_ref = useRef<any>();
  const btn_calc_7_ref = useRef<any>();
  const btn_calc_8_ref = useRef<any>();
  const btn_calc_9_ref = useRef<any>();
  const btn_calc_divide_ref = useRef<any>();
  const btn_calc_multiply_ref = useRef<any>();
  const btn_calc_4_ref = useRef<any>();
  const btn_calc_5_ref = useRef<any>();
  const btn_calc_6_ref = useRef<any>();
  const btn_calc_plus_minus_ref = useRef<any>();
  const btn_calc_1_ref = useRef<any>();
  const btn_calc_2_ref = useRef<any>();
  const btn_calc_3_ref = useRef<any>();
  const btn_calc_radical_ref = useRef<any>();
  const btn_calc_minus_ref = useRef<any>();
  const btn_calc_plus_ref = useRef<any>();
  const btn_calc_0_ref = useRef<any>();
  const btn_calc_dot_ref = useRef<any>();
  const btn_calc_equal_ref = useRef<any>();
  const btn_calc_percent_ref = useRef<any>();
  const btn_calc_slash_ref = useRef<any>();
  const piece_feather_ref = useRef<any>();
  const piece_cyber_ref = useRef<any>();
  const select_currency_ref = useRef<any>();
  const select_token_ref = useRef<any>();
  const amount_currency_ref = useRef<any>();
  const amount_tokens_ref = useRef<any>();
  const target_token_price_ref = useRef<any>();
  const target_marketcap_ref = useRef<any>();
  const current_currency_ref = useRef<any>();

  const [hidenCurrencyState, sethidenCurrencyState] = useState<Boolean>(true);
  const [hidenTokenState, sethidenTokenState] = useState<Boolean>(true);
  const [currency, setCurrency] = useState<any>("USD");
  const [token, setToken] = useState<any>("CYBR");

  const [currencyAmount, setcurrencyAmount] = useState<any>("0");
  const [tokenAmount, settokenAmount] = useState<any>("0");
  const [targetMarketCap, settargetMarketCap] = useState<any>("0");
  const [TargetTokenPrice, setTargetTokenPrice] = useState<any>("0");

  const [estimatedValue, setestimatedValue] = useState("0");
  const [firstEstimate, setfirstEstimate] = useState<any>("0");
  const [secondEstimate, setsecondEstimate] = useState<any>("0");
  const [thirdEstimate, setthirdEstimate] = useState<any>("0");
  const [fourthEstimate, setfourthEstimate] = useState<any>("0");
  const [fifthEstimate, setfifthEstimate] = useState<any>("0");

  const [firstTokenEstimate, setfirstTokenEstimate] = useState("0");
  const [secondTokenEstimate, setsecondTokenEstimate] = useState("0");
  const [thirdTokenEstimate, setthirdTokenEstimate] = useState("0");
  const [fourthTokenEstimate, setfourthTokenEstimate] = useState("0");
  const [fifthTokenEstimate, setfifthTokenEstimate] = useState("0");

  const [currencies, setcurrencies] = useState({});
  const [tokens, settokens] = useState<any>(mockedTokens);

  const cybrPrice = data.usdPrice;
  const cybrSuply = data.circulatingSupply;

  const handleTokenClassNames = (base: string, index: number): string => {
    let newIndex = index + 1;
    return base + newIndex;
  };
  const handleTokenlogos = (name: string): string => {
    const base = "token_logo";
    switch (name) {
      case "Shiba Inu": {
        return base + " shiba";
      }
      case "ApeCoin": {
        return base + " ape";
      }
      case "Terra": {
        return base + " terra";
      }
      case "LooksRare": {
        return base + " looks";
      }
      case "Floki Inu": {
        return base + " floki";
      }

      default:
        return base + " shiba";
    }
  };

  const handleCurrencyVisibilty = () => {
    if (hidenCurrencyState && hidenTokenState) {
      showElement(select_currency_ref.current);
      sethidenCurrencyState(false);
    }
    if (hidenCurrencyState && !hidenTokenState) {
      hideElement(select_token_ref.current);
      sethidenTokenState(true);
      showElement(select_currency_ref.current);
      sethidenCurrencyState(false);
    }
    if (!hidenCurrencyState) {
      hideElement(select_currency_ref.current);
      sethidenCurrencyState(true);
    }
  };

  const handleCurrencySelection = (currencySelected) => {
    setCurrency(currencySelected);
    handleCurrencyVisibilty();
  };

  const handleTokenVisibilty = () => {
    if (hidenCurrencyState && hidenTokenState) {
      showElement(select_token_ref.current);
      sethidenTokenState(false);
    }
    if (hidenTokenState && !hidenCurrencyState) {
      hideElement(select_currency_ref.current);
      sethidenCurrencyState(true);
      showElement(select_token_ref.current);
      sethidenTokenState(false);
    }
    if (!hidenTokenState) {
      hideElement(select_token_ref.current);
      sethidenTokenState(true);
    }
  };

  const handleTokenSelection = (tokenSelected) => {
    setToken(tokenSelected);
    handleTokenVisibilty();
  };

  const handleFromatedMarketCap = (SplitedMarketCap): number => {
    switch (SplitedMarketCap[1]) {
      case "million": {
        return parseFloat(SplitedMarketCap[0]) * 1000000;
      }
      case "billion": {
        return parseFloat(SplitedMarketCap[0]) * 1000000000;
      }
      case "thousand": {
        return parseFloat(SplitedMarketCap[0]) * 1000;
      }
      default: {
        return parseFloat(SplitedMarketCap[0]) * 1000000;
      }
    }
  };

  const handleEstimatedValue = (value: any) => {
    const firstMarketCap = "500000";
    const secondMarketCap = "1000000";
    const thirdMarketCap = "2500000";
    const fourthMarketCap = "5000000";
    const fifthMarketCap = "10000000";
    const firstSplitedMarketCap = tokens[0].formattedMarketCap.split(" ");
    const secondSplitedMarketCap = tokens[1].formattedMarketCap.split(" ");
    const thirdSplitedMarketCap = tokens[2].formattedMarketCap.split(" ");
    const fourthSplitedMarketCap = tokens[3].formattedMarketCap.split(" ");
    const fifthSplitedMarketCap = tokens[4].formattedMarketCap.split(" ");

    const firstTokenMarketCap = handleFromatedMarketCap(firstSplitedMarketCap);
    const secondTokenMarketCap = handleFromatedMarketCap(
      secondSplitedMarketCap
    );
    const thirdTokenMarketCap = handleFromatedMarketCap(thirdSplitedMarketCap);
    const fourthTokenMarketCap = handleFromatedMarketCap(
      fourthSplitedMarketCap
    );
    const fifthTokenMarketCap = handleFromatedMarketCap(fifthSplitedMarketCap);

    if (value !== "" && target_token_price_ref.current.value !== "") {
      const amount = new Intl.NumberFormat("en").format(
        parseFloat(value.replace(/,/g, "")) *
          parseFloat(target_token_price_ref.current.value.replace(/,/g, ""))
      );

      setestimatedValue(amount);
      setfirstEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(firstMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );

      setsecondEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(secondMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setthirdEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(thirdMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfourthEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(fourthMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );

      setfifthEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(fifthMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfirstTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (firstTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setsecondTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (secondTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setthirdTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (thirdTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfourthTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (fourthTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfifthTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (fifthTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
    } else if (value !== "" && amount_currency_ref.current.value !== "") {
      setestimatedValue(amount_currency_ref.current.value);
      setfirstEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(firstMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );

      setsecondEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(secondMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setthirdEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(thirdMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfourthEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(fourthMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );

      setfifthEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (parseFloat(fifthMarketCap) / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfirstTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (firstTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setsecondTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (secondTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setthirdTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (thirdTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfourthTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (fourthTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
      setfifthTokenEstimate(
        new Intl.NumberFormat("en").format(
          parseFloat(
            (fifthTokenMarketCap / parseFloat(cybrSuply)).toFixed(10)
          ) * parseFloat(amount_tokens_ref.current.value.replace(/,/g, ""))
        )
      );
    } else if (value === "") {
      setestimatedValue("0");
      setfirstEstimate("0");
      setsecondEstimate("0");
      setthirdEstimate("0");
      setfourthEstimate("0");
      setfifthEstimate("0");
      setfirstTokenEstimate("0");
      setsecondTokenEstimate("0");
      setthirdTokenEstimate("0");
      setfourthTokenEstimate("0");
      setfifthTokenEstimate("0");
    }
  };

  const handleAmountInTokens = (value: string) => {
    amount_currency_ref.current.value = "";
    setestimatedValue("0");
    setcurrencyAmount("0");
    let currentCurrency = currencies[currency];
    if (value === "") {
      setcurrencyAmount("");
      handleEstimatedValue("");
      return;
    }
    const calculation =
      parseFloat(value.replace(/,/g, "")) *
      parseFloat(cybrPrice) *
      currentCurrency;

    const amount = new Intl.NumberFormat("en").format(calculation);
    amount_currency_ref.current.value = amount;
    setcurrencyAmount(amount);
    handleEstimatedValue(amount_tokens_ref.current.value);
  };

  const handleAmountCurrency = (value: string) => {
    amount_tokens_ref.current.value = "";
    settokenAmount("0");
    let currentCurrency = currencies[currency];
    if (value === "") {
      settokenAmount("");
      handleEstimatedValue("");
      return;
    }
    const calculation =
      parseFloat(value.replace(/,/g, "")) /
      currentCurrency /
      parseFloat(cybrPrice);
    const amount = new Intl.NumberFormat("en").format(calculation);
    settokenAmount(amount);
    amount_tokens_ref.current.value = amount;

    handleEstimatedValue(amount_tokens_ref.current.value);
  };

  const handleTargetMarketCap = (value: string) => {
    target_token_price_ref.current.value = "";
    setTargetTokenPrice("0");
    if (value === "") {
      setTargetTokenPrice("");
      handleEstimatedValue("");
      return;
    }
    const amount = parseFloat(value.replace(/,/g, "")) / parseFloat(cybrSuply);
    target_token_price_ref.current.value = amount.toFixed(10);
    setTargetTokenPrice(amount);
    handleEstimatedValue(amount_tokens_ref.current.value);
  };

  const handleTargetTokenPrice = (value: string) => {
    target_marketcap_ref.current.value = "";
    if (value === "") {
      settargetMarketCap("");
      handleEstimatedValue("");
      return;
    }
    const amount = new Intl.NumberFormat("en").format(
      parseFloat(value.replace(/,/g, "")) * parseFloat(cybrSuply)
    );
    settargetMarketCap(amount);

    target_marketcap_ref.current.value = amount;
    handleEstimatedValue(amount_tokens_ref.current.value);
  };

  const getCurrenciesData = async () => {
    const currencies = await getcurrency();
    localStorage.setItem("currencies", currencies);
    setcurrencies(JSON.parse(localStorage.getItem("currencies")!!));
  };

  const getTokensData = async () => {
    const tokensData = await getTokensInfo();
    if (tokensData.length !== 0) {
      settokens(tokensData);
    }
  };

  useEffect(() => {
    calculatorAnimation();
    localStorage.setItem("currencies", JSON.stringify(mockedCurrencies));
    setcurrencies(JSON.parse(localStorage.getItem("currencies")!!));

    if (
      localStorage.getItem("currencies") === null ||
      lastTimeUpdated(localStorage.getItem("last_time_updated")!!)
    ) {
      getCurrenciesData();
    }
    getTokensData();
  }, []);

  useEffect(() => {
    handleAmountCurrency(amount_currency_ref.current.value);
    handleTargetMarketCap(target_marketcap_ref.current.value);
    handleEstimatedValue(amount_tokens_ref.current.value);
  }, [currency]);
  useEffect(() => {
    handleAmountCurrency(amount_currency_ref.current.value);
    handleTargetMarketCap(target_marketcap_ref.current.value);
    handleEstimatedValue(amount_tokens_ref.current.value);
  }, [token]);
  useEffect(() => {
    urlLanguages(selectedLanguage);
  }, [urlLanguages, selectedLanguage]);

  return (
    <div>
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

                  <div
                    className="calc_buttons_hover btn_calc_mc"
                    ref={btn_calc_mc_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_m_minus"
                    ref={btn_calc_m_minus_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_m_plus"
                    ref={btn_calc_m_plus_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_on"
                    ref={btn_calc_on_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_ce"
                    ref={btn_calc_ce_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_7"
                    ref={btn_calc_7_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_8"
                    ref={btn_calc_8_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_9"
                    ref={btn_calc_9_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_divide"
                    ref={btn_calc_divide_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_multiply"
                    ref={btn_calc_multiply_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_4"
                    ref={btn_calc_4_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_5"
                    ref={btn_calc_5_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_6"
                    ref={btn_calc_6_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_plus_minus"
                    ref={btn_calc_plus_minus_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_minus"
                    ref={btn_calc_minus_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_1"
                    ref={btn_calc_1_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_2"
                    ref={btn_calc_2_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_3"
                    ref={btn_calc_3_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_radical"
                    ref={btn_calc_radical_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_plus"
                    ref={btn_calc_plus_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_0"
                    ref={btn_calc_0_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_dot"
                    ref={btn_calc_dot_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_equal"
                    ref={btn_calc_equal_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_percent"
                    ref={btn_calc_percent_ref}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_slash"
                    ref={btn_calc_slash_ref}
                  ></div>
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
                    ref={piece_feather_ref}
                    alt=""
                  />
                  <img
                    src={require("../../assets/calculator/cyber.webp")}
                    className="piece_cyber"
                    ref={piece_cyber_ref}
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
                <div
                  className="pen_hover to_hide"
                  onMouseEnter={() =>
                    penHoverAnimation(
                      piece_feather_ref.current,
                      piece_cyber_ref.current
                    )
                  }
                ></div>

                <div className="ink to_hide">
                  <img
                    src={require("../../assets/calculator/ink.webp")}
                    className="piece_ink"
                    alt=""
                  />
                </div>

                <div className="calc_copy">
                  <div
                    className="calc_buttons_hover btn_calc_mc"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_mc_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_mc_ref.current)}
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_mc_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_mc_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_m_minus"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_m_minus_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_m_minus_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_m_minus_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_m_minus_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_m_plus"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_m_plus_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_m_plus_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_m_plus_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_m_plus_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_on"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_on_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_on_ref.current)}
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_on_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_on_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_ce"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_ce_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_ce_ref.current)}
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_ce_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_ce_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_7 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_7_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_7_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_7_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_7_ref.current)}
                  >
                    7
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_8 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_8_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_8_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_8_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_8_ref.current)}
                  >
                    8
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_9 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_9_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_9_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_9_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_9_ref.current)}
                  >
                    9
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_divide"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_divide_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_divide_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_divide_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_divide_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_multiply"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_multiply_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_multiply_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_multiply_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_multiply_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_4 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_4_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_4_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_4_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_4_ref.current)}
                  >
                    4
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_5 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_5_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_5_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_5_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_5_ref.current)}
                  >
                    5
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_6 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_6_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_6_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_6_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_6_ref.current)}
                  >
                    6
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_plus_minus"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_plus_minus_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_plus_minus_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_plus_minus_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_plus_minus_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_minus"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_minus_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_minus_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_minus_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_minus_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_1 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_1_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_1_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_1_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_1_ref.current)}
                  >
                    1
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_2 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_2_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_2_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_2_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_2_ref.current)}
                  >
                    2
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_3 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_3_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_3_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_3_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_3_ref.current)}
                  >
                    3
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_radical"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_radical_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_radical_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_radical_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_radical_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_plus"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_plus_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_plus_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_plus_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_plus_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_0 btn_calc_number"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_0_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_0_ref.current)}
                    onMouseDown={() => calcBtnHoverDown(btn_calc_0_ref.current)}
                    onMouseUp={() => calcBtnHoverUp(btn_calc_0_ref.current)}
                  >
                    0
                  </div>
                  <div
                    className="calc_buttons_hover btn_calc_dot"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_dot_ref.current)
                    }
                    onMouseOut={() => calcBtnHoverOut(btn_calc_dot_ref.current)}
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_dot_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_dot_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_equal equal_btn"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_equal_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_equal_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_equal_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_equal_ref.current)}
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_percent"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_percent_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_percent_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_percent_ref.current)
                    }
                    onMouseUp={() =>
                      calcBtnHoverUp(btn_calc_percent_ref.current)
                    }
                  ></div>
                  <div
                    className="calc_buttons_hover btn_calc_slash"
                    onMouseEnter={() =>
                      calcBtnHoverEnter(btn_calc_slash_ref.current)
                    }
                    onMouseOut={() =>
                      calcBtnHoverOut(btn_calc_slash_ref.current)
                    }
                    onMouseDown={() =>
                      calcBtnHoverDown(btn_calc_slash_ref.current)
                    }
                    onMouseUp={() => calcBtnHoverUp(btn_calc_slash_ref.current)}
                  ></div>
                </div>

                <div className="calc_egg egg_80085"></div>

                <div className="calc_egg egg_800"></div>

                <div className="calc_egg egg_90"></div>

                <div className="calc_egg egg_2026"></div>
                <div className="calc_egg egg_021"></div>
              </div>
            </div>
            <div className="calculator_form">
              <div className="calc_title">CyberNation Calculator</div>
              <div className="calc_buttons">
                <div
                  className="continue_button"
                  onClick={handleCurrencyVisibilty}
                >
                  <span className="btn_text_scene_intro noselect">
                    Select Your Currency
                  </span>
                </div>

                <div
                  className="continue_button noselect"
                  onClick={handleTokenVisibilty}
                >
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
                      <input
                        type="text"
                        id="amount_currency"
                        ref={amount_currency_ref}
                        onChange={(event) =>
                          handleAmountCurrency(event.target.value)
                        }
                      />

                      <label htmlFor="amount_currency">
                        Amount in Currency
                      </label>
                      <span className="token_name" ref={current_currency_ref}>
                        {currency}
                      </span>
                    </div>
                  </div>

                  <div className="or_field">OR</div>

                  <div className="half_field">
                    <div className="input_text">Amount in Tokens</div>
                    <div className="input_holder">
                      <input
                        type="text"
                        id="amount_tokens"
                        ref={amount_tokens_ref}
                        onChange={(event) =>
                          handleAmountInTokens(event.target.value)
                        }
                      />
                      <label htmlFor="amount_tokens">Amount in Tokens</label>
                      <span className="token_name">{token}</span>
                    </div>
                  </div>
                </div>

                <div className="double_field">
                  <div className="half_field">
                    <div className="input_text">Target Token Marketcap</div>
                    <div className="input_holder">
                      <input
                        type="text"
                        id="target_marketcap"
                        ref={target_marketcap_ref}
                        onChange={(event) =>
                          handleTargetMarketCap(event.target.value)
                        }
                      />

                      <label htmlFor="target_marketcap">
                        Target Token Marketcap
                      </label>
                      <span className="token_name">{currency}</span>
                    </div>
                  </div>

                  <div className="or_field">OR</div>

                  <div className="half_field">
                    <div className="input_text">Target Token Price</div>
                    <div className="input_holder">
                      <input
                        type="text"
                        id="target_token_price"
                        ref={target_token_price_ref}
                        onChange={(event) =>
                          handleTargetTokenPrice(event.target.value)
                        }
                      />

                      <label htmlFor="target_token_price">
                        Target Token Price
                      </label>
                      <span className="token_name">{currency}</span>
                    </div>
                  </div>
                </div>

                <div className="estimated_container">
                  <div className="estimated_text">Estimated Value</div>
                  <div className="estimated_number">
                    {estimatedValue} {currency}
                  </div>
                </div>

                <div
                  className="select_currency hide_select"
                  ref={select_currency_ref}
                >
                  <div className="select_container">
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("USD")}
                    >
                      USD
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("EUR")}
                    >
                      EUR
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("GBP")}
                    >
                      GBP
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("RUB")}
                    >
                      RUB
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("CNY")}
                    >
                      CNY
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("INR")}
                    >
                      INR
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("AUD")}
                    >
                      AUD
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("JPY")}
                    >
                      JPY
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("KRW")}
                    >
                      KRW
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("AED")}
                    >
                      AED
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("TRY")}
                    >
                      TRY
                    </div>
                    <div
                      className="select_btn"
                      onClick={() => handleCurrencySelection("NGN")}
                    >
                      NGN
                    </div>
                  </div>
                </div>

                <div
                  className="select_token hide_select"
                  ref={select_token_ref}
                >
                  <div className="select_container">
                    <div
                      className="select_btn"
                      onClick={() => handleTokenSelection("CYBR")}
                    >
                      CYBR
                    </div>
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
                    <span className="text">MarketCap</span>
                    <span className="currency">{currency}</span>
                  </div>

                  <div
                    className="calc_stats_value quick_line_1"
                    ref={quick_line_1_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_1_ref.current,
                        quick_line_2_1_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_1_ref.current,
                        quick_line_2_1_ref.current
                      )
                    }
                  >
                    <span className="color_boxes color_box_green"></span> 500
                    Thousand
                  </div>
                  <div
                    className="calc_stats_value quick_line_2"
                    ref={quick_line_2_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_2_ref.current,
                        quick_line_2_2_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_2_ref.current,
                        quick_line_2_2_ref.current
                      )
                    }
                  >
                    <span className="color_boxes color_box_yellow"></span> 1
                    Million
                  </div>
                  <div
                    className="calc_stats_value quick_line_3"
                    ref={quick_line_3_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_3_ref.current,
                        quick_line_2_3_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_3_ref.current,
                        quick_line_2_3_ref.current
                      )
                    }
                  >
                    <span className="color_boxes color_box_red"></span> 2.5
                    Million
                  </div>
                  <div
                    className="calc_stats_value quick_line_4"
                    ref={quick_line_4_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_4_ref.current,
                        quick_line_2_4_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_4_ref.current,
                        quick_line_2_4_ref.current
                      )
                    }
                  >
                    <span className="color_boxes color_box_red"></span> 5
                    Million
                  </div>
                  <div
                    className="calc_stats_value quick_line_5"
                    ref={quick_line_5_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_5_ref.current,
                        quick_line_2_5_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_5_ref.current,
                        quick_line_2_5_ref.current
                      )
                    }
                  >
                    <span className="color_boxes color_box_red"></span> 10
                    Million
                  </div>
                </div>

                <div className="calc_stats_third">
                  <div className="calc_subtitle">
                    <span className="text">User Value</span>
                    <span className="currency">{currency}</span>
                  </div>

                  <div
                    className="calc_stats_value quick_line_1"
                    ref={quick_line_2_1_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_2_1_ref.current,
                        quick_line_1_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_2_1_ref.current,
                        quick_line_1_ref.current
                      )
                    }
                  >
                    {firstEstimate}
                  </div>
                  <div
                    className="calc_stats_value quick_line_2"
                    ref={quick_line_2_2_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_2_2_ref.current,
                        quick_line_2_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_2_2_ref.current,
                        quick_line_2_ref.current
                      )
                    }
                  >
                    {secondEstimate}
                  </div>
                  <div
                    className="calc_stats_value quick_line_3"
                    ref={quick_line_2_3_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_2_3_ref.current,
                        quick_line_3_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_2_3_ref.current,
                        quick_line_3_ref.current
                      )
                    }
                  >
                    {thirdEstimate}
                  </div>
                  <div
                    className="calc_stats_value quick_line_4"
                    ref={quick_line_2_4_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_2_4_ref.current,
                        quick_line_4_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_2_4_ref.current,
                        quick_line_4_ref.current
                      )
                    }
                  >
                    {fourthEstimate}
                  </div>
                  <div
                    className="calc_stats_value quick_line_5"
                    ref={quick_line_2_5_ref}
                    onMouseEnter={() =>
                      addHover(
                        quick_line_2_5_ref.current,
                        quick_line_5_ref.current
                      )
                    }
                    onMouseLeave={() =>
                      removeHover(
                        quick_line_2_5_ref.current,
                        quick_line_5_ref.current
                      )
                    }
                  >
                    {fifthEstimate}
                  </div>
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
                  {tokens.map((token: any, index: number) => {
                    return (
                      <div
                        className={handleTokenClassNames(
                          "calc_stats_value quick_comp_line_",
                          index
                        )}
                      >
                        <span className={handleTokenlogos(token.title)}></span>
                        {token.title}
                      </div>
                    );
                  })}
                </div>

                <div className="calc_stats_first calc_stats_border">
                  <div className="calc_subtitle">
                    <span className="text">MarketCap</span>
                    <span className="currency">{currency}</span>
                  </div>
                  {tokens.map((token: any, index: number) => {
                    return (
                      <div
                        className={handleTokenClassNames(
                          "calc_stats_value quick_comp_line_",
                          index
                        )}
                      >
                        {token.formattedMarketCap}
                      </div>
                    );
                  })}
                </div>

                <div className="calc_stats_third">
                  <div className="calc_subtitle">
                    <span className="text">User Value</span>
                    <span className="currency">{currency}</span>
                  </div>

                  <div className="calc_stats_value quick_comp_line_1">
                    {firstTokenEstimate}
                  </div>
                  <div className="calc_stats_value quick_comp_line_2">
                    {secondTokenEstimate}{" "}
                  </div>
                  <div className="calc_stats_value quick_comp_line_3">
                    {thirdTokenEstimate}{" "}
                  </div>
                  <div className="calc_stats_value quick_comp_line_4">
                    {fourthTokenEstimate}{" "}
                  </div>
                  <div className="calc_stats_value quick_comp_line_5">
                    {fifthTokenEstimate}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoBox title="Guide" info={CalculatorInfos.information} last={true} />
    </div>
  );
}

export default CalculatorScreen;
