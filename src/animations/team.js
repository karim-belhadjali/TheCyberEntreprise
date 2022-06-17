import { anime } from "react-animejs-wrapper";

// Start Intermediaries Animation

var totalRelItems = document.getElementsByClassName("rel_item");
var totalRelContainers = document.getElementsByClassName(
  "team_person_relation_container"
);

var animationInProgress = {};

export const animate = (index, nameOfInt, itemPosition) => {
  if (animationInProgress[0] !== true && animationInProgress[0] !== false) {
    for (let x = 0; x < totalRelContainers.length; x++) {
      animationInProgress[x] = false;
    }
  }
  for (let i = 0; i < totalRelItems.length; i++) {
    let hoverParent = totalRelContainers[index];

    let relItemsScoped = hoverParent.getElementsByClassName("rel_item");

    let textElement = hoverParent.getElementsByClassName("show_name")[0];

    let otherRelItems = [];

    let containerPosition;

    for (var j = 0; j < relItemsScoped.length; j++) {
      if (j !== itemPosition) {
        otherRelItems.push(relItemsScoped[j]);
      }
    }

    for (var n = 0; n < totalRelContainers.length; n++) {
      if (totalRelContainers[n] === hoverParent) {
        containerPosition = n;
      }
    }

    if (animationInProgress[index] === false) {
      animationInProgress[index] = true;

      textElement.innerHTML = nameOfInt;

      if (itemPosition === 0) {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: otherRelItems,
          opacity: 0,
          duration: 500,
        })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: 40,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 1,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 0,
            delay: 1250,
            duration: 500,
          })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: 0,
            duration: 500,
          })

          .add({
            targets: otherRelItems,
            opacity: 1,
            duration: 500,
            complete: function () {
              animationInProgress[index] = false;
            },
          });
      }

      if (itemPosition === 1) {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: otherRelItems,
          opacity: 0,
          duration: 500,
        })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: -40,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 1,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 0,
            delay: 1250,
            duration: 500,
          })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: 0,
            duration: 500,
          })

          .add({
            targets: otherRelItems,
            opacity: 1,
            duration: 500,
            complete: function () {
              animationInProgress[index] = false;
            },
          });
      }

      if (itemPosition === 2) {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: otherRelItems,
          opacity: 0,
          duration: 500,
        })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: 40,
            translateY: -96,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 1,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 0,
            delay: 1250,
            duration: 500,
          })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: 0,
            translateY: 0,
            duration: 500,
          })

          .add({
            targets: otherRelItems,
            opacity: 1,
            duration: 500,
            complete: function () {
              animationInProgress[index] = false;
            },
          });
      }

      if (itemPosition === 3) {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: otherRelItems,
          opacity: 0,
          duration: 500,
        })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: -40,
            translateY: -96,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 1,
            duration: 500,
          })

          .add({
            targets: textElement,
            opacity: 0,
            delay: 1250,
            duration: 500,
          })

          .add({
            targets: relItemsScoped[itemPosition],
            translateX: 0,
            translateY: 0,
            duration: 500,
          })

          .add({
            targets: otherRelItems,
            opacity: 1,
            duration: 500,
            complete: function () {
              animationInProgress[index] = false;
            },
          });
      }
    }
  }
};
// End Intermediaries Animation

// Start Honorable Discharge

var thanks_name_el = document.getElementsByClassName("thanks_name_el");
var thanks_language_el = document.getElementsByClassName("thanks_language_el");

export const animateRowEnter = (position) => {
  thanks_name_el[position].classList.add("hover_background");
  thanks_language_el[position].classList.add("hover_background");
};
export const animateRowLeave = (position) => {
  thanks_name_el[position].classList.remove("hover_background");
  thanks_language_el[position].classList.remove("hover_background");
};

// End  Honorable Discharge
export const SocialAnimations = () => {
  var filler_contact = document.querySelectorAll("div.filler_contact > a");

  for (let i = 0; i < filler_contact.length; i++) {
    filler_contact[i].addEventListener("mouseenter", function () {
      let parentSocialBtn = this.parentElement;

      let relItemsScoped = parentSocialBtn.getElementsByTagName("a");

      let otherRelItems = [];

      for (let j = 0; j < relItemsScoped.length; j++) {
        if (relItemsScoped[j] !== this) {
          otherRelItems.push(relItemsScoped[j]);
        }
      }

      anime({
        targets: otherRelItems,
        opacity: [1, 0.7],
        duration: 10,
        easing: "linear",
      });
    });

    filler_contact[i].addEventListener("mouseout", function () {
      anime({
        targets: filler_contact,
        opacity: 1,
        duration: 10,
        easing: "linear",
      });
    });
  }
};

// End Filler Contact Social Hover

export const personContactAnimation = () => {
  // Start Social Hover Effect

  var social_btns = document.querySelectorAll("div.person_contact > a");

  for (let i = 0; i < social_btns.length; i++) {
    social_btns[i].addEventListener("mouseenter", function () {
      let parentSocialBtn = this.parentElement;

      let relItemsScoped = parentSocialBtn.getElementsByTagName("a");

      let otherRelItems = [];

      for (let j = 0; j < relItemsScoped.length; j++) {
        if (relItemsScoped[j] != this) {
          otherRelItems.push(relItemsScoped[j]);
        }
      }

      anime({
        targets: otherRelItems,
        opacity: [1, 0.7],
        duration: 10,
        easing: "linear",
      });
    });

    social_btns[i].addEventListener("mouseout", function () {
      anime({
        targets: social_btns,
        opacity: 1,
        duration: 10,
        easing: "linear",
      });
    });
  }

  // End Social Hover Effect
};
