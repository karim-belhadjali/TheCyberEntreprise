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
