import { anime } from "react-animejs-wrapper";

// START Logo Animation

export const animateLogo = (interior_eye) => {
  var tl = anime.timeline({});

  tl.add({
    targets: interior_eye,
    rotate: 360,
    duration: 1300,
    loop: false,
    elasticity: 600,
    easing: "easeOutElastic",
  }).add({
    targets: interior_eye,
    delay: 1300,
    rotate: 0,
    duration: 0,
  });
};

// End Logo Animation
