import { anime } from "react-animejs-wrapper";

// Start Feather Animation

export const penHoverAnimation = (piece_feather, piece_cyber) => {
  var tl = anime.timeline({
    easing: "easeOutExpo",
  });

  tl.add({
    targets: piece_feather,
    opacity: 0,
    duration: 50,
  })

    .add({
      targets: piece_cyber,
      opacity: 1,
      duration: 50,
    })
    .add({
      targets: piece_cyber,
      opacity: 0,
      duration: 50,
    })
    .add({
      targets: piece_feather,
      opacity: 1,
      duration: 50,
    })
    .add({
      targets: piece_feather,
      opacity: 0,
      duration: 50,
    })

    .add({
      targets: piece_cyber,
      opacity: 1,
      duration: 50,
    })
    .add({
      targets: piece_cyber,
      opacity: 0,
      duration: 50,
    })
    .add({
      targets: piece_feather,
      opacity: 1,
      duration: 50,
    })
    .add({
      targets: piece_feather,
      opacity: 0,
      duration: 50,
    })

    .add({
      targets: piece_cyber,
      opacity: 1,
      duration: 50,
    })
    .add({
      targets: piece_cyber,
      opacity: 0,
      duration: 50,
    })
    .add({
      targets: piece_feather,
      opacity: 1,
      duration: 50,
    });
};

// Start Feather Animation

export const addHover = (element1, element2) => {
  element1.classList.add("hover_background");
  element2.classList.add("hover_background");
};
export const removeHover = (element1, element2) => {
  element1.classList.remove("hover_background");
  element2.classList.remove("hover_background");
};

// END of Feather Animation

// Start Calc Button Hover

export const calcBtnHoverEnter = (element) => {
  element.classList.add("visible_opacity_half");
};
export const calcBtnHoverOut = (element) => {
  element.classList.remove("visible_opacity_half");
};
export const calcBtnHoverDown = (element) => {
  element.classList.add("visible_opacity_full");
};
export const calcBtnHoverUp = (element) => {
  element.classList.remove("visible_opacity_full");
};

// End Calc Button Hover

export const calculatorAnimation = (calcText) => {
  // Estimates Hover
  var quick_line_1 = document.getElementsByClassName("quick_line_1");
  var quick_line_2 = document.getElementsByClassName("quick_line_2");
  var quick_line_3 = document.getElementsByClassName("quick_line_3");
  var quick_line_4 = document.getElementsByClassName("quick_line_4");
  var quick_line_5 = document.getElementsByClassName("quick_line_5");

  var quick_comp_line_1 = document.getElementsByClassName("quick_comp_line_1");
  var quick_comp_line_2 = document.getElementsByClassName("quick_comp_line_2");
  var quick_comp_line_3 = document.getElementsByClassName("quick_comp_line_3");
  var quick_comp_line_4 = document.getElementsByClassName("quick_comp_line_4");
  var quick_comp_line_5 = document.getElementsByClassName("quick_comp_line_5");

  function addHover(elArray) {
    for (let i = 0; i < elArray.length; i++) {
      let element = elArray[i];
      element.addEventListener("mouseenter", function () {
        for (let i = 0; i < elArray.length; i++) {
          elArray[i].classList.add("hover_background");
        }
      });

      element.addEventListener("mouseleave", function () {
        for (let i = 0; i < elArray.length; i++) {
          elArray[i].classList.remove("hover_background");
        }
      });
    }
  }

  addHover(quick_line_1);
  addHover(quick_line_2);
  addHover(quick_line_3);
  addHover(quick_line_4);
  addHover(quick_line_5);

  addHover(quick_comp_line_1);
  addHover(quick_comp_line_2);
  addHover(quick_comp_line_3);
  addHover(quick_comp_line_4);
  addHover(quick_comp_line_5);

  // END of Estimates Hover
  // Star Animation

  function sparkPlay() {
    let spark = document.getElementsByClassName("piece_spark_el")[0];

    anime({
      targets: spark,
      width: "100%",
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }
  sparkPlay();
  // END of Star Animation

  var btn_calc_on = document.getElementsByClassName("btn_calc_on");
  var btn_calc_ce = document.getElementsByClassName("btn_calc_ce");

  // Start Calculator Text Adding
  var calc_text = document.getElementsByClassName("hidden_text")[0].innerHTML;
  var visible_text = document.getElementsByClassName("visible_text")[0];

  for (var i = 0; i < calc_text.length; i++) {
    let spanEl = document.createElement("span");

    if (calc_text.charAt(i) === "-") {
      spanEl.classList.add("space_text");
    } else {
      let spanText = document.createTextNode(calc_text.charAt(i));
      spanEl.appendChild(spanText);
    }

    visible_text.appendChild(spanEl);
  }
  // END Calculator Text Adding

  // Start Animate Text

  var initialPosition = 165;
  var messageWidth = visible_text.offsetWidth;

  var total = messageWidth - messageWidth * 2;
  var textTimeout;
  var movingText = false;
  var calculatorState = "on";

  function moveText() {
    movingText = true;
    initialPosition = initialPosition - 15;

    visible_text.style.left = initialPosition + "px";

    if (initialPosition < total) {
      initialPosition = 165;
    }

    textTimeout = setTimeout(moveText, 300);
  }

  moveText();

  // Stop Animate Text

  // Start CE Click
  var visible_text_numbers = document.getElementsByClassName(
    "visible_text_numbers"
  )[0];
  var written_number = "";
  var blink_line = document.getElementsByClassName("calc_line")[0];

  btn_calc_ce[1].addEventListener("click", function () {
    if (calculatorState === "on") {
      initialPosition = 165 + 15;
      visible_text_numbers.innerHTML = "";
      written_number = "";

      if (movingText === false) {
        blink_line.style.display = "block";
      }
    }
  });

  // END CE Click

  // Start ON/OFF Click

  btn_calc_on[1].addEventListener("click", function () {
    if (calculatorState === "on") {
      initialPosition = 165 + 15;
      visible_text.style.left = initialPosition + "px";
      clearTimeout(textTimeout);
      movingText = false;
      blink_line.style.display = "none";
      calculatorState = "off";
      written_number = "";
      visible_text_numbers.innerHTML = "";
    } else {
      moveText();
      calculatorState = "on";
    }
  });

  // END ON/OFF Click

  // Start Click On Numbers

  var numeric_btns = document.getElementsByClassName("btn_calc_number");

  for (let i = 0; i < numeric_btns.length; i++) {
    numeric_btns[i].addEventListener("click", function () {
      if (calculatorState === "on") {
        // stop the default text
        if (movingText === true) {
          initialPosition = 165 + 15;
          visible_text.style.left = initialPosition + "px";
          clearTimeout(textTimeout);

          movingText = false;
        }

        // add spans with the numbers
        let clicked_number = this.innerHTML;
        let spanEl = document.createElement("span");

        let spanText = document.createTextNode(clicked_number);
        spanEl.appendChild(spanText);
        visible_text_numbers.appendChild(spanEl);

        // hide blinking line
        blink_line.style.display = "none";

        // add numbers to variable

        written_number = written_number + clicked_number;
      }
    });
  }

  // END Click On Numbers

  // Start Hit Equal
  var equal_btn = document.getElementsByClassName("equal_btn")[0];
  var calcErrorMessage = document.getElementsByClassName("calc_error")[0];

  var acceptedComb = ["80085", "800", "90", "2026", "021"];

  equal_btn.addEventListener("click", function () {
    if (calculatorState === "on" && movingText === false) {
      blink_line.style.display = "none";

      if (acceptedComb.includes(written_number)) {
        // Combination Found
        hideCalculator();

        if (written_number === "80085") {
          // 80085 egg
          let egg_80085 = document.getElementsByClassName("egg_80085")[0];
          egg_80085.style.display = "block";

          var showEgg_80085 = anime.timeline({
            easing: "easeOutExpo",
          });

          showEgg_80085
            .add({
              targets: egg_80085,
              opacity: 1,
              duration: 500,
              delay: 500,
              duration: 300,
              easing: "easeInOutSine",
            })

            .add({
              targets: egg_80085,
              opacity: 0,
              delay: 5000,
              duration: 500,
              complete: function () {
                showCalculator();
              },
            });
        }

        if (written_number == "800") {
          // 800 egg
          let egg_800 = document.getElementsByClassName("egg_800")[0];
          egg_800.style.display = "block";

          var showEgg_800 = anime.timeline({
            easing: "easeOutExpo",
          });

          showEgg_800
            .add({
              targets: egg_800,
              opacity: 1,
              duration: 500,
              delay: 500,
              duration: 300,
              easing: "easeInOutSine",
            })

            .add({
              targets: egg_800,
              opacity: 0,
              delay: 5000,
              duration: 500,
              complete: function () {
                showCalculator();
              },
            });
        }

        if (written_number == "90") {
          // 90 egg
          let egg_90 = document.getElementsByClassName("egg_90")[0];
          egg_90.style.display = "block";

          var showEgg_90 = anime.timeline({
            easing: "easeOutExpo",
          });

          showEgg_90
            .add({
              targets: egg_90,
              opacity: 1,
              duration: 500,
              delay: 500,
              duration: 300,
              easing: "easeInOutSine",
            })

            .add({
              targets: egg_90,
              opacity: 0,
              delay: 5000,
              duration: 500,
              complete: function () {
                showCalculator();
              },
            });
        }

        if (written_number == "2026") {
          // 2026 egg
          let egg_2026 = document.getElementsByClassName("egg_2026")[0];
          egg_2026.style.display = "block";

          var showEgg_2026 = anime.timeline({
            easing: "easeOutExpo",
          });

          showEgg_2026
            .add({
              targets: egg_2026,
              opacity: 1,
              duration: 500,
              delay: 500,
              duration: 300,
              easing: "easeInOutSine",
            })

            .add({
              targets: egg_2026,
              opacity: 0,
              delay: 5000,
              duration: 500,
              complete: function () {
                showCalculator();
              },
            });
        }

        if (written_number == "021") {
          // 021 egg
          let egg_021 = document.getElementsByClassName("egg_021")[0];
          egg_021.style.display = "block";

          var showEgg_021 = anime.timeline({
            easing: "easeOutExpo",
          });

          showEgg_021
            .add({
              targets: egg_021,
              opacity: 1,
              duration: 500,
              delay: 500,
              duration: 300,
              easing: "easeInOutSine",
            })

            .add({
              targets: egg_021,
              opacity: 0,
              delay: 5000,
              duration: 500,
              complete: function () {
                showCalculator();
              },
            });
        }
      } else {
        // Error - No combination
        visible_text_numbers.innerHTML = "";
        written_number = "";

        var errAnim = anime.timeline({
          easing: "easeOutExpo",
        });

        errAnim
          .add({
            targets: calcErrorMessage,
            opacity: 1,
            duration: 500,
          })

          .add({
            targets: calcErrorMessage,
            opacity: 0,
            delay: 1000,
            duration: 500,
            complete: function () {
              blink_line.style.display = "block";
            },
          });
      }
    }
  });
  // End Hit Equal

  // Start Hide Calculator
  function hideCalculator() {
    let toHideArray = document.getElementsByClassName("to_hide");

    anime({
      targets: toHideArray,
      opacity: 0,
      duration: 300,
      easing: "easeInOutSine",
    });
  }

  // End Hide Calculator

  // Start Hide Calculator
  function showCalculator() {
    let toHideArray = document.getElementsByClassName("to_hide");

    moveText();
    calculatorState = "on";
    blink_line.style.display = "none";
    written_number = "";
    visible_text_numbers.innerHTML = "";

    anime({
      targets: toHideArray,
      opacity: 1,
      duration: 300,
      easing: "easeInOutSine",
    });
  }

  // End Hide Calculator
};

// Start Currency an token selection Animation

export const showElement = (element) => {
  element.classList.remove("hide_select");
};
export const hideElement = (element) => {
  element.classList.add("hide_select");
};
