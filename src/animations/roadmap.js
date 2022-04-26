import { anime } from "react-animejs-wrapper";

var completedItems = document.getElementsByClassName("comp_items");
var progressItems = document.getElementsByClassName("prog_items");
var preparationItems = document.getElementsByClassName("prep_items");

var tier1Items = document.getElementsByClassName("t1_item");
var tier2Items = document.getElementsByClassName("t2_item");
var tier3Items = document.getElementsByClassName("t3_item");
var tier4Items = document.getElementsByClassName("t4_item");

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
  sizeTexts(completedItems, "big");

  // dots
  changeDots(completedItems, "show");

  // opacity other texts
  changeTextOpacity(progressItems, "out");
  changeTextOpacity(preparationItems, "out");
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

  // normal texts
  sizeTexts(completedItems, "normal");

  // dots
  changeDots(completedItems, "hide");

  // opacity other texts
  changeTextOpacity(progressItems, "in");
  changeTextOpacity(preparationItems, "in");
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

  // bigger texts
  sizeTexts(progressItems, "big");

  // dots
  changeDots(progressItems, "show");

  // opacity other texts
  changeTextOpacity(completedItems, "out");
  changeTextOpacity(preparationItems, "out");
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

  // normal texts
  sizeTexts(progressItems, "normal");

  // dots
  changeDots(progressItems, "hide");

  // opacity other texts
  changeTextOpacity(completedItems, "in");
  changeTextOpacity(preparationItems, "in");
};

// End Progress Tasks

// Preparation Tasks
export const prepTasksEnter = (
  completedBtn,
  progressBtn,
  completedLiquid,
  progressLiquid
) => {
  // opacity other btns
  changeOpacity(completedBtn, "out");
  changeOpacity(progressBtn, "out");

  // opacity other liquids
  changeOpacity(completedLiquid, "out");
  changeOpacity(progressLiquid, "out");

  // bigger texts
  sizeTexts(preparationItems, "big");

  // dots
  changeDots(preparationItems, "show");

  // opacity other texts
  changeTextOpacity(completedItems, "out");
  changeTextOpacity(progressItems, "out");
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

  // normal texts
  sizeTexts(preparationItems, "normal");

  // dots
  changeDots(preparationItems, "hide");

  // opacity other texts
  changeTextOpacity(completedItems, "in");
  changeTextOpacity(progressItems, "in");
};

// End Preparation Tasks

// Tier 1 Tasks
export const tier1TasksEnter = (tier2Btn, tier3Btn, tier4Btn) => {
  // opacity other btns
  changeOpacity(tier2Btn, "out");
  changeOpacity(tier3Btn, "out");
  changeOpacity(tier4Btn, "out");

  // bigger texts
  sizeTexts(tier1Items, "big");

  // dots
  changeDots(tier1Items, "show");

  // opacity other texts
  changeTextOpacity(tier2Items, "out");
  changeTextOpacity(tier3Items, "out");
  changeTextOpacity(tier4Items, "out");
};

export const tier1TasksLeave = (tier2Btn, tier3Btn, tier4Btn) => {
  // opacity other btns
  changeOpacity(tier2Btn, "in");
  changeOpacity(tier3Btn, "in");
  changeOpacity(tier4Btn, "in");

  // normal texts
  sizeTexts(tier1Items, "normal");

  // dots
  changeDots(tier1Items, "hide");

  // opacity other texts
  changeTextOpacity(tier2Items, "in");
  changeTextOpacity(tier3Items, "in");
  changeTextOpacity(tier4Items, "in");
};

// End Tier 1 Tasks

// Tier 2 Tasks
export const tier2TasksEnter = (tier1Btn, tier3Btn, tier4Btn) => {
  // opacity other btns
  changeOpacity(tier1Btn, "out");
  changeOpacity(tier3Btn, "out");
  changeOpacity(tier4Btn, "out");

  // bigger texts
  sizeTexts(tier2Items, "big");

  // dots
  changeDots(tier2Items, "show");

  // opacity other texts
  changeTextOpacity(tier1Items, "out");
  changeTextOpacity(tier3Items, "out");
  changeTextOpacity(tier4Items, "out");
};

export const tier2TasksLeave = (tier1Btn, tier3Btn, tier4Btn) => {
  // opacity other btns
  changeOpacity(tier1Btn, "in");
  changeOpacity(tier3Btn, "in");
  changeOpacity(tier4Btn, "in");

  // normal texts
  sizeTexts(tier2Items, "normal");

  // dots
  changeDots(tier2Items, "hide");

  // opacity other texts
  changeTextOpacity(tier1Items, "in");
  changeTextOpacity(tier3Items, "in");
  changeTextOpacity(tier4Items, "in");
};

// End Tier 2 Tasks

// Tier 3 Tasks
export const tier3TasksEnter = (tier1Btn, tier2Btn, tier4Btn) => {
  // opacity other btns
  changeOpacity(tier1Btn, "out");
  changeOpacity(tier2Btn, "out");
  changeOpacity(tier4Btn, "out");

  // bigger texts
  sizeTexts(tier3Items, "big");

  // dots
  changeDots(tier3Items, "show");

  // opacity other texts
  changeTextOpacity(tier1Items, "out");
  changeTextOpacity(tier2Items, "out");
  changeTextOpacity(tier4Items, "out");
};

export const tier3TasksLeave = (tier1Btn, tier2Btn, tier4Btn) => {
  // opacity other btns
  changeOpacity(tier1Btn, "in");
  changeOpacity(tier2Btn, "in");
  changeOpacity(tier4Btn, "in");

  // normal texts
  sizeTexts(tier3Items, "normal");

  // dots
  changeDots(tier3Items, "hide");

  // opacity other texts
  changeTextOpacity(tier1Items, "in");
  changeTextOpacity(tier2Items, "in");
  changeTextOpacity(tier4Items, "in");
};

// End Tier 3 Tasks

// Tier 4 Tasks
export const tier4TasksEnter = (tier1Btn, tier2Btn, tier3Btn) => {
  // opacity other btns
  changeOpacity(tier1Btn, "out");
  changeOpacity(tier2Btn, "out");
  changeOpacity(tier3Btn, "out");

  // bigger texts
  sizeTexts(tier4Items, "big");

  // dots
  changeDots(tier4Items, "show");

  // opacity other texts
  changeTextOpacity(tier1Items, "out");
  changeTextOpacity(tier2Items, "out");
  changeTextOpacity(tier3Items, "out");
};

export const tier4TasksLeave = (tier1Btn, tier2Btn, tier3Btn) => {
  // opacity other btns
  changeOpacity(tier1Btn, "in");
  changeOpacity(tier2Btn, "in");
  changeOpacity(tier3Btn, "in");

  // normal texts
  sizeTexts(tier4Items, "normal");

  // dots
  changeDots(tier4Items, "hide");

  // opacity other texts
  changeTextOpacity(tier1Items, "in");
  changeTextOpacity(tier2Items, "in");
  changeTextOpacity(tier3Items, "in");
};

// End Tier 3 Tasks

//Main animations
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

const sizeTexts = (elArray, mode) => {
  if (mode === "big") {
    anime({
      targets: elArray,
      scale: 1.1,
    });
  }

  if (mode === "normal") {
    anime({
      targets: elArray,
      scale: 1,
    });
  }
};

const changeTextOpacity = (elArray, mode) => {
  if (mode === "out") {
    anime({
      targets: elArray,
      opacity: [1, 0.7],
      duration: 300,
      easing: "linear",
    });
  }

  if (mode === "in") {
    anime({
      targets: elArray,
      opacity: [0.7, 1],
      duration: 300,
      easing: "linear",
    });
  }
};

const changeDots = (elArray, mode) => {
  let dotsCollection = [];
  for (let i = 0; i < elArray.length; i++) {
    dotsCollection.push(elArray[i].children);
  }

  if (mode === "show") {
    anime({
      targets: dotsCollection,
      opacity: [0, 1],
      duration: 300,
      easing: "linear",
    });
  }

  if (mode === "hide") {
    anime({
      targets: dotsCollection,
      opacity: [1, 0],
      duration: 300,
      easing: "linear",
    });
  }
};
