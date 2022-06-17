import { anime } from "react-animejs-wrapper";

export const animateHarmonyToken = () => {
  // Home Harmony Token Animation
  var wave1 = document.getElementsByClassName("wave1")[0];
  var wave2 = document.getElementsByClassName("wave2")[0];
  var wave3 = document.getElementsByClassName("wave3")[0];

  if (typeof wave1 != "undefined" && wave1 != null) {
    anime({
      targets: wave1,
      r: 20,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });

    anime({
      targets: wave2,
      r: 20,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });

    anime({
      targets: wave3,
      r: 20,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }
  // END of Harmony Token Animation
};
