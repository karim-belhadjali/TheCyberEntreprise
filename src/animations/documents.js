import { anime } from "react-animejs-wrapper";

// Start Folder Animation

var folderMouseIn;
var folderAnimationInProgress = false;

export const folderAniamtionEnter = (documents_file) => {
  folderMouseIn = true;

  if (folderAnimationInProgress === false) {
    folderAnimationInProgress = true;
    anime({
      targets: documents_file,
      translateY: -110,
      easing: "spring(1, 80, 10, 0)",
      duration: 500,
      complete: function () {
        folderAnimationInProgress = false;

        if (folderMouseIn === false) {
          anime({
            targets: documents_file,
            translateY: 0,
            easing: "easeInOutSine",
            duration: 500,
          });
        }
      },
    });
  }
};

export const folderAnimationLeave = (documents_file) => {
  folderMouseIn = false;

  if (folderAnimationInProgress === false) {
    anime({
      targets: documents_file,
      translateY: 0,
      easing: "easeInOutSine",
      duration: 500,
    });
  }
};
// End Folder Animation

// Start Scroll Stamp

var stamp_active = false;
export const stampActivation = (stamp_button, scroll_stamp) => {
  scroll_stamp.style.opacity = 1;
  stamp_active = true;
  stamp_button.classList.remove("point_cursor");
};

// Stop Scroll Stamp

// Start Scroll Signature

export const scrollSignatureAnimation = (
  scroll_signature_click,
  stamp_button,
  scroll_stamp,
  scroll_contract,
  scroll_contract_overflow,
  scroll_contract_image,
  scroll_contract_image_empty,
  scroll_data
) => {
  if (stamp_active === true) {
    scroll_stamp.style.display = "none";
    scroll_signature_click.classList.remove("point_cursor");

    anime({
      targets: [scroll_contract, scroll_contract_overflow],
      height: 0,
      easing: "easeInOutSine",
      duration: 500,
      complete: function () {
        scroll_contract_image.style.display = "none";
        stamp_button.classList.remove("point_cursor");
        scroll_contract_image_empty.style.display = "block";
        scroll_data.style.display = "block";

        anime({
          targets: [scroll_contract, scroll_contract_overflow],
          height: 196,
          easing: "easeInOutSine",
          duration: 500,
        });
      },
    });
  }
};
// Stop Scroll Signature

// Start Scroll Diamond Left
var diamondLeftMouseIn;
var diamonLeftAnimationInProgress = false;

export const diamondLeftAnimationEnter = (scroll_blue_left) => {
  console.log("left");
  diamondLeftMouseIn = true;

  if (diamonLeftAnimationInProgress === false) {
    diamonLeftAnimationInProgress = true;
    anime({
      targets: scroll_blue_left,
      width: 120,
      easing: "easeInOutSine",
      duration: 300,
      complete: function () {
        diamonLeftAnimationInProgress = false;

        if (diamondLeftMouseIn === false) {
          anime({
            targets: scroll_blue_left,
            width: 0,
            easing: "easeInOutSine",
            duration: 300,
          });
        }
      },
    });
  }
};

export const diamondLeftAnimationLeave = (scroll_blue_left) => {
  diamondLeftMouseIn = false;

  if (diamonLeftAnimationInProgress === false) {
    anime({
      targets: scroll_blue_left,
      width: 0,
      easing: "easeInOutSine",
      duration: 300,
    });
  }
};
// Stop Scroll Diamond Left

// Start Scroll Diamond Right
var diamondRightMouseIn;
var diamonRightAnimationInProgress = false;

export const diamondRightAnimationEnter = (scroll_blue_right) => {
  diamondRightMouseIn = true;

  if (diamonRightAnimationInProgress === false) {
    diamonRightAnimationInProgress = true;
    anime({
      targets: scroll_blue_right,
      width: 120,
      easing: "easeInOutSine",
      duration: 300,
      complete: function () {
        diamonRightAnimationInProgress = false;

        if (diamondRightMouseIn === false) {
          anime({
            targets: scroll_blue_right,
            width: 0,
            easing: "easeInOutSine",
            duration: 300,
          });
        }
      },
    });
  }
};

export const diamondRightAnimationLeave = (scroll_blue_right) => {
  diamondRightMouseIn = false;

  if (diamonRightAnimationInProgress === false) {
    anime({
      targets: scroll_blue_right,
      width: 0,
      easing: "easeInOutSine",
      duration: 300,
    });
  }
};
// Stop Scroll Diamond Right

// Start Inu Animation
var inu_animation;

var inuMouseIn;
var inuAnimationInProgress = false;

export const inuAnimationEnter = (inu_base) => {
  if (inuAnimationInProgress === false) {
    console.log("enter cybr inu");
    inuAnimationInProgress = true;
    console.log(inuAnimationInProgress);
    anime({
      targets: inu_base,
      rotate: "14deg",
      easing: "spring(1, 80, 10, 0)",
      duration: 500,
      complete: function () {
        inuAnimationInProgress = false;

        if (inuMouseIn === false) {
          anime({
            targets: inu_base,
            rotate: "0deg",
            easing: "easeInOutSine",
            duration: 300,
          });
        }
      },
    });
  }
};
export const inuAnimationLeave = (inu_base) => {
  inuMouseIn = false;

  if (inuAnimationInProgress === false) {
    anime({
      targets: inu_base,
      rotate: "0deg",
      easing: "easeInOutSine",
      duration: 300,
    });
  }
};

// End Inu Animation

export const hoverBackgroundTable = () => {
  // Start Special Thanks

  var thanks_name_el = document.getElementsByClassName("thanks_name_el");
  var thanks_language_el =
    document.getElementsByClassName("thanks_language_el");

  for (var i = 0; i < thanks_name_el.length; i++) {
    let el_thanks_name = thanks_name_el[i];
    let el_thanks_language = thanks_language_el[i];

    el_thanks_name.addEventListener("mouseenter", function () {
      el_thanks_name.classList.add("hover_background");
      el_thanks_language.classList.add("hover_background");
    });

    el_thanks_name.addEventListener("mouseleave", function () {
      el_thanks_name.classList.remove("hover_background");
      el_thanks_language.classList.remove("hover_background");
    });

    el_thanks_language.addEventListener("mouseenter", function () {
      el_thanks_name.classList.add("hover_background");
      el_thanks_language.classList.add("hover_background");
    });

    el_thanks_language.addEventListener("mouseleave", function () {
      el_thanks_name.classList.remove("hover_background");
      el_thanks_language.classList.remove("hover_background");
    });
  }

  // End Special Thanks
};

export const creditCardAnimation = () => {
  // Start Prepare Card Number
  var card_number_container = document.getElementsByClassName(
    "card_number_container"
  )[0];

  for (var i = 0; i < 4; i++) {
    let numberGroup = document.createElement("div");
    numberGroup.className = "card_number_group";

    for (var g = 0; g < 4; g++) {
      let div_number = g + 1;
      let numberContainerElement = document.createElement("div");
      numberContainerElement.className =
        "number_container_element number_container_element_" + div_number;

      for (var j = 0; j < 10; j++) {
        let number = document.createElement("span");
        let textnode = document.createTextNode(j);

        number.appendChild(textnode);

        numberContainerElement.appendChild(number);
      }

      numberGroup.appendChild(numberContainerElement);
    }

    card_number_container.appendChild(numberGroup);
  }

  // End Prepare Card Number

  // Start Initial Credit Card Number

  var card_number_initial = document.getElementsByClassName(
    "card_number_initial"
  )[0].textContent;
  card_number_initial = card_number_initial.replace(/\s+/g, "");

  var initial_number_array = card_number_initial.split("");
  var number_container_element = document.getElementsByClassName(
    "number_container_element"
  );

  for (var i = 0; i < initial_number_array.length; i++) {
    let pixels = 26 * initial_number_array[i];
    number_container_element[i].style.transform =
      "translateY(-" + pixels + "px)";
  }

  // End Initial Credit Card Number

  // Start Credit Card Animation
  var credit_card_hover =
    document.getElementsByClassName("credit_card_hover")[0];
  var cyber_lines = document.getElementsByClassName("cyber_lines")[0];
  var circulating_supply_animated = false;

  credit_card_hover.addEventListener("mouseenter", function () {
    anime({
      targets: cyber_lines,
      translateY: 200,
      translateX: 230,
      easing: "easeInOutSine",
      duration: 1000,
      complete: function () {
        cyber_lines.style.transform = "translate(0px,0px)";
      },
    });

    let circulating_supply = document.getElementsByClassName(
      "card_number_circulating"
    )[0].textContent;
    circulating_supply = circulating_supply.replace(/\s+/g, "");
    animateCirculatingSupply(circulating_supply);
  });

  // End Credit Card Animation

  // Start Credit Card Change Numbers Animation

  function animateCirculatingSupply(number) {
    if (circulating_supply_animated == false) {
      circulating_supply_animated = true;

      // fade out gray
      anime({
        targets: ".fade_full_color",
        opacity: 0,
        easing: "easeInOutQuad",
        duration: 500,
      });

      // animate numbers
      let number_array = number.split("");

      for (i = 0; i < number_array.length; i++) {
        let element_to_animate = number_container_element[i];
        let pixels = 26 * number_array[i];
        let top_property = "-" + pixels + "px";

        anime({
          targets: element_to_animate,
          easing: "easeInOutQuad",
          duration: 1000,
          translateY: top_property,
          complete: function () {
            if (number_array.length == i) {
              // fade in gray
              anime({
                targets: ".fade_full_color",
                opacity: 1,
                easing: "easeInOutQuad",
                duration: 200,
              });
            }
          },
        });
      }
    }
  }

  // Stop Credit Card Change Numbers Animation
};

export const projectRunAnimation = () => {
  // Start Project Run Background

  window.addEventListener("resize", function () {
    xSize = document.body.clientWidth;
    halfBodyWidth = xSize / 2;
    ySize = document.body.clientHeight;
    halfBodyHeight = ySize / 2;
  });

  var run_bg = document.getElementsByClassName("run_bg")[0];

  var xSize = document.body.clientWidth;
  var halfBodyWidth = xSize / 2;
  var ySize = document.body.clientHeight;
  var halfBodyHeight = ySize / 2;

  document.addEventListener("mousemove", (e) => {
    let xPos = e.clientX;
    let yPos = e.clientY;

    let horizontalPercentageBig = ((xPos / halfBodyWidth) * 100) / 25;
    run_bg.style.left = "-" + horizontalPercentageBig + "%";

    let verticalPercentageBig = ((yPos / halfBodyHeight) * 100) / 25;
    run_bg.style.top = "-" + verticalPercentageBig + "%";
  });

  // End Project Run Background

  // Start Project Run Enemy Anim

  function enemyKill() {
    let run_enemy = document.getElementsByClassName("run_enemy")[0];
    let frame_speed = 500;

    let enemy = anime.timeline({
      easing: "easeOutExpo",
    });

    enemy
      .add({
        targets: run_enemy,
        backgroundPosition: ["-128px 0px", "-96px 0px"],
        duration: 0,
        easing: "easeInOutSine",
      })

      .add({
        targets: run_enemy,
        backgroundPosition: ["-96px 0px", "-64px 0px"],
        duration: 0,
        delay: frame_speed,
        easing: "easeInOutSine",
      })

      .add({
        targets: run_enemy,
        backgroundPosition: ["-64px 0px", "-32px 0px"],
        duration: 0,
        delay: frame_speed,
        easing: "easeInOutSine",
      })

      .add({
        targets: run_enemy,
        backgroundPosition: ["-32px 0px", "0px 0px"],
        duration: 0,
        delay: frame_speed,
        easing: "easeInOutSine",
      })

      .add({
        targets: run_enemy,
        opacity: 0,
        backgroundPosition: ["0px 0px", "0px 0px"],
        duration: 200,
        delay: frame_speed,
        easing: "easeInOutSine",
      });
  }

  // End Project Run Enemy Anim

  // Start Project Run Cyber Anim

  function runToRight() {
    let run_cyber_stairs = document.getElementsByClassName("cyber_stairs")[0];
    run_cyber_stairs.style.display = "none";

    let run_cyber = document.getElementsByClassName("cyber_to_right")[0];
    run_cyber.style.display = "block";

    let frame_speed = 300;

    let cyber = anime.timeline({
      easing: "easeOutExpo",
      loop: true,
    });

    cyber
      .add({
        targets: run_cyber,
        backgroundPosition: ["0px 0px", "42px 0px"],
        duration: 0,
      })

      .add({
        targets: run_cyber,
        backgroundPosition: ["42px 0px", "84px 0px"],
        duration: 0,
        delay: frame_speed,
      })

      .add({
        targets: run_cyber,
        backgroundPosition: ["84px 0px", "126px 0px"],
        duration: 0,
        delay: frame_speed,
      })

      .add({
        targets: run_cyber,
        backgroundPosition: ["126px 0px", "168px 0px"],
        duration: 0,
        delay: frame_speed,
      });
  }

  function gunRightStable() {
    let gun_to_right = document.getElementsByClassName("gun_to_right")[0];
    gun_to_right.style.display = "block";

    let frame_speed = 300;

    let cyberRightGun = anime.timeline({
      easing: "easeOutExpo",
      loop: true,
    });

    cyberRightGun
      .add({
        targets: gun_to_right,
        duration: 0,
        top: "10px",
      })

      .add({
        targets: gun_to_right,
        duration: 0,
        delay: frame_speed,
        top: "10px",
      })

      .add({
        targets: gun_to_right,
        duration: 0,
        delay: frame_speed,
        top: "11px",
      })

      .add({
        targets: gun_to_right,
        duration: 0,
        delay: frame_speed,
        top: "10px",
      });
  }

  function runToStairs() {
    let run_cyber_right = document.getElementsByClassName("cyber_to_right")[0];
    run_cyber_right.style.display = "none";

    let gun_to_right = document.getElementsByClassName("gun_to_right")[0];
    gun_to_right.style.display = "none";

    let run_cyber_stairs = document.getElementsByClassName("cyber_stairs")[0];
    run_cyber_stairs.style.display = "block";

    let frame_speed = 300;

    let cyber = anime.timeline({
      easing: "easeOutExpo",
      loop: true,
    });

    cyber
      .add({
        targets: run_cyber_stairs,
        backgroundPosition: ["0px 0px", "32px 0px"],
        duration: 0,
      })

      .add({
        targets: run_cyber_stairs,
        backgroundPosition: ["32px 0px", "64px 0px"],
        duration: 0,
        delay: frame_speed,
      })

      .add({
        targets: run_cyber_stairs,
        backgroundPosition: ["64px 0px", "96px 0px"],
        duration: 0,
        delay: frame_speed,
      });
  }

  function runToLeft() {
    let run_cyber_right = document.getElementsByClassName("cyber_to_right")[0];
    run_cyber_right.style.display = "none";

    let gun_to_right = document.getElementsByClassName("gun_to_right")[0];
    gun_to_right.style.display = "none";

    let run_cyber_stairs = document.getElementsByClassName("cyber_stairs")[0];
    run_cyber_stairs.style.display = "none";

    let run_cyber = document.getElementsByClassName("cyber_to_left")[0];
    run_cyber.style.display = "block";

    let frame_speed = 300;

    let cyber = anime.timeline({
      easing: "easeOutExpo",
      loop: true,
    });

    cyber
      .add({
        targets: run_cyber,
        backgroundPosition: ["0px 0px", "42px 0px"],
        duration: 0,
      })

      .add({
        targets: run_cyber,
        backgroundPosition: ["42px 0px", "84px 0px"],
        duration: 0,
        delay: frame_speed,
      })

      .add({
        targets: run_cyber,
        backgroundPosition: ["84px 0px", "126px 0px"],
        duration: 0,
        delay: frame_speed,
      })

      .add({
        targets: run_cyber,
        backgroundPosition: ["126px 0px", "168px 0px"],
        duration: 0,
        delay: frame_speed,
      });
  }

  function gunLeftStable() {
    let gun_to_left = document.getElementsByClassName("gun_to_left")[0];
    gun_to_left.style.display = "block";

    let frame_speed = 300;

    let cyberRightGun = anime.timeline({
      easing: "easeOutExpo",
      loop: true,
    });

    cyberRightGun
      .add({
        targets: gun_to_left,
        duration: 0,
        top: "10px",
      })

      .add({
        targets: gun_to_left,
        duration: 0,
        delay: frame_speed,
        top: "10px",
      })

      .add({
        targets: gun_to_left,
        duration: 0,
        delay: frame_speed,
        top: "11px",
      })

      .add({
        targets: gun_to_left,
        duration: 0,
        delay: frame_speed,
        top: "10px",
      });
  }

  // End Project Run Cyber Anim

  // Start Hide Gold Coin

  function hideGoldCoin(coin) {
    anime({
      targets: coin,
      opacity: 0,
      duration: 100,
      easing: "linear",
    });
  }

  // End Hide Gold Coin

  // Start Animate Cyber Token

  function animateCyberToken() {
    let cyber_token = document.getElementsByClassName("cyber_token")[0];

    anime({
      targets: cyber_token,
      rotate: 360,
      duration: 6000,
      easing: "linear",
    });

    let cyberTokenMove = anime.timeline({
      easing: "linear",
    });

    cyberTokenMove
      .add({
        targets: cyber_token,
        duration: 600,
        right: "115px",
        top: "12px",
      })

      .add({
        targets: cyber_token,
        duration: 1800,
        right: "289px",
        top: "132px",
      })

      .add({
        targets: cyber_token,
        duration: 1200,
        right: "210px",
        top: "250px",
      })

      .add({
        targets: cyber_token,
        duration: 1200,
        right: "98px",
        top: "172px",
      })

      .add({
        targets: cyber_token,
        duration: 1000,
        right: "40px",
        top: "232",
      });
  }

  // End Animate Cyber Token

  // Start Show Standing

  function showStanding() {
    let cyber_stand = document.getElementsByClassName("cyber_stand")[0];
    cyber_stand.style.display = "block";

    let run_cyber_left = document.getElementsByClassName("cyber_to_left")[0];
    run_cyber_left.style.display = "none";

    let gun_to_left = document.getElementsByClassName("gun_to_left")[0];
    gun_to_left.style.display = "none";
  }

  // Emd Show Standing

  // Start Activate Save

  function activeteSave() {
    let sp_on = document.getElementsByClassName("sp_on")[0];

    anime({
      targets: sp_on,
      opacity: 1,
      duration: 100,
      easing: "linear",
    });
  }

  // End Activate Save

  // Start Project Run Animation

  var run_cyber_click = document.getElementsByClassName("run_cyber_click")[0];

  run_cyber_click.addEventListener("click", function () {
    run_cyber_click.classList.remove("run_cyber_click");

    runToRight();
    gunRightStable();

    let cyberMove = anime.timeline({
      easing: "linear",
    });

    cyberMove
      .add({
        targets: run_cyber_click,
        duration: 5000,
        left: "186px",
        complete: function () {
          runToStairs();
        },
      })

      .add({
        targets: run_cyber_click,
        duration: 5000,
        bottom: "168px",
        complete: function () {
          runToRight();
          gunRightStable();
        },
      })

      .add({
        targets: run_cyber_click,
        duration: 1000,
        left: "214px",
        complete: function () {
          let gt = document.getElementsByClassName("gt_3")[0];
          hideGoldCoin(gt);
        },
      })

      .add({
        targets: run_cyber_click,
        duration: 1000,
        left: "245px",
        complete: function () {
          let gt = document.getElementsByClassName("gt_2")[0];
          hideGoldCoin(gt);
        },
      })

      .add({
        targets: run_cyber_click,
        duration: 1000,
        left: "278px",
        complete: function () {
          let gt = document.getElementsByClassName("gt_1")[0];
          hideGoldCoin(gt);
          runToLeft();
          gunLeftStable();
        },
      })

      .add({
        targets: run_cyber_click,
        duration: 400,
        left: "256px",
        bottom: "208px",
        complete: function () {
          animateCyberToken();
        },
      })

      .add({
        targets: run_cyber_click,
        duration: 400,
        left: "226px",
        bottom: "168px",
      })

      .add({
        targets: run_cyber_click,
        duration: 3000,
        left: "124px",
        complete: function () {
          activeteSave();
          showStanding();
        },
      });

    // shooting

    let pew_1 = document.getElementsByClassName("pew_1")[0];
    let pew_2 = document.getElementsByClassName("pew_2")[0];
    let pew_3 = document.getElementsByClassName("pew_3")[0];

    let shooting = anime.timeline({
      easing: "linear",
    });

    shooting

      .add({
        targets: pew_1,
        duration: 0,
        opacity: 1,
      })
      .add({
        targets: pew_1,
        duration: 1000,
        left: "286px",
        complete: function () {
          pew_1.style.display = "none";
        },
      })

      .add({
        targets: pew_2,
        duration: 1,
        opacity: 1,
        delay: 90,
      })
      .add({
        targets: pew_2,
        duration: 1000,
        left: "286px",
        delay: 90,
        complete: function () {
          pew_2.style.display = "none";
        },
      })

      .add({
        targets: pew_3,
        duration: 1,
        opacity: 1,
        delay: 90,
      })
      .add({
        targets: pew_3,
        duration: 1000,
        left: "286px",
        delay: 90,
        complete: function () {
          pew_3.style.display = "none";
          enemyKill();
        },
      });
  });

  // End Project Run Animation
};

export const projectHomeAnimation = () => {
  // Start Project Home Animation

  var phome_container = document.getElementsByClassName("phome_container")[0];
  var on_mill = document.getElementsByClassName("on_mill");
  var light_main = document.getElementsByClassName("light_main")[0];
  var light_1 = document.getElementsByClassName("light_1")[0];
  var light_2 = document.getElementsByClassName("light_2")[0];
  var light_3 = document.getElementsByClassName("light_3")[0];
  var phome_anim = false;
  var phome_mousein = false;

  phome_container.addEventListener("mouseenter", function () {
    phome_mousein = true;

    if (phome_anim == false) {
      phome_anim = true;

      let phome = anime.timeline({
        easing: "linear",
      });

      phome

        .add({
          targets: light_main,
          duration: 500,
          opacity: 1,
        })
        .add({
          targets: light_1,
          duration: 500,
          opacity: 1,
        })
        .add({
          targets: light_2,
          duration: 1000,
          opacity: 1,
        })
        .add({
          targets: light_3,
          duration: 500,
          opacity: 1,
        })
        .add({
          targets: on_mill,
          duration: 1,
          opacity: 1,
          translateX: "-150px",
        })
        .add({
          targets: on_mill,
          duration: 2000,
          translateX: "0px",
          complete: function () {
            phome_anim = false;

            if (phome_mousein == false) {
              phome_out();
            }
          },
        });
    }
  });

  phome_container.addEventListener("mouseout", function () {
    phome_mousein = false;

    if (phome_anim == false) {
      phome_anim = true;
      phome_out();
    }
  });

  function phome_out() {
    let phome = anime.timeline({
      easing: "linear",
    });

    phome

      .add({
        targets: on_mill,
        duration: 1000,
        opacity: 0,
      })
      .add({
        targets: light_3,
        duration: 500,
        opacity: 0,
      })
      .add({
        targets: light_2,
        duration: 500,
        opacity: 0,
      })
      .add({
        targets: light_1,
        duration: 1000,
        opacity: 0,
      })
      .add({
        targets: light_main,
        duration: 500,
        opacity: 0,
        complete: function () {
          phome_anim = false;
        },
      });
  }

  // Stop Project Home Animation
};
