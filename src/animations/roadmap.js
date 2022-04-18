import { anime } from "react-animejs-wrapper";

export const floatLogo = (roadmap_token) => {
  anime({
    targets: roadmap_token,
    translateY: -30,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
};
export const completedLiquidAnim = (completedBtn, completedLiquid) => {
  var completedLiquidAnim = anime({
    targets: completedLiquid,
    translateY: -5,
    direction: "alternate",
    loop: true,
    autoplay: false,
    easing: "easeInOutSine",
  });

  completedBtn.onmouseenter = completedLiquidAnim.play;
  completedBtn.onmouseout = completedLiquidAnim.pause;
};

export const progressBtnLiquidAnim = (progressBtn, progressLiquid) => {
  var progressBtnLiquidAnim = anime({
    targets: progressLiquid,
    translateY: -5,
    direction: "alternate",
    loop: true,
    autoplay: false,
    easing: "easeInOutSine",
  });

  progressBtn.onmouseenter = progressBtnLiquidAnim.play;
  progressBtn.onmouseout = progressBtnLiquidAnim.pause;
};

export const preparationBtnLiquidAnim = (preparationBtn, preparationLiquid) => {
  var preparationBtnLiquidAnim = anime({
    targets: preparationLiquid,
    translateY: -5,
    direction: "alternate",
    loop: true,
    autoplay: false,
    easing: "easeInOutSine",
  });

  preparationBtn.onmouseenter = preparationBtnLiquidAnim.play;
  preparationBtn.onmouseout = preparationBtnLiquidAnim.pause;
};

// Completed Task
export const completedTasksEnter = (
  progressBtn,
  preparationBtn,
  progressLiquid,
  preparationLiquid
) => {
  changeOpacity(progressBtn, "out");
  changeOpacity(preparationBtn, "out");

  // opacity other liquids
  changeOpacity(progressLiquid, "out");
  changeOpacity(preparationLiquid, "out");

  // bigger texts
  // sizeTexts(completedItems, "big");

  // // dots
  // changeDots(completedItems, "show");

  // // opacity other texts
  // changeTextOpacity(progressItems, "out");
  // changeTextOpacity(preparationItems, "out");
};
export const completedTasksLeave = (
  progressBtn,
  preparationBtn,
  progressLiquid,
  preparationLiquid
) => {
  changeOpacity(progressBtn, "in");
  changeOpacity(preparationBtn, "in");

  // opacity other liquids
  changeOpacity(progressLiquid, "in");
  changeOpacity(preparationLiquid, "in");

  // // normal texts
  // sizeTexts(completedItems, "normal");

  // // dots
  // changeDots(completedItems, "hide");

  // // opacity other texts
  // changeTextOpacity(progressItems, "in");
  // changeTextOpacity(preparationItems, "in");
};

// End Completed Tasks

// Progress Tasks

export const progressTasksEnter = (
  completedBtn,
  preparationBtn,
  completedLiquid,
  preparationLiquid
) => {
  // opacity other btns
  changeOpacity(completedBtn, "out");
  changeOpacity(preparationBtn, "out");

  // opacity other liquids
  changeOpacity(completedLiquid, "out");
  changeOpacity(preparationLiquid, "out");

  // // bigger texts
  // sizeTexts(progressItems, "big");

  // // dots
  // changeDots(progressItems, "show");

  // // opacity other texts
  // changeTextOpacity(completedItems, "out");
  // changeTextOpacity(preparationItems, "out");
};

export const progressTasksLeave = (
  completedBtn,
  preparationBtn,
  completedLiquid,
  preparationLiquid
) => {
  // opacity other btns
  changeOpacity(completedBtn, "in");
  changeOpacity(preparationBtn, "in");

  // opacity other liquids
  changeOpacity(completedLiquid, "in");
  changeOpacity(preparationLiquid, "in");

  // // normal texts
  // sizeTexts(progressItems, "normal");

  // // dots
  // changeDots(progressItems, "hide");

  // // opacity other texts
  // changeTextOpacity(completedItems, "in");
  // changeTextOpacity(preparationItems, "in");
};

// End Progress Tasks

// Preparation Tasks
export const prepTasksEnter = (
  completedBtn,
  progressBtn,
  completedLiquid,
  progressLiquid
) => {
  changeOpacity(completedBtn, "out");
  changeOpacity(progressBtn, "out");

  // opacity other liquids
  changeOpacity(completedLiquid, "out");
  changeOpacity(progressLiquid, "out");

  //         // bigger texts
  //         sizeTexts(preparationItems, "big");

  //         // dots
  //         changeDots(preparationItems, "show");

  //         // opacity other texts
  //         changeTextOpacity(completedItems, "out");
  //         changeTextOpacity(progressItems, "out");
};

export const prepTasksLeave = (
  completedBtn,
  progressBtn,
  completedLiquid,
  progressLiquid
) => {
  // opacity other btns
  changeOpacity(completedBtn, "in");
  changeOpacity(progressBtn, "in");

  // opacity other liquids
  changeOpacity(completedLiquid, "in");
  changeOpacity(progressLiquid, "in");

  // // normal texts
  // sizeTexts(preparationItems, "normal");

  // // dots
  // changeDots(preparationItems, "hide");

  // // opacity other texts
  // changeTextOpacity(completedItems, "in");
  // changeTextOpacity(progressItems, "in");
};

// End Preparation Tasks

const changeOpacity = (el, mode) => {
  if (mode === "out") {
    anime({
      targets: el,
      opacity: [1, 0.7],
      duration: 300,
      easing: "linear",
    });
  }

  if (mode === "in") {
    anime({
      targets: el,
      opacity: [0.7, 1],
      duration: 300,
      easing: "linear",
    });
  }
};
