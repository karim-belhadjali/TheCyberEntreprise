import React, { useRef } from "react";
import { useEffect } from "react";

import { initalCardNumber, prepareCardNumber } from "src/animations/documents";
import { creditCardAnimationEnter } from "src/animations/documents";

import "./CreditCardStyle.scss";

function CreditCard() {
  const cyberLinesRef = useRef<any>();
  const cardNumberCirculationRef = useRef<any>();
  const cardNumberContainerRef = useRef<any>();
  const cardNumberInitialRef = useRef<any>();

  useEffect(() => {
    prepareCardNumber(cardNumberContainerRef.current);
    initalCardNumber(cardNumberInitialRef.current);
  }, [cardNumberContainerRef, cardNumberInitialRef]);

  return (
    <div>
      <img
        src={require("../../../assets/creditors/credit_card.png")}
        width="340"
        height="288"
        className="credit_card"
        alt=""
        onMouseEnter={() =>
          creditCardAnimationEnter(
            cyberLinesRef.current,
            cardNumberCirculationRef.current
          )
        }
      />
      <div className="logo_gray_layer">
        <img
          src={require("../../../assets/creditors/cyber_line.png")}
          className="cyber_lines"
          alt=""
          ref={cyberLinesRef}
        />
      </div>
      <img
        src={require("../../../assets/creditors/logo_crop.webp")}
        className="logo_crop"
        alt=""
      />
      <div className="credit_card_name">
        <span className="date">6/26</span>
        ETHAN BARKER
      </div>
      <div className="card_number">
        <div className="card_number_top_fade">
          <div className="fade_full_color"></div>
        </div>
        <div
          className="card_number_container"
          ref={cardNumberContainerRef}
        ></div>
        <div className="card_number_initial" ref={cardNumberInitialRef}>
          1000 0000 0000 0000
        </div>
        <div className="card_number_circulating" ref={cardNumberCirculationRef}>
          0941 3124 2556 7696
        </div>
        <div className="card_number_bottom_fade">
          <div className="fade_full_color"></div>
        </div>
      </div>

      <div className="credit_card_hover"></div>
    </div>
  );
}

export default CreditCard;