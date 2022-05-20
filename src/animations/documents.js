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

// Start Prepare Card Number

export const prepareCardNumber = (card_number_container) => {
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
};

// End Prepare Card Number

// Start Initial Credit Card Number

var number_container_element = document.getElementsByClassName(
  "number_container_element"
);

export const initalCardNumber = (card_number_initials) => {
  let card_number_initial = card_number_initials.textContent;
  card_number_initial = card_number_initial.replace(/\s+/g, "");

  var initial_number_array = card_number_initial.split("");

  for (var i = 0; i < initial_number_array.length; i++) {
    let pixels = 26 * initial_number_array[i];
    number_container_element[i].style.transform =
      "translateY(-" + pixels + "px)";
  }
};

// End Initial Credit Card Number

// Start Credit Card Animation
var circulating_supply_animated = false;

export const creditCardAnimationEnter = (
  cyber_lines,
  card_number_circulating
) => {
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

  let circulating_supply = card_number_circulating.textContent;
  circulating_supply = circulating_supply.replace(/\s+/g, "");
  animateCirculatingSupply(circulating_supply);
};
// End Credit Card Animation

// Start Credit Card Change Numbers Animation

function animateCirculatingSupply(number) {
  if (circulating_supply_animated === false) {
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

    for (let i = 0; i < number_array.length; i++) {
      let element_to_animate = number_container_element[i];
      let pixels = 26 * number_array[i];
      let top_property = "-" + pixels + "px";

      anime({
        targets: element_to_animate,
        easing: "easeInOutQuad",
        duration: 1000,
        translateY: top_property,
        complete: function () {
          if (number_array.length === i) {
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
