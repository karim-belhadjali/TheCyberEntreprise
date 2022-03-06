import { anime } from "react-animejs-wrapper";

export const showDarkLayer = (darkLayer, callback) => {
  darkLayer.style.display = "block";

  anime({
    targets: darkLayer,
    opacity: [0, 0.8],
    duration: 200,
    easing: "linear",
    complete: function () {
      callback();
    },
  });
};

export const hideDarkLayer = (darkLayer) => {
  anime({
    targets: darkLayer,
    opacity: [0.8, 0],
    duration: 200,
    easing: "linear",
    complete: function () {
      darkLayer.style.display = "none";
    },
  });
};

export const showLanguageMenu = () => {
  console.log("ceva");
  let menuRight = document.getElementsByClassName("menu_right")[0];
  let languageMenuUL = document.getElementById("language_menu");
  let languageMenuULli = languageMenuUL.querySelectorAll("li");

  languageMenuUL.style.display = "block";

  anime({
    targets: menuRight,
    right: 0,
    duration: 300,
    easing: "linear",
  });

  anime({
    targets: languageMenuUL,
    delay: 200,
    opacity: [0, 1],
    duration: 1000,
    easing: "linear",
  });

  for (var i = 0; i < languageMenuULli.length; i++) {
    let elementToAnimate = languageMenuULli[i];
    let elementDelay = 30 * i + 30;
    anime({
      targets: elementToAnimate,
      delay: elementDelay,
      translateX: [300, 0],
      duration: 300,
      easing: "linear",
    });
  }
};
export const showMainmenu = () => {
  let menuRight = document.getElementsByClassName("menu_right")[0];
  let mainMenuUL = document.getElementById("main_menu");
  let mainMenuULli = mainMenuUL.querySelectorAll("li");

  mainMenuUL.style.display = "block";

  anime({
    targets: menuRight,
    right: 0,
    duration: 300,
    easing: "linear",
  });

  anime({
    targets: mainMenuUL,
    delay: 200,
    opacity: [0, 1],
    duration: 1000,
    easing: "linear",
  });

  for (var i = 0; i < mainMenuULli.length; i++) {
    let elementToAnimate = mainMenuULli[i];
    let elementDelay = 30 * i + 30;
    anime({
      targets: elementToAnimate,
      delay: elementDelay,
      translateX: [300, 0],
      duration: 300,
      easing: "linear",
    });
  }
};

export const close_main_menu_right = (dark_layer) => {
  let menuRight = document.getElementsByClassName("menu_right")[0];
  let mainMenuUL = document.getElementById("main_menu");
  let mainMenuULli = mainMenuUL.querySelectorAll("li");

  let totalDelay = mainMenuULli.length * 30;

  for (var i = 0; i < mainMenuULli.length; i++) {
    let elementToAnimate = mainMenuULli[i];
    let elementDelay = totalDelay - (30 * i + 30);
    anime({
      targets: elementToAnimate,
      delay: elementDelay,
      translateX: [0, 300],
      duration: 300,
      easing: "linear",
    });
  }

  anime({
    targets: menuRight,
    right: -340,
    delay: 300,
    duration: 300,
    easing: "linear",
  });

  anime({
    targets: mainMenuUL,
    delay: 200,
    opacity: [1, 0],
    duration: 500,
    easing: "linear",
    complete: function () {
      hideDarkLayer(dark_layer);
      mainMenuUL.style.display = "none";
    },
  });
};

export const close_language_menu_right = (darkLayer) => {
  let menuRight = document.getElementsByClassName("menu_right")[0];
  let languageMenuUL = document.getElementById("language_menu");
  let languageMenuULli = languageMenuUL.querySelectorAll("li");

  let totalDelay = languageMenuULli.length * 30;

  for (var i = 0; i < languageMenuULli.length; i++) {
    let elementToAnimate = languageMenuULli[i];
    let elementDelay = totalDelay - (30 * i + 30);
    anime({
      targets: elementToAnimate,
      delay: elementDelay,
      translateX: [0, 300],
      duration: 300,
      easing: "linear",
    });
  }

  anime({
    targets: menuRight,
    right: -340,
    delay: 300,
    duration: 300,
    easing: "linear",
  });

  anime({
    targets: languageMenuUL,
    delay: 200,
    opacity: [1, 0],
    duration: 500,
    easing: "linear",
    complete: function () {
      hideDarkLayer(darkLayer);
      languageMenuUL.style.display = "none";
    },
  });
};