import { anime } from "react-animejs-wrapper";

export const floatLogo = (logo, logoWidth, gridWidth) => {
  let maxTranslate = logoWidth - gridWidth;
  console.log("logoWidth: " + logoWidth);
  console.log("gridWidth: " + gridWidth);
  console.log("translate" + maxTranslate);
  anime({
    targets: logo,
    easing: "linear",
    loop: true,
    direction: "alternate",
    translateY: [logoWidth / 3, maxTranslate / 9],
  });
};
