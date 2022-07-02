import { anime } from "react-animejs-wrapper";

var current_scene;
var visible_textContainer;

var xSize = document.body.clientWidth;
var halfBodyWidth = xSize / 2;
var ySize = document.body.clientHeight;
var halfBodyHeight = ySize / 2;
var heroContainer;
var continueStory = true;
var textClick;

// Start Custom Event for Animation
const animReady = new Event("animReady");

export const resize = (width, height) => {
  xSize = width;
  halfBodyWidth = xSize / 2;
  ySize = height;
  halfBodyHeight = ySize / 2;

  let textContainer = "text_scene_" + current_scene;
  let textContainerEl = document.getElementsByClassName(textContainer)[0];

  let marginAdded;

  if (window.innerWidth > 1420) {
    marginAdded = 50;
  } else {
    marginAdded = 35;
  }

  let currentHeight = textContainerEl.offsetHeight + marginAdded;
  visible_textContainer.style.height = currentHeight + "px";
};

export const heroAnimation = (width, height) => {
  continueStory = true;

  xSize = width;
  halfBodyWidth = xSize / 2;
  ySize = height;
  halfBodyHeight = ySize / 2;

  // Start Initial Variables
  current_scene = 1;
  textClick = document.getElementsByClassName("continue_button")[0];

  var hero_main_bg = document.getElementsByClassName("hero_main_bg")[0];
  var hero_full = document.getElementsByClassName("hero_full")[0];

  var img_extension = ".webp";
  visible_textContainer = document.getElementsByClassName("visible_text")[0];
  var visible_textContainerP =
    visible_textContainer.getElementsByTagName("p")[0];
  var textSpeed = 5;
  var startWriting = 500;
  var hero_hover = document.getElementsByClassName("hero_hover")[0];
  var hero_name = document.getElementsByClassName("hero_naming")[0];
  heroContainer = document.getElementsByClassName("hero")[0];

  // End Initial Variables

  // Start PATHs Variables
  var path_cuzzy_1 = createHoverDiv("path_cuzzy_1");
  var path_cuzzy_2 = createHoverDiv("path_cuzzy_2");
  var path_cuzzy_3 = createHoverDiv("path_cuzzy_3");
  var path_cuzzy_4 = createHoverDiv("path_cuzzy_4");

  var path_danield_1 = createHoverDiv("path_danield_1");
  var path_danield_2 = createHoverDiv("path_danield_2");

  var path_darthwhite_1 = createHoverDiv("path_darthwhite_1");
  var path_darthwhite_2 = createHoverDiv("path_darthwhite_2");
  var path_darthwhite_3 = createHoverDiv("path_darthwhite_3");
  var path_darthwhite_4 = createHoverDiv("path_darthwhite_4");
  var path_darthwhite_5 = createHoverDiv("path_darthwhite_5");

  var path_gas_1 = createHoverDiv("path_gas_1");
  var path_gas_2 = createHoverDiv("path_gas_2");

  var path_greek_1 = createHoverDiv("path_greek_1");
  var path_greek_2 = createHoverDiv("path_greek_2");

  var path_hermit_1 = createHoverDiv("path_hermit_1");
  var path_hermit_2 = createHoverDiv("path_hermit_2");
  var path_hermit_3 = createHoverDiv("path_hermit_3");

  var path_karim_1 = createHoverDiv("path_karim_1");
  var path_karim_2 = createHoverDiv("path_karim_2");
  var path_karim_3 = createHoverDiv("path_karim_3");
  var path_karim_4 = createHoverDiv("path_karim_4");

  var path_marzo_1 = createHoverDiv("path_marzo_1");
  var path_marzo_2 = createHoverDiv("path_marzo_2");
  var path_marzo_3 = createHoverDiv("path_marzo_3");
  var path_marzo_4 = createHoverDiv("path_marzo_4");
  var path_marzo_5 = createHoverDiv("path_marzo_5");

  var path_mdking_1 = createHoverDiv("path_mdking_1");
  var path_mdking_2 = createHoverDiv("path_mdking_2");
  var path_mdking_3 = createHoverDiv("path_mdking_3");
  var path_mdking_4 = createHoverDiv("path_mdking_4");

  var path_ody_1 = createHoverDiv("path_ody_1");

  var path_oni_1 = createHoverDiv("path_oni_1");

  var path_phate_1 = createHoverDiv("path_phate_1");
  var path_phate_2 = createHoverDiv("path_phate_2");
  var path_phate_3 = createHoverDiv("path_phate_3");
  var path_phate_4 = createHoverDiv("path_phate_4");
  var path_phate_5 = createHoverDiv("path_phate_5");

  var path_plums_1 = createHoverDiv("path_plums_1");
  var path_plums_2 = createHoverDiv("path_plums_2");
  var path_plums_3 = createHoverDiv("path_plums_3");

  var path_quokka_1 = createHoverDiv("path_quokka_1");
  var path_quokka_2 = createHoverDiv("path_quokka_2");
  var path_quokka_3 = createHoverDiv("path_quokka_3");
  var path_quokka_4 = createHoverDiv("path_quokka_4");

  var path_ryose_1 = createHoverDiv("path_ryose_1");
  var path_ryose_2 = createHoverDiv("path_ryose_2");

  var path_stixil_1 = createHoverDiv("path_stixil_1");
  var path_stixil_2 = createHoverDiv("path_stixil_2");
  var path_stixil_3 = createHoverDiv("path_stixil_3");

  var path_tease_1 = createHoverDiv("path_tease_1");
  var path_tease_2 = createHoverDiv("path_tease_2");
  var path_tease_3 = createHoverDiv("path_tease_3");
  var path_tease_4 = createHoverDiv("path_tease_4");
  var path_tease_5 = createHoverDiv("path_tease_5");
  var path_tease_6 = createHoverDiv("path_tease_6");
  var path_tease_7 = createHoverDiv("path_tease_7");
  var path_tease_8 = createHoverDiv("path_tease_8");
  var path_tease_9 = createHoverDiv("path_tease_9");

  var path_villspor_1 = createHoverDiv("path_villspor_1");
  var path_villspor_2 = createHoverDiv("path_villspor_2");
  var path_villspor_3 = createHoverDiv("path_villspor_3");
  var path_villspor_4 = createHoverDiv("path_villspor_4");
  var path_villspor_5 = createHoverDiv("path_villspor_5");
  var path_villspor_6 = createHoverDiv("path_villspor_6");
  var path_villspor_7 = createHoverDiv("path_villspor_7");

  var path_vito_1 = createHoverDiv("path_vito_1");
  var path_vito_2 = createHoverDiv("path_vito_2");
  var path_vito_3 = createHoverDiv("path_vito_3");
  var path_vito_4 = createHoverDiv("path_vito_4");
  var path_vito_5 = createHoverDiv("path_vito_5");

  var path_cat_1 = createHoverDiv("path_cat_1");
  var path_cat_2 = createHoverDiv("path_cat_2");
  var path_cat_3 = createHoverDiv("path_cat_3");

  var path_you = createHoverDiv("path_you");

  // End PATHs Variables

  // Start Name Variables

  var name_cuzzy_1 = createNameDiv("name_cuzzy_1");
  var name_cuzzy_2 = createNameDiv("name_cuzzy_2");
  var name_cuzzy_3 = createNameDiv("name_cuzzy_3");
  var name_cuzzy_4 = createNameDiv("name_cuzzy_4");

  var name_danield_1 = createNameDiv("name_danield_1");
  var name_danield_2 = createNameDiv("name_danield_2");

  var name_darthwhite_1 = createNameDiv("name_darthwhite_1");
  var name_darthwhite_2 = createNameDiv("name_darthwhite_2");
  var name_darthwhite_3 = createNameDiv("name_darthwhite_3");
  var name_darthwhite_4 = createNameDiv("name_darthwhite_4");
  var name_darthwhite_5 = createNameDiv("name_darthwhite_5");

  var name_gas_1 = createNameDiv("name_gas_1");
  var name_gas_2 = createNameDiv("name_gas_2");

  var name_greek_1 = createNameDiv("name_greek_1");
  var name_greek_2 = createNameDiv("name_greek_2");

  var name_hermit_1 = createNameDiv("name_hermit_1");
  var name_hermit_2 = createNameDiv("name_hermit_2");
  var name_hermit_3 = createNameDiv("name_hermit_3");

  var name_karim_1 = createNameDiv("name_karim_1");
  var name_karim_2 = createNameDiv("name_karim_2");
  var name_karim_3 = createNameDiv("name_karim_3");
  var name_karim_4 = createNameDiv("name_karim_4");

  var name_marzo_1 = createNameDiv("name_marzo_1");
  var name_marzo_2 = createNameDiv("name_marzo_2");
  var name_marzo_3 = createNameDiv("name_marzo_3");
  var name_marzo_4 = createNameDiv("name_marzo_4");
  var name_marzo_5 = createNameDiv("name_marzo_5");

  var name_mdking_1 = createNameDiv("name_mdking_1");
  var name_mdking_2 = createNameDiv("name_mdking_2");
  var name_mdking_3 = createNameDiv("name_mdking_3");
  var name_mdking_4 = createNameDiv("name_mdking_4");

  var name_ody_1 = createNameDiv("name_ody_1");

  var name_oni_1 = createNameDiv("name_oni_1");

  var name_phate_1 = createNameDiv("name_phate_1");
  var name_phate_2 = createNameDiv("name_phate_2");
  var name_phate_3 = createNameDiv("name_phate_3");
  var name_phate_4 = createNameDiv("name_phate_4");
  var name_phate_5 = createNameDiv("name_phate_5");

  var name_plums_1 = createNameDiv("name_plums_1");
  var name_plums_2 = createNameDiv("name_plums_2");
  var name_plums_3 = createNameDiv("name_plums_3");

  var name_quokka_1 = createNameDiv("name_quokka_1");
  var name_quokka_2 = createNameDiv("name_quokka_2");
  var name_quokka_3 = createNameDiv("name_quokka_3");
  var name_quokka_4 = createNameDiv("name_quokka_4");

  var name_ryose_1 = createNameDiv("name_ryose_1");
  var name_ryose_2 = createNameDiv("name_ryose_2");

  var name_stixil_1 = createNameDiv("name_stixil_1");
  var name_stixil_2 = createNameDiv("name_stixil_2");
  var name_stixil_3 = createNameDiv("name_stixil_3");

  var name_tease_1 = createNameDiv("name_tease_1");
  var name_tease_2 = createNameDiv("name_tease_2");
  var name_tease_3 = createNameDiv("name_tease_3");
  var name_tease_4 = createNameDiv("name_tease_4");
  var name_tease_5 = createNameDiv("name_tease_5");
  var name_tease_6 = createNameDiv("name_tease_6");
  var name_tease_7 = createNameDiv("name_tease_7");
  var name_tease_8 = createNameDiv("name_tease_8");
  var name_tease_9 = createNameDiv("name_tease_9");

  var name_villspor_1 = createNameDiv("name_villspor_1");
  var name_villspor_2 = createNameDiv("name_villspor_2");
  var name_villspor_3 = createNameDiv("name_villspor_3");
  var name_villspor_4 = createNameDiv("name_villspor_4");
  var name_villspor_5 = createNameDiv("name_villspor_5");
  var name_villspor_6 = createNameDiv("name_villspor_6");
  var name_villspor_7 = createNameDiv("name_villspor_7");

  var name_vito_1 = createNameDiv("name_vito_1");
  var name_vito_2 = createNameDiv("name_vito_2");
  var name_vito_3 = createNameDiv("name_vito_3");
  var name_vito_4 = createNameDiv("name_vito_4");
  var name_vito_5 = createNameDiv("name_vito_5");

  var name_cat_1 = createNameDiv("name_cat_1");
  var name_cat_2 = createNameDiv("name_cat_2");
  var name_cat_3 = createNameDiv("name_cat_3");

  var name_you = createNameDiv("name_you");

  // End Name Variables

  // Start Add Listeners to Paths

  addPathListener(path_cuzzy_1, name_cuzzy_1);
  addPathListener(path_cuzzy_2, name_cuzzy_2);
  addPathListener(path_cuzzy_3, name_cuzzy_3);
  addPathListener(path_cuzzy_4, name_cuzzy_4);

  addPathListener(path_danield_1, name_danield_1);
  addPathListener(path_danield_2, name_danield_2);

  addPathListener(path_darthwhite_1, name_darthwhite_1);
  addPathListener(path_darthwhite_2, name_darthwhite_2);
  addPathListener(path_darthwhite_3, name_darthwhite_3);
  addPathListener(path_darthwhite_4, name_darthwhite_4);
  addPathListener(path_darthwhite_5, name_darthwhite_5);

  addPathListener(path_gas_1, name_gas_1);
  addPathListener(path_gas_2, name_gas_2);

  addPathListener(path_greek_1, name_greek_1);
  addPathListener(path_greek_2, name_greek_2);

  addPathListener(path_hermit_1, name_hermit_1);
  addPathListener(path_hermit_2, name_hermit_2);
  addPathListener(path_hermit_3, name_hermit_3);

  addPathListener(path_karim_1, name_karim_1);
  addPathListener(path_karim_2, name_karim_2);
  addPathListener(path_karim_3, name_karim_3);
  addPathListener(path_karim_4, name_karim_4);

  addPathListener(path_marzo_1, name_marzo_1);
  addPathListener(path_marzo_2, name_marzo_2);
  addPathListener(path_marzo_3, name_marzo_3);
  addPathListener(path_marzo_4, name_marzo_4);
  addPathListener(path_marzo_5, name_marzo_5);

  addPathListener(path_mdking_1, name_mdking_1);
  addPathListener(path_mdking_2, name_mdking_2);
  addPathListener(path_mdking_3, name_mdking_3);
  addPathListener(path_mdking_4, name_mdking_4);

  addPathListener(path_ody_1, name_ody_1);

  addPathListener(path_oni_1, name_oni_1);

  addPathListener(path_phate_1, name_phate_1);
  addPathListener(path_phate_2, name_phate_2);
  addPathListener(path_phate_3, name_phate_3);
  addPathListener(path_phate_4, name_phate_4);
  addPathListener(path_phate_5, name_phate_5);

  addPathListener(path_plums_1, name_plums_1);
  addPathListener(path_plums_2, name_plums_2);
  addPathListener(path_plums_3, name_plums_3);

  addPathListener(path_quokka_1, name_quokka_1);
  addPathListener(path_quokka_2, name_quokka_2);
  addPathListener(path_quokka_3, name_quokka_3);
  addPathListener(path_quokka_4, name_quokka_4);

  addPathListener(path_ryose_1, name_ryose_1);
  addPathListener(path_ryose_2, name_ryose_2);

  addPathListener(path_stixil_1, name_stixil_1);
  addPathListener(path_stixil_2, name_stixil_2);
  addPathListener(path_stixil_3, name_stixil_3);

  addPathListener(path_tease_1, name_tease_1);
  addPathListener(path_tease_2, name_tease_2);
  addPathListener(path_tease_3, name_tease_3);
  addPathListener(path_tease_4, name_tease_4);
  addPathListener(path_tease_5, name_tease_5);
  addPathListener(path_tease_6, name_tease_6);
  addPathListener(path_tease_7, name_tease_7);
  addPathListener(path_tease_8, name_tease_8);
  addPathListener(path_tease_9, name_tease_9);

  addPathListener(path_villspor_1, name_villspor_1);
  addPathListener(path_villspor_2, name_villspor_2);
  addPathListener(path_villspor_3, name_villspor_3);
  addPathListener(path_villspor_4, name_villspor_4);
  addPathListener(path_villspor_5, name_villspor_5);
  addPathListener(path_villspor_6, name_villspor_6);
  addPathListener(path_villspor_7, name_villspor_7);

  addPathListener(path_vito_1, name_vito_1);
  addPathListener(path_vito_2, name_vito_2);
  addPathListener(path_vito_3, name_vito_3);
  addPathListener(path_vito_4, name_vito_4);
  addPathListener(path_vito_5, name_vito_5);

  addPathListener(path_cat_1, name_cat_1);
  addPathListener(path_cat_2, name_cat_2);
  addPathListener(path_cat_3, name_cat_3);

  addPathListener(path_you, name_you);

  var goodToClick = 1;

  // End Add Listeners to Paths

  // End Custom Event for Animation
  // START SPEECH BUTTON
  function initButton() {
    let btnTextsAll = document.querySelectorAll("div.continue_button > span");

    for (let i = 0; i < btnTextsAll.length; i++) {
      btnTextsAll[i].style.display = "none";
    }

    let btn_text_scene = "btn_text_scene_" + current_scene;

    setTimeout(() => {
      if (continueStory) {
        let btn_text = document.getElementsByClassName(btn_text_scene)[0];
        btn_text.style.display = "block";

        anime({
          targets: textClick,
          opacity: 1,
          duration: 500,
          easing: "linear",
        });
      }
    }, 20);
  }
  // END SPEECH BUTTON
  // Start Listen Custom Event for Animation
  heroContainer.addEventListener("animReady", function () {
    goodToClick++;

    if (goodToClick === 2) {
      initButton();
    }
  });

  // End Listen Custom Event for Animation

  // Start Dispatch Custom Anim Event

  function dispatchAnimEvent() {
    heroContainer.dispatchEvent(animReady);
  }

  // Emd Dispatch Custom Anim Event

  // Start Flames

  // window.addEventListener("resize", function () {
  //   xSize = document.body.clientWidth;
  //   halfBodyWidth = xSize / 2;
  //   ySize = document.body.clientHeight;
  //   halfBodyHeight = ySize / 2;

  //   resizeTextBox();
  // });

  var flameSmall = document.getElementsByClassName("flame_small")[0];
  var flameBig = document.getElementsByClassName("flame_big")[0];
  var hiddenFlames = true;

  document.addEventListener("mousemove", (e) => {
    if (hiddenFlames == true) {
      hiddenFlames = false;

      anime({
        targets: [flameSmall, flameBig],
        opacity: [0, 1],
        easing: "linear",
        duration: 500,
      });
    }

    let xPos = e.clientX;
    let yPos = e.clientY;

    let horizontalPercentageBig = ((xPos / halfBodyWidth) * 100) / 10;
    flameBig.style.left = "-" + horizontalPercentageBig + "%";

    let verticalPercentageBig = ((yPos / halfBodyHeight) * 100) / 10;
    flameBig.style.top = "-" + verticalPercentageBig + "%";

    let horizontalPercentageSmall = ((xPos / halfBodyWidth) * 100) / 20;
    flameSmall.style.left = "-" + horizontalPercentageSmall + "%";

    let verticalPercentageSmall = ((yPos / halfBodyHeight) * 100) / 20;
    flameSmall.style.top = "-" + verticalPercentageSmall + "%";
  });

  // End Flames

  // Start Create Hover Divs Paths
  function createHoverDiv(classname) {
    let element = document.createElement("div");
    element.classList.add(classname);
    hero_hover.appendChild(element);
    return element;
  }
  // End Create Hover Divs Paths

  // Start Create Name Divs Paths
  function createNameDiv(classname) {
    let element = document.createElement("div");
    element.classList.add(classname);
    hero_name.appendChild(element);
    return element;
  }
  // End Create Name Divs Paths

  // Start Show / Hide Paths
  function showHoverPath(element, delay) {
    setTimeout(function () {
      element.style.display = "block";
    }, delay);
  }

  function hideHoverPath(element, delay) {
    setTimeout(function () {
      element.style.display = "none";
    }, delay);
  }
  // END Show / Hide Paths

  // Start Path Listener
  function addPathListener(path, name) {
    path.addEventListener("mouseenter", function () {
      anime({
        targets: name,
        opacity: [0, 1],
        duration: 300,
        easing: "linear",
      });
    });

    path.addEventListener("mouseout", function () {
      anime({
        targets: name,
        opacity: [1, 0],
        duration: 300,
        easing: "linear",
      });
    });
  }

  // END Path Listener

  // BUILD MASCOTS

  var mascotContainer = document.getElementsByClassName("mascot_images")[0];

  function buildMascot(mascotName, mascotContainer) {
    let element = document.createElement("img");
    let img = require("../assets/mascot/" + mascotName + ".webp");
    element.src = img;
    element.width = "1";
    element.height = "1";
    element.alt = mascotName;
    element.classList.add("hiddenMascot");
    element.classList.add("absoluteMascot");
    mascotContainer.appendChild(element);
    return element;
  }

  function showMascot(mascot) {
    let currentVisibleMascot =
      document.getElementsByClassName("visibleMascot")[0];

    if (mascot !== currentVisibleMascot) {
      if (currentVisibleMascot) {
        anime({
          targets: currentVisibleMascot,
          opacity: [1, 0],
          duration: 500,
          easing: "linear",
          complete: function () {
            currentVisibleMascot.classList.remove("visibleMascot");
          },
        });
      }

      anime({
        targets: mascot,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        complete: function () {
          mascot.classList.add("visibleMascot");
        },
      });
    }
  }

  // END BUILD MASCOTS

  // Start Init Mascots
  var mascotNormal = buildMascot("normal", mascotContainer);
  var mascotHappy = buildMascot("happy", mascotContainer);
  var mascotAngry = buildMascot("angry", mascotContainer);
  var mascotSad = buildMascot("sad", mascotContainer);
  var mascotSurprised = buildMascot("surprised", mascotContainer);
  var mascotWink = buildMascot("wink", mascotContainer);

  // End Init Mascots

  // Start Change Mascot
  function changeMascot() {
    let toMascot;

    switch (current_scene) {
      case 1:
        toMascot = mascotNormal;
        break;
      case 2:
        toMascot = mascotSurprised;
        break;

      case 3:
        toMascot = mascotHappy;
        break;

      case 4:
        toMascot = mascotNormal;
        break;

      case 5:
        toMascot = mascotWink;
        break;

      case 6:
        toMascot = mascotSad;
        break;

      case 7:
        toMascot = mascotSad;
        break;

      case 8:
        toMascot = mascotAngry;
        break;

      case 9:
        toMascot = mascotAngry;
        break;

      case 10:
        toMascot = mascotSad;
        break;

      case 11:
        toMascot = mascotAngry;
        break;

      case 12:
        toMascot = mascotNormal;
        break;

      case 13:
        toMascot = mascotHappy;
        break;

      case 14:
        toMascot = mascotSad;
        break;

      case 15:
        toMascot = mascotHappy;
        break;

      case 16:
        toMascot = mascotWink;
        break;

      case 17:
        toMascot = mascotNormal;
        break;

      case 18:
        toMascot = mascotSurprised;
        break;

      case 19:
        toMascot = mascotWink;
        break;

      case 20:
        toMascot = mascotNormal;
        break;

      case 21:
        toMascot = mascotAngry;
        break;

      case 22:
        toMascot = mascotNormal;
        break;

      case 23:
        toMascot = mascotHappy;
        break;

      case 24:
        toMascot = mascotWink;
        break;

      default:
        toMascot = mascotHappy;
    }

    showMascot(toMascot);
  }

  // End Change Mascot

  // START SPEECH
  function initSpeech(changeTextTo) {
    let speechContainer = document.getElementsByClassName("speech")[0];
    anime({
      targets: speechContainer,
      opacity: [0, 1],
      duration: 400,
      easing: "linear",
    });
    changeTextTo(400);
  }
  // END SPEECH

  // CHANGE SPEECH TEXT
  function changeTextTo(delay) {
    if (delay == null) {
      delay = 0;
    }

    let textContainer = "text_scene_" + current_scene;

    setTimeout(function () {
      let textContainerEl = document.getElementsByClassName(textContainer)[0];

      let marginAdded;

      if (window.innerWidth > 1420) {
        marginAdded = 50;
      } else {
        marginAdded = 35;
      }

      let currentHeight = textContainerEl.offsetHeight + marginAdded;
      let currentText = textContainerEl.innerText;

      let colorText = currentText;

      if (textContainerEl.getElementsByClassName("colors")[0]) {
        let toColor =
          textContainerEl.getElementsByClassName("colors")[0].innerText;

        let toCollorArray = toColor.split("*");

        for (let i = 0; i < toCollorArray.length; i++) {
          colorText = colorText.replace(
            toCollorArray[i],
            "<span>" + toCollorArray[i] + "</span>"
          );
        }
      }

      visible_textContainerP.innerHTML = "";
      visible_textContainer.style.height = "0px";

      anime({
        targets: visible_textContainer,
        height: currentHeight,
        duration: 400,
        delay: delay,
        easing: "linear",
        complete: function () {
          setTimeout(function () {
            let i = 0;
            function typeWriter() {
              if (i < currentText.length) {
                visible_textContainerP.innerHTML += currentText.charAt(i);
                i++;

                setTimeout(typeWriter, textSpeed);

                // text was written
                if (i == currentText.length) {
                  visible_textContainerP.innerHTML = colorText;

                  dispatchAnimEvent();
                }
              }
            }

            typeWriter();
          }, startWriting);
        },
      });
    }, 500);
  }

  // END CHANGE SPEECH TEXT

  // Start Resize Text Box

  function resizeTextBox() {
    let textContainer = "text_scene_" + current_scene;
    let textContainerEl = document.getElementsByClassName(textContainer)[0];

    let marginAdded;

    if (window.innerWidth > 1420) {
      marginAdded = 50;
    } else {
      marginAdded = 35;
    }

    let currentHeight = textContainerEl.offsetHeight + marginAdded;
    visible_textContainer.style.height = currentHeight + "px";
  }

  // End Resize Text Box

  // INIT DRAWING FUNCTION

  function initDrawing() {
    showMascot(mascotNormal);
    initSpeech(changeTextTo);
    prepare["Scene2"]();
  }

  // END INIT DRAWING FUNCTION

  function hideNextBtn() {
    textClick.style.opacity = 0;
    let textClickSpans = textClick.getElementsByTagName("span");

    for (let i = 0; i < textClickSpans.length; i++) {
      textClickSpans[i].style.display = "none";
    }
  }

  function hideFlames() {
    anime({
      targets: hero_main_bg,
      opacity: [1, 0],
      duration: 800,
      easing: "linear",
      complete: function () {
        hero_main_bg.style.display = "none";
      },
    });
  }

  textClick.addEventListener("click", function () {
    current_scene++;

    if (current_scene == 2) {
      hideFlames();
    }

    goodToClick = 0;
    hideNextBtn();
    changeMascot();
    changeTextTo();
    changeScene();
  });

  // Start Build Image Desktop

  function buildImage(path, additional_class) {
    let element = document.createElement("img");
    let img = require("../assets/main/main/" + path + img_extension);
    element.src = img;
    element.width = "1";
    element.height = "1";
    element.alt = "The Cyber Enterprise";

    element.classList.add("absolute_image");
    element.classList.add("zero_opacity");

    if (additional_class) {
      element.classList.add(additional_class);
    }

    hero_full.appendChild(element);
    return element;
  }

  // End Build Image Desktop

  // Start Image FadeIn
  function imageFadeIn(element, duration, delay, fallback, hoverPath) {
    if (!delay) {
      delay = 0;
    }

    anime({
      targets: element,
      opacity: [0, 1],
      duration: duration,
      delay: delay,
      easing: "linear",
      complete: function () {
        if (fallback) {
          fallback();
        }
      },
    });

    if (hoverPath) {
      showHoverPath(hoverPath, delay);
    }
  }

  // Stop Image FadeIn

  // Start Image FadeOut
  function imageFadeOut(element, duration, delay, fallback, hoverPath) {
    if (!delay) {
      delay = 0;
    }

    anime({
      targets: element,
      opacity: [1, 0],
      duration: duration,
      delay: delay,
      easing: "linear",
      complete: function () {
        if (fallback) {
          fallback();
        }
      },
    });

    if (hoverPath) {
      hideHoverPath(hoverPath, delay);
    }
  }

  // Stop Image FadeOut

  // Start Ground Opacity
  function groundDark(from, to, delay) {
    if (!delay) {
      delay = 0;
    }

    if (from != 0) {
      from = from / 100;
    }

    if (to != 0) {
      to = to / 100;
    }

    anime({
      targets: ground_dark,
      opacity: [from, to],
      duration: 500,
      delay: delay,
      easing: "linear",
    });
  }

  // Stop Ground Opacity

  // Start MoveBox

  function moveBox(element, duration, delay, fallback) {
    if (!delay) {
      delay = 0;
    }

    let moving = anime.timeline({
      easing: "linear",
      delay: delay,
    });

    moving
      .add({
        targets: element,
        duration: 1,
        opacity: 1,
        translateX: "-150px",
      })
      .add({
        targets: element,
        duration: duration,
        translateX: "0px",
        complete: function () {
          if (fallback) {
            fallback();
          }
        },
      });
  }

  // End MoveBox

  // Start Custom MDking
  function customMDKing() {
    imageFadeOut(team_mdking_1, 300, 14000, false, path_mdking_1);
    imageFadeIn(team_mdking_2, 300, 14000, dispatchAnimEvent, path_mdking_2);
  }
  // End Custom MDking

  function fadeInBeers() {
    imageFadeIn(beer_8, 500, 21500);
    imageFadeIn(beer_9, 500, 22000, dispatchAnimEvent);
  }

  function hideCircles() {
    imageFadeOut(transport_ring_d1, 500, 1100);
    imageFadeOut(transport_ring_f1, 500, 1100);

    imageFadeOut(transport_ring_d2, 500, 1400);
    imageFadeOut(transport_ring_f2, 500, 1400);

    imageFadeOut(transport_ring_d3, 500, 1700);
    imageFadeOut(transport_ring_f3, 500, 1700);

    imageFadeOut(transport_ring_d4, 500, 2000);
    imageFadeOut(transport_ring_f4, 500, 2000);
  }

  function createDarkShadow() {
    let element = document.createElement("div");
    element.classList.add("dark_shadow");

    hero_full.appendChild(element);
    return element;
  }

  function makeShadowDarker(delay) {
    if (!delay) {
      delay = 0;
    }

    let from = 0;
    let to = 0.8;

    anime({
      targets: dark_layer,
      opacity: [from, to],
      duration: 1000,
      delay: delay,
      easing: "linear",
    });
  }

  function fadeOutWorker() {
    imageFadeOut(billboard_man, 500, 2000);
  }

  function nftAnimation() {
    let delay = 300;
    let onTime = 1000;
    let duration = 300;

    let nftAnim = anime.timeline({
      easing: "linear",
      loop: true,
    });

    nftAnim

      .add({
        targets: bb_nft_2,
        duration: duration,
        opacity: 1,
        delay: delay,
      })
      .add({
        targets: bb_nft_3,
        duration: duration,
        opacity: 1,
        delay: delay,
      })
      .add({
        targets: bb_nft_4,
        duration: duration,
        opacity: 1,
        delay: delay,
      })
      .add({
        targets: bb_nft_4,
        duration: duration,
        opacity: 0,
        delay: onTime,
      })
      .add({
        targets: bb_nft_3,
        duration: duration,
        opacity: 0,
        delay: delay,
      })
      .add({
        targets: bb_nft_2,
        duration: duration,
        opacity: 0,
        delay: delay,
      });
  }

  function showLastButtons(delay) {
    let join_button = document.getElementsByClassName("join_button")[0];
    let informed_button = document.getElementsByClassName("informed_button")[0];

    setTimeout(function () {
      join_button.style.display = "block";
      informed_button.style.display = "block";
    }, delay);

    imageFadeIn(join_button, 500, delay);
    imageFadeIn(informed_button, 500, delay);
  }

  // Start Image Vars
  var sky_bg_blue;
  var sky_fog_blue;
  var sky_cloud_1;
  var sky_cloud_2;
  var sky_cloud_3;
  var sky_cloud_4;
  var mountain_1;
  var ground_1;
  var ground_dark;
  var tree_1;
  var tree_2;
  var tree_3;
  var tree_4;
  var factory_old;
  var worker_face_1;
  var worker_back_1;
  var discord_1;
  var cat_1;
  var oni_1;
  var ody_1;

  var cat_2;
  var mill_1;
  var worker_mill_1;
  var boxes_bone;
  var boxes_leash;
  var bird_1;
  var bird_2;
  var bird_3;
  var factory_old_smoke;

  var stixil_1;
  var hermit_1;
  var solar_1;
  var solar_2;
  var solar_3;
  var solar_4;
  var solar_5;
  var solar_6;
  var solar_7;
  var solar_8;
  var solar_9;
  var solar_10;
  var wind_1;
  var wind_2;
  var wind_3;
  var worker_mill_6;

  var boxes_1;
  var boxes_2;
  var boxes_3;
  var boxes_4;
  var boxes_5;
  var boxes_6;
  var boxes_7;
  var boxes_8;
  var boxes_9;
  var boxes_10;
  var boxes_11;
  var boxes_12;
  var boxes_13;
  var boxes_14;
  var boxes_15;
  var boxes_16;
  var boxes_17;
  var boxes_18;
  var boxes_19;
  var boxes_20;

  var cat_3;
  var worker_face_2;
  var worker_mill_2;
  var sky_bg_purple;
  var drones_empty_1;
  var drones_empty_2;

  var drones_box_1;
  var drones_box_2;
  var sky_fog_black;
  var worker_face_3;
  var worker_back_2;

  var sky_bg_black;
  var discord_2;
  var worker_running_1;
  var worker_face_4;
  var suport;
  var crown;
  var fire_helmet_back;
  var fire_helmet_front;
  var helmet_back;
  var helmet_front;
  var paintball;
  var pickaxe;
  var spear;

  var worker_running_2;
  var robot_1;
  var worker_mill_5;

  var worker_face_5;
  var worker_mill_4;
  var robot_2;
  var robot_3;
  var robot_4;

  var factory_old_destroyed;
  var worker_running_3;
  var extra_beer_trash;
  var robot_5;
  var robot_6;
  var solar_destroyed_piece;
  var solar_destroyed_1;
  var solar_destroyed_2;
  var solar_destroyed_3;
  var solar_destroyed_4;
  var solar_destroyed_5;
  var solar_destroyed_6;
  var solar_destroyed_7;
  var solar_destroyed_8;
  var solar_destroyed_9;
  var solar_destroyed_10;
  var wind_destroyed_1;
  var wind_destroyed_2;
  var wind_destroyed_3;
  var wind_destroyed_piece_1;
  var wind_destroyed_piece_2;
  var wind_destroyed_piece_3;
  var wind_destroyed_piece_4;
  var worker_back_3;

  var worker_running_4;
  var team_tease_1;
  var robot_7;
  var team_villspor_1;
  var team_phate_1;
  var team_cuzzy_1;
  var team_quokka_1;

  var worker_back_4;
  var team_tease_2;
  var team_mdking_1;
  var team_mdking_2;
  var team_karim_1;
  var team_darthwhite_1;
  var team_vito_1;
  var team_villspor_2;
  var team_greek_1;
  var team_phate_2;
  var team_plums_1;
  var team_marzo_1;
  var team_stixil_2;
  var hermit_2;
  var robot_8;

  var team_plums_2;
  var team_mdking_3;
  var team_karim_2;
  var team_darthwhite_2;
  var team_vito_2;
  var team_villspor_3;
  var team_greek_2;
  var team_quokka_2;
  var team_cuzzy_2;
  var team_phate_3;
  var team_tease_3;
  var team_marzo_2;
  var worker_back_5;
  var robot_gun_1;
  var robot_gun_2;
  var robot_gun_3;
  var robot_part_1;
  var robot_part_2;
  var robot_part_3;
  var beer_1;
  var beer_2;
  var extra_protein;

  var team_mdking_4;
  var team_plums_3;
  var beer_3;
  var worker_back_6;

  var team_marzo_3;
  var team_tease_4;
  var team_karim_3;
  var beer_4;
  var beer_5;
  var beer_6;
  var team_darthwhite_3;
  var rubbe_1;
  var rubbe_2;
  var rubbe_3;
  var rubbe_4;
  var team_vito_3;
  var team_villspor_4;
  var team_quokka_3;
  var team_cuzzy_3;
  var team_phate_4;

  var factory_bike;
  var boxes_new_charge;
  var boxes_new_credit;
  var boxes_new_1;
  var boxes_new_2;
  var boxes_new_3;
  var boxes_new_4;
  var boxes_new_5;
  var boxes_new_6;
  var boxes_new_7;
  var boxes_new_8;
  var boxes_new_9;
  var boxes_new_10;
  var boxes_new_11;
  var boxes_new_12;
  var boxes_new_13;
  var boxes_new_14;
  var boxes_new_15;
  var boxes_new_16;
  var boxes_new_17;
  var boxes_new_18;
  var boxes_new_19;
  var boxes_new_20;
  var beer_7;
  var beer_8;
  var beer_9;
  var team_villspor_5;
  var team_phate_5;
  var extra_protein_2;
  var team_tease_5;
  var team_stixil_3;
  var team_hermit_3;
  var extra_nuclear;
  var factory_smoke_white;

  var team_danield_1;
  var team_ryose_1;
  var team_gas_1;
  var team_karim_4;
  var team_vito_4;
  var team_darthwhite_4;
  var team_marzo_4;
  var team_tease_6;
  var team_cuzzy_4;
  var team_quokka_4;
  var factory_new;
  var factory_new_mill;

  var factory_arm;
  var factory_foot;
  var team_darthwhite_5;
  var team_vito_5;
  var worker_back_7;
  var team_danield_2;
  var beer_10;
  var team_ryose_2;
  var team_gas_2;
  var team_villspor_6;
  var team_marzo_5;

  var worker_back_8;
  var team_tease_7;

  var transport_base;
  var transport_up;
  var transport_down;
  var transport_green;
  var team_tease_8;
  var team_villspor_7;

  var team_tease_9;
  var transport_ring_f1;
  var transport_ring_f2;
  var transport_ring_f3;
  var transport_ring_f4;
  var transport_ring_d1;
  var transport_ring_d2;
  var transport_ring_d3;
  var transport_ring_d4;

  var dark_layer;
  var billboard_base;
  var billboard_man;
  var billboard_note;
  var bulb_1;
  var bulb_2;
  var bulb_3;
  var bulb_4;
  var bulb_5;
  var bulb_6;
  var bulb_7;
  var bulb_8;
  var bulb_9;
  var bb_the;
  var bb_cyber;
  var bb_creditors;
  var bb_green_arrow;
  var bb_logo;
  var bb_blue_arrow;
  var bb_lend;
  var bb_earn;
  var bb_liquidate;
  var bb_nft_1;
  var bb_nft_2;
  var bb_nft_3;
  var bb_nft_4;
  var sky_fog_purple;

  // End Image Vars

  // START PREPARING SCENES

  var prepare = {
    Scene2: function () {
      sky_bg_blue = buildImage("sky/bg/blue", "skycolor");

      sky_fog_blue = buildImage("sky/fog/blue", "fog");

      sky_cloud_1 = buildImage("sky/cloud/1");
      sky_cloud_2 = buildImage("sky/cloud/2");
      sky_cloud_3 = buildImage("sky/cloud/3");
      sky_cloud_4 = buildImage("sky/cloud/4");

      mountain_1 = buildImage("mountain/1");

      ground_1 = buildImage("ground/1", "ground");
      ground_dark = buildImage("ground/dark", "ground");

      tree_1 = buildImage("tree/1", "layer_2");
      tree_2 = buildImage("tree/2", "layer_2");
      tree_3 = buildImage("tree/3", "layer_2");
      tree_4 = buildImage("tree/4", "layer_2");

      factory_old = buildImage("factory/old", "layer_2");

      worker_face_1 = buildImage("worker/face/1", "layer_2");
      worker_back_1 = buildImage("worker/back/1", "layer_2");

      discord_1 = buildImage("discord/1", "layer_2");

      cat_1 = buildImage("cat/1", "layer_2");

      oni_1 = buildImage("team/oni/1", "layer_2");

      ody_1 = buildImage("team/ody/1", "layer_2");
    },

    Scene3: function () {
      cat_2 = buildImage("cat/2", "layer_2");

      mill_1 = buildImage("mill/1", "layer_2");

      worker_mill_1 = buildImage("worker/mill/1", "layer_2");

      boxes_bone = buildImage("boxes/bone", "box_mill");
      boxes_leash = buildImage("boxes/leash", "box_mill");

      bird_1 = buildImage("bird/1");
      bird_2 = buildImage("bird/2");
      bird_3 = buildImage("bird/3");

      factory_old_smoke = buildImage("factory/old_smoke", "old_factory_smoke");
    },

    Scene4: function () {
      stixil_1 = buildImage("team/stixil/1", "stixil_1");

      hermit_1 = buildImage("team/hermit/1", "hermit_1");

      solar_1 = buildImage("solar/1", "layer_2");
      solar_2 = buildImage("solar/2", "layer_2");
      solar_3 = buildImage("solar/3", "layer_2");
      solar_4 = buildImage("solar/4", "layer_2");
      solar_5 = buildImage("solar/5", "layer_2");
      solar_6 = buildImage("solar/6", "layer_2");
      solar_7 = buildImage("solar/7", "layer_2");
      solar_8 = buildImage("solar/8", "layer_2");
      solar_9 = buildImage("solar/9", "layer_2");
      solar_10 = buildImage("solar/10", "layer_2");

      wind_1 = buildImage("wind/1", "wind_power");
      wind_2 = buildImage("wind/2", "wind_power");
      wind_3 = buildImage("wind/3", "wind_power");
    },

    Scene5: function () {
      boxes_1 = buildImage("boxes/1", "box_behind");
      boxes_2 = buildImage("boxes/2", "box_behind");
      boxes_3 = buildImage("boxes/3", "box_behind");
      boxes_4 = buildImage("boxes/4", "box_behind");
      boxes_5 = buildImage("boxes/5", "box_behind");
      boxes_6 = buildImage("boxes/6", "box_behind");
      boxes_7 = buildImage("boxes/7", "box_behind");
      boxes_8 = buildImage("boxes/8", "box_behind");
      boxes_9 = buildImage("boxes/9", "box_behind");
      boxes_10 = buildImage("boxes/10", "box_behind");
      boxes_11 = buildImage("boxes/11", "box_behind");
      boxes_12 = buildImage("boxes/12", "box_behind");
      boxes_13 = buildImage("boxes/13", "box_behind");
      boxes_14 = buildImage("boxes/14", "box_behind");
      boxes_15 = buildImage("boxes/15", "box_behind");
      boxes_16 = buildImage("boxes/16", "box_behind");
      boxes_17 = buildImage("boxes/17", "box_behind");
      boxes_18 = buildImage("boxes/18", "box_behind");
      boxes_19 = buildImage("boxes/19", "box_behind");
      boxes_20 = buildImage("boxes/20", "box_behind");

      sky_fog_purple = buildImage("sky/fog/purple", "fog");
    },

    Scene6: function () {
      cat_3 = buildImage("cat/3", "layer_2");

      worker_face_2 = buildImage("worker/face/2", "layer_2");

      sky_bg_purple = buildImage("sky/bg/purple", "skycolor");

      drones_empty_1 = buildImage("drones/empty/1", "layer_2");
      drones_empty_2 = buildImage("drones/empty/2", "layer_2");

      worker_mill_2 = buildImage("worker/mill/2", "layer_2");
      worker_mill_6 = buildImage("worker/mill/6", "layer_2");
    },

    Scene7: function () {
      sky_fog_black = buildImage("sky/fog/black", "fog");

      drones_box_1 = buildImage("drones/box/1", "layer_2");
      drones_box_2 = buildImage("drones/box/2", "layer_2");

      worker_face_3 = buildImage("worker/face/3", "layer_2");
      worker_back_2 = buildImage("worker/back/2", "layer_2");

      worker_mill_5 = buildImage("worker/mill/5", "layer_2");
    },

    Scene8: function () {
      sky_bg_black = buildImage("sky/bg/black", "skycolor");

      discord_2 = buildImage("discord/2", "layer_2");

      worker_face_4 = buildImage("worker/face/4", "layer_2");
      worker_running_1 = buildImage("worker/running/1", "layer_2");

      suport = buildImage("easel/suport", "suport");
      crown = buildImage("easel/crown", "top_suport");
      fire_helmet_back = buildImage("easel/fire_helmet_back", "back_suport");
      fire_helmet_front = buildImage("easel/fire_helmet_front", "top_suport");
      helmet_back = buildImage("easel/helmet_back", "back_suport");
      helmet_front = buildImage("easel/helmet_front", "top_suport");
      paintball = buildImage("easel/paintball", "top_suport");
      pickaxe = buildImage("easel/pickaxe", "top_suport");
      spear = buildImage("easel/spear", "top_suport");
    },

    Scene9: function () {
      worker_running_2 = buildImage("worker/running/2", "layer_2");

      robot_1 = buildImage("robot/1", "layer_2");
    },

    Scene10: function () {
      worker_face_5 = buildImage("worker/face/5", "layer_2");
      worker_mill_4 = buildImage("worker/mill/4", "layer_2");

      robot_2 = buildImage("robot/2", "layer_2");
      robot_3 = buildImage("robot/3", "layer_2");
      robot_4 = buildImage("robot/4", "layer_2");
    },

    Scene11: function () {
      factory_old_destroyed = buildImage("factory/old_destroyed", "layer_2-1");

      worker_running_3 = buildImage("worker/running/3", "layer_2");

      extra_beer_trash = buildImage("extra/beer_trash", "layer_2");

      robot_5 = buildImage("robot/5", "layer_2");
      robot_6 = buildImage("robot/6", "layer_2");

      solar_destroyed_piece = buildImage("solar_destroyed/piece", "layer_2");
      solar_destroyed_1 = buildImage("solar_destroyed/1", "layer_2");
      solar_destroyed_2 = buildImage("solar_destroyed/2", "layer_2");
      solar_destroyed_3 = buildImage("solar_destroyed/3", "layer_2");
      solar_destroyed_4 = buildImage("solar_destroyed/4", "layer_2");
      solar_destroyed_5 = buildImage("solar_destroyed/5", "layer_2");
      solar_destroyed_6 = buildImage("solar_destroyed/6", "layer_2");
      solar_destroyed_7 = buildImage("solar_destroyed/7", "layer_2");
      solar_destroyed_8 = buildImage("solar_destroyed/8", "layer_2");
      solar_destroyed_9 = buildImage("solar_destroyed/9", "layer_2");
      solar_destroyed_10 = buildImage("solar_destroyed/10", "layer_2");

      wind_destroyed_1 = buildImage("wind_destroyed/1", "wind_power");
      wind_destroyed_2 = buildImage("wind_destroyed/2", "wind_power");
      wind_destroyed_3 = buildImage("wind_destroyed/3", "wind_power");

      wind_destroyed_piece_1 = buildImage(
        "wind_destroyed/piece_1",
        "wind_destroyed"
      );
      wind_destroyed_piece_2 = buildImage(
        "wind_destroyed/piece_2",
        "wind_destroyed"
      );
      wind_destroyed_piece_3 = buildImage(
        "wind_destroyed/piece_3",
        "wind_destroyed"
      );
      wind_destroyed_piece_4 = buildImage(
        "wind_destroyed/piece_4",
        "wind_destroyed"
      );

      worker_back_3 = buildImage("worker/back/3", "layer_2");
    },

    Scene12: function () {
      worker_running_4 = buildImage("worker/running/4", "layer_2");

      robot_7 = buildImage("robot/7", "layer_2");

      team_tease_1 = buildImage("team/tease/1", "layer_2");
      team_villspor_1 = buildImage("team/villspor/1", "layer_2");
      team_phate_1 = buildImage("team/phate/1", "layer_2");
      team_cuzzy_1 = buildImage("team/cuzzy/1", "layer_2");
      team_quokka_1 = buildImage("team/quokka/1", "layer_2");
    },

    Scene13: function () {
      worker_back_4 = buildImage("worker/back/4", "layer_2");

      team_tease_2 = buildImage("team/tease/2", "layer_2");
      team_mdking_1 = buildImage("team/mdking/1", "layer_2");
      team_mdking_2 = buildImage("team/mdking/2", "layer_2");
      team_karim_1 = buildImage("team/karim/1", "layer_2");
      team_darthwhite_1 = buildImage("team/darthwhite/1", "layer_2");
      team_vito_1 = buildImage("team/vito/1", "layer_2");
      team_villspor_2 = buildImage("team/villspor/2", "top_suport-1");
      team_greek_1 = buildImage("team/greek/1", "layer_2");
      team_phate_2 = buildImage("team/phate/2", "layer_2");
      team_plums_1 = buildImage("team/plums/1", "layer_2");
      team_marzo_1 = buildImage("team/marzo/1", "layer_2");
      team_stixil_2 = buildImage("team/stixil/2", "layer_2");
      hermit_2 = buildImage("team/hermit/2", "layer_2");
      robot_8 = buildImage("robot/8", "layer_2");
    },

    Scene14: function () {
      team_plums_2 = buildImage("team/plums/2", "rubbe_1");
      team_mdking_3 = buildImage("team/mdking/3", "layer_2");
      team_karim_2 = buildImage("team/karim/2", "layer_2");
      team_darthwhite_2 = buildImage("team/darthwhite/2", "layer_2");
      team_vito_2 = buildImage("team/vito/2", "layer_2");
      team_villspor_3 = buildImage("team/villspor/3", "top_suport-1");
      team_greek_2 = buildImage("team/greek/2", "layer_2");
      team_quokka_2 = buildImage("team/quokka/2", "layer_2");
      team_cuzzy_2 = buildImage("team/cuzzy/2", "layer_2");
      team_phate_3 = buildImage("team/phate/3", "layer_2");
      team_tease_3 = buildImage("team/tease/3", "layer_2");
      team_marzo_2 = buildImage("team/marzo/2", "layer_2");
      worker_back_5 = buildImage("worker/back/5", "layer_2");

      robot_gun_1 = buildImage("robot_gun/1", "layer_2");
      robot_gun_2 = buildImage("robot_gun/2", "layer_2");
      robot_gun_3 = buildImage("robot_gun/3", "layer_2");

      robot_part_1 = buildImage("robot_part/1", "layer_2");
      robot_part_2 = buildImage("robot_part/2", "layer_2");
      robot_part_3 = buildImage("robot_part/3", "layer_2");

      beer_1 = buildImage("beer/1", "layer_2");
      beer_2 = buildImage("beer/2", "layer_2");

      extra_protein = buildImage("extra/protein", "layer_2");
    },

    Scene15: function () {
      team_mdking_4 = buildImage("team/mdking/4", "layer_2");
      team_plums_3 = buildImage("team/plums/3", "layer_2");
      beer_3 = buildImage("beer/3", "layer_2");
      worker_back_6 = buildImage("worker/back/6", "layer_2");
    },

    Scene16: function () {
      team_marzo_3 = buildImage("team/marzo/3", "top_suport");
      team_tease_4 = buildImage("team/tease/4", "layer_2");
      team_karim_3 = buildImage("team/karim/3", "rubbe_1");
      beer_4 = buildImage("beer/4", "layer_2");
      beer_5 = buildImage("beer/5", "layer_2");
      beer_6 = buildImage("beer/6", "layer_2");
      team_darthwhite_3 = buildImage("team/darthwhite/3", "layer_2");
      rubbe_1 = buildImage("rubbe/1", "rubbe_2");
      rubbe_2 = buildImage("rubbe/2", "rubbe_1");
      rubbe_3 = buildImage("rubbe/3", "rubbe_1");
      rubbe_4 = buildImage("rubbe/4", "rubbe_3");
      team_vito_3 = buildImage("team/vito/3", "layer_2");
      team_villspor_4 = buildImage("team/villspor/4", "layer_2");
      team_quokka_3 = buildImage("team/quokka/3", "layer_2");
      team_cuzzy_3 = buildImage("team/cuzzy/3", "layer_2");
      team_phate_4 = buildImage("team/phate/4", "layer_2");
    },

    Scene17: function () {
      factory_bike = buildImage("factory/bike", "layer_2");

      boxes_new_charge = buildImage("boxes/new/charge", "box_mill");
      boxes_new_credit = buildImage("boxes/new/credit", "box_mill");

      boxes_new_1 = buildImage("boxes/new/1", "box_behind");
      boxes_new_2 = buildImage("boxes/new/2", "box_behind");
      boxes_new_3 = buildImage("boxes/new/3", "box_behind");
      boxes_new_4 = buildImage("boxes/new/4", "box_behind");
      boxes_new_5 = buildImage("boxes/new/5", "box_behind");
      boxes_new_6 = buildImage("boxes/new/6", "box_behind");
      boxes_new_7 = buildImage("boxes/new/7", "box_behind");
      boxes_new_8 = buildImage("boxes/new/8", "box_behind");
      boxes_new_9 = buildImage("boxes/new/9", "box_behind");
      boxes_new_10 = buildImage("boxes/new/10", "box_behind");
      boxes_new_11 = buildImage("boxes/new/11", "box_behind");
      boxes_new_12 = buildImage("boxes/new/12", "box_behind");
      boxes_new_13 = buildImage("boxes/new/13", "box_behind");
      boxes_new_14 = buildImage("boxes/new/14", "box_behind");
      boxes_new_15 = buildImage("boxes/new/15", "box_behind");
      boxes_new_16 = buildImage("boxes/new/16", "box_behind");
      boxes_new_17 = buildImage("boxes/new/17", "box_behind");
      boxes_new_18 = buildImage("boxes/new/18", "box_behind");
      boxes_new_19 = buildImage("boxes/new/19", "box_behind");
      boxes_new_20 = buildImage("boxes/new/20", "box_behind");

      beer_7 = buildImage("beer/7", "layer_2");
      beer_8 = buildImage("beer/8", "layer_2");
      beer_9 = buildImage("beer/9", "layer_2");

      team_villspor_5 = buildImage("team/villspor/5", "layer_2");
      team_phate_5 = buildImage("team/phate/5", "layer_2");
      extra_protein_2 = buildImage("extra/protein_2", "layer_2");
      team_tease_5 = buildImage("team/tease/5", "layer_2");
      team_stixil_3 = buildImage("team/stixil/3", "layer_2");
      team_hermit_3 = buildImage("team/hermit/3", "layer_2");
      extra_nuclear = buildImage("extra/nuclear", "wind_power");

      factory_smoke_white = buildImage("factory/smoke_white", "layer_2");
    },

    Scene18: function () {
      factory_new = buildImage("factory/new", "layer_2-1");
      factory_new_mill = buildImage("factory/new_mill", "layer_2-2");

      team_danield_1 = buildImage("team/danield/1", "layer_2");
      team_ryose_1 = buildImage("team/ryose/1", "layer_2");
      team_gas_1 = buildImage("team/gas/1", "layer_2");
      team_karim_4 = buildImage("team/karim/4", "layer_2");
      team_vito_4 = buildImage("team/vito/4", "layer_2");
      team_darthwhite_4 = buildImage("team/darthwhite/4", "layer_2");
      team_marzo_4 = buildImage("team/marzo/4", "layer_2");
      team_tease_6 = buildImage("team/tease/6", "layer_2");
      team_cuzzy_4 = buildImage("team/cuzzy/4", "layer_2");
      team_quokka_4 = buildImage("team/quokka/4", "layer_2");
    },

    Scene19: function () {
      factory_arm = buildImage("factory/arm", "layer_2-2");
      factory_foot = buildImage("factory/foot", "layer_2-2");

      team_darthwhite_5 = buildImage("team/darthwhite/5", "layer_2");
      team_vito_5 = buildImage("team/vito/5", "layer_2");
      team_danield_2 = buildImage("team/danield/2", "layer_2");
      team_ryose_2 = buildImage("team/ryose/2", "layer_2");
      team_gas_2 = buildImage("team/gas/2", "layer_2");
      team_villspor_6 = buildImage("team/villspor/6", "layer_2");
      team_marzo_5 = buildImage("team/marzo/5", "layer_2");

      worker_back_7 = buildImage("worker/back/7", "layer_2");

      beer_10 = buildImage("beer/10", "layer_2");
    },

    Scene20: function () {
      worker_back_8 = buildImage("worker/back/8", "transport_char");
      team_tease_7 = buildImage("team/tease/7", "layer_2");
    },

    Scene21: function () {
      transport_base = buildImage("transport/base", "transport_base");
      transport_up = buildImage("transport/up", "transport_base");
      transport_down = buildImage("transport/down", "transport_base");
      transport_green = buildImage("transport/green", "transport_base");

      team_tease_8 = buildImage("team/tease/8", "layer_2");
      team_villspor_7 = buildImage("team/villspor/7", "layer_2");
    },

    Scene22: function () {
      team_tease_9 = buildImage("team/tease/9", "layer_2");

      transport_ring_d1 = buildImage("transport/ring_b1", "transport_b");
      transport_ring_d2 = buildImage("transport/ring_b2", "transport_b");
      transport_ring_d3 = buildImage("transport/ring_b3", "transport_b");
      transport_ring_d4 = buildImage("transport/ring_b4", "transport_b");

      transport_ring_f1 = buildImage("transport/ring_f1", "transport_f");
      transport_ring_f2 = buildImage("transport/ring_f2", "transport_f");
      transport_ring_f3 = buildImage("transport/ring_f3", "transport_f");
      transport_ring_f4 = buildImage("transport/ring_f4", "transport_f");
    },

    Scene23: function () {},

    Scene24: function () {
      dark_layer = createDarkShadow();

      billboard_base = buildImage("billboard/base", "billboard_base");
      billboard_man = buildImage("billboard/man", "billboard_man");
      billboard_note = buildImage("billboard/note", "billboard_note");

      bulb_1 = buildImage("billboard/bulb_1", "billboard_bulb");
      bulb_2 = buildImage("billboard/bulb_2", "billboard_bulb");
      bulb_3 = buildImage("billboard/bulb_3", "billboard_bulb");
      bulb_4 = buildImage("billboard/bulb_4", "billboard_bulb");
      bulb_5 = buildImage("billboard/bulb_5", "billboard_bulb");
      bulb_6 = buildImage("billboard/bulb_6", "billboard_bulb");
      bulb_7 = buildImage("billboard/bulb_7", "billboard_bulb");
      bulb_8 = buildImage("billboard/bulb_8", "billboard_bulb");
      bulb_9 = buildImage("billboard/bulb_9", "billboard_bulb");

      bb_the = buildImage("billboard/the", "billboard_bulb");
      bb_cyber = buildImage("billboard/cyber", "billboard_bulb");
      bb_creditors = buildImage("billboard/creditors", "billboard_bulb");
      bb_green_arrow = buildImage("billboard/green_arrow", "billboard_bulb");
      bb_logo = buildImage("billboard/logo", "billboard_bulb");

      bb_blue_arrow = buildImage("billboard/blue_arrow", "billboard_bulb");

      bb_lend = buildImage("billboard/lend", "billboard_bulb");
      bb_earn = buildImage("billboard/earn", "billboard_bulb");
      bb_liquidate = buildImage("billboard/liquidate", "billboard_bulb");

      bb_nft_1 = buildImage("billboard/nft_1", "billboard_bulb");
      bb_nft_2 = buildImage("billboard/nft_2", "billboard_bulb");
      bb_nft_3 = buildImage("billboard/nft_3", "billboard_bulb");
      bb_nft_4 = buildImage("billboard/nft_4", "billboard_bulb");
    },
  };

  // END PREPARING SCENES

  // START RUN SCENES

  var run = {
    Scene2: function () {
      imageFadeIn(sky_bg_blue, 500);

      imageFadeIn(sky_fog_blue, 1000, 1000);

      imageFadeIn(sky_cloud_1, 1000, 1500);
      imageFadeIn(sky_cloud_2, 1000, 2000);
      imageFadeIn(sky_cloud_3, 1000, 2500);
      imageFadeIn(sky_cloud_4, 1000, 3000);

      imageFadeIn(mountain_1, 500);

      imageFadeIn(ground_1, 500);

      imageFadeIn(tree_1, 100);
      imageFadeIn(tree_2, 100);
      imageFadeIn(tree_3, 100);
      imageFadeIn(tree_4, 100);

      imageFadeIn(factory_old, 500);

      imageFadeIn(worker_face_1, 1000, 3500);
      imageFadeIn(worker_back_1, 1000, 4000);

      imageFadeIn(discord_1, 1000, 4500);

      imageFadeIn(cat_1, 1000, 5000, false, path_cat_1);

      imageFadeIn(oni_1, 1000, 6000, false, path_oni_1);

      imageFadeIn(ody_1, 1000, 7000, dispatchAnimEvent, path_ody_1);
    },

    Scene3: function () {
      imageFadeIn(bird_1, 500, 500);
      imageFadeIn(bird_2, 500, 1000);
      imageFadeIn(bird_3, 500, 1500);

      imageFadeOut(discord_1, 300, 2000);
      imageFadeOut(cat_1, 300, 2000, false, path_cat_1);
      imageFadeIn(cat_2, 300, 2000, false, path_cat_2);

      imageFadeIn(factory_old_smoke, 500, 2500);

      imageFadeIn(mill_1, 500, 3000);

      imageFadeIn(worker_mill_1, 500, 3500);

      moveBox(boxes_leash, 1500, 2000);
      moveBox(boxes_bone, 1500, 2000, dispatchAnimEvent);
    },

    Scene4: function () {
      imageFadeIn(stixil_1, 1000, 1000, false, path_stixil_1);
      imageFadeIn(hermit_1, 1000, 2000, false, path_hermit_1);

      imageFadeIn(solar_1, 500, 3000);
      imageFadeIn(solar_2, 500, 3300);
      imageFadeIn(solar_3, 500, 3600);
      imageFadeIn(solar_4, 500, 3900);
      imageFadeIn(solar_5, 500, 4200);
      imageFadeIn(solar_6, 500, 4500);
      imageFadeIn(solar_7, 500, 4800);
      imageFadeIn(solar_8, 500, 5100);
      imageFadeIn(solar_9, 500, 5400);
      imageFadeIn(solar_10, 500, 5700);

      imageFadeIn(wind_1, 500, 6500);
      imageFadeIn(wind_2, 500, 6800);
      imageFadeIn(wind_3, 500, 7100, dispatchAnimEvent);
    },

    Scene5: function () {
      imageFadeIn(boxes_1, 500, 1000);
      imageFadeIn(boxes_2, 500, 1300);
      imageFadeIn(boxes_3, 500, 1600);
      imageFadeIn(boxes_4, 500, 1900);
      imageFadeIn(boxes_5, 500, 2200);
      imageFadeIn(boxes_6, 500, 2500);
      imageFadeIn(boxes_7, 500, 2800);
      imageFadeIn(boxes_8, 500, 3100);
      imageFadeIn(boxes_9, 500, 3400);
      imageFadeIn(boxes_10, 500, 3700);
      imageFadeIn(boxes_11, 500, 4000);
      imageFadeIn(boxes_12, 500, 4300);
      imageFadeIn(boxes_13, 500, 4600);
      imageFadeIn(boxes_14, 500, 4900);
      imageFadeIn(boxes_15, 500, 5200);
      imageFadeIn(boxes_16, 500, 5500);
      imageFadeIn(boxes_17, 500, 5800);
      imageFadeIn(boxes_18, 500, 6100);
      imageFadeIn(boxes_19, 500, 6400);
      imageFadeIn(boxes_20, 500, 6700);

      imageFadeOut(sky_fog_blue, 1000, 7700);
      imageFadeIn(sky_fog_purple, 1000, 7700, dispatchAnimEvent);
    },

    Scene6: function () {
      worker_back_1.style.zIndex = "31";

      imageFadeOut(sky_bg_blue, 500, 1000);
      imageFadeIn(sky_bg_purple, 500, 1000);

      imageFadeOut(bird_1, 1000, 2000);
      imageFadeOut(bird_2, 1000, 2500);
      imageFadeOut(bird_3, 1000, 3000);

      groundDark(0, 20, 1000);

      imageFadeOut(cat_2, 500, 4000, false, path_cat_2);
      imageFadeIn(cat_3, 500, 4000, false, path_cat_3);

      imageFadeIn(drones_empty_1, 1000, 4500);

      imageFadeOut(worker_mill_1, 300, 5000);
      imageFadeIn(worker_mill_2, 300, 5000);

      imageFadeIn(drones_empty_2, 1000, 6000);

      imageFadeOut(worker_face_1, 300, 6500);
      imageFadeIn(worker_face_2, 300, 6500);

      imageFadeOut(sky_cloud_1, 300, 7000);
      imageFadeOut(sky_cloud_2, 300, 7500);
      imageFadeOut(sky_cloud_3, 300, 8000);
      imageFadeOut(sky_cloud_4, 300, 8500, dispatchAnimEvent);
    },

    Scene7: function () {
      imageFadeOut(sky_fog_purple, 500, 1000);
      imageFadeIn(sky_fog_black, 500, 1000);

      imageFadeOut(boxes_leash, 300, 2000);
      imageFadeOut(drones_empty_1, 300, 2000);
      imageFadeIn(drones_box_1, 300, 2000);

      imageFadeOut(boxes_bone, 300, 3000);
      imageFadeOut(drones_empty_2, 300, 3000);
      imageFadeIn(drones_box_2, 300, 3000);

      imageFadeOut(worker_mill_2, 300, 4000);
      imageFadeIn(worker_mill_5, 300, 4000);

      imageFadeOut(worker_face_2, 300, 5000);
      imageFadeIn(worker_face_3, 300, 5000);

      imageFadeOut(worker_back_1, 300, 6000);
      imageFadeIn(worker_back_2, 300, 6000, dispatchAnimEvent);
    },

    Scene8: function () {
      imageFadeIn(worker_running_1, 500, 1000);

      imageFadeOut(drones_box_1, 500, 2000);

      imageFadeOut(drones_box_2, 500, 3000);

      imageFadeOut(sky_bg_purple, 300, 4000);
      imageFadeIn(sky_bg_black, 300, 4000);

      groundDark(20, 30, 4000);

      imageFadeOut(cat_3, 300, 5000, false, path_cat_3);
      imageFadeIn(discord_2, 300, 5000);

      imageFadeOut(worker_face_3, 300, 6000);
      imageFadeIn(worker_face_4, 300, 6000);

      imageFadeOut(worker_back_2, 300, 6500);
      imageFadeIn(worker_back_1, 300, 6500);

      imageFadeOut(worker_mill_5, 300, 7000);
      imageFadeIn(worker_mill_6, 300, 7000);

      imageFadeIn(suport, 500, 7000);

      imageFadeIn(paintball, 500, 7500);

      imageFadeIn(crown, 500, 8000);

      imageFadeIn(fire_helmet_back, 500, 8500);
      imageFadeIn(fire_helmet_front, 500, 8500);

      imageFadeIn(pickaxe, 500, 9000);

      imageFadeIn(helmet_back, 500, 9500);
      imageFadeIn(helmet_front, 500, 9500);

      imageFadeIn(spear, 500, 10000, dispatchAnimEvent);
    },

    Scene9: function () {
      imageFadeOut(worker_running_1, 300, 1000);
      imageFadeIn(worker_running_2, 300, 1000);

      imageFadeOut(hermit_1, 500, 2500, false, path_hermit_1);

      imageFadeIn(robot_1, 500, 3500, dispatchAnimEvent);
    },

    Scene10: function () {
      imageFadeIn(robot_2, 500, 1000);

      imageFadeOut(worker_face_4, 300, 2000);
      imageFadeIn(worker_face_5, 300, 2000);

      imageFadeIn(robot_3, 500, 3000);

      imageFadeIn(robot_4, 500, 4000);

      imageFadeOut(worker_mill_6, 300, 4500);
      imageFadeIn(worker_mill_4, 300, 4500);

      imageFadeOut(boxes_20, 500, 5000);
      imageFadeOut(boxes_19, 500, 5300);
      imageFadeOut(boxes_18, 500, 5600);
      imageFadeOut(boxes_17, 500, 5900);
      imageFadeOut(boxes_16, 500, 6200);
      imageFadeOut(boxes_15, 500, 6500);
      imageFadeOut(boxes_14, 500, 6800);
      imageFadeOut(boxes_13, 500, 7100);
      imageFadeOut(boxes_12, 500, 7400);
      imageFadeOut(boxes_11, 500, 7700);
      imageFadeOut(boxes_10, 500, 8000);
      imageFadeOut(boxes_9, 500, 8300);
      imageFadeOut(boxes_8, 500, 8600);
      imageFadeOut(boxes_7, 500, 8900);
      imageFadeOut(boxes_6, 500, 9100);
      imageFadeOut(boxes_5, 500, 9400);
      imageFadeOut(boxes_4, 500, 9700);
      imageFadeOut(boxes_3, 500, 10000);
      imageFadeOut(boxes_2, 500, 10300);
      imageFadeOut(boxes_1, 500, 10600, dispatchAnimEvent);
    },

    Scene11: function () {
      imageFadeOut(stixil_1, 1000, 1000, false, path_stixil_1);

      imageFadeOut(factory_old_smoke, 500, 1500);

      imageFadeOut(factory_old, 300, 2000);
      imageFadeIn(factory_old_destroyed, 300, 2000);

      imageFadeIn(extra_beer_trash, 500, 2500);

      imageFadeOut(worker_running_2, 300, 3000);
      imageFadeIn(worker_running_3, 300, 3000);

      imageFadeOut(robot_1, 300, 4000);
      imageFadeIn(robot_5, 300, 4000);

      imageFadeOut(discord_2, 300, 5000);
      imageFadeOut(robot_3, 300, 5000);
      imageFadeIn(robot_6, 300, 5000);

      imageFadeOut(solar_1, 300, 6000);
      imageFadeIn(solar_destroyed_1, 300, 6000);

      imageFadeOut(solar_2, 300, 6300);
      imageFadeIn(solar_destroyed_2, 300, 6300);

      imageFadeOut(solar_3, 300, 6600);
      imageFadeIn(solar_destroyed_3, 300, 6600);

      imageFadeOut(solar_4, 300, 6900);
      imageFadeIn(solar_destroyed_4, 300, 6900);

      imageFadeOut(solar_5, 300, 7200);
      imageFadeIn(solar_destroyed_5, 300, 7200);

      imageFadeOut(solar_6, 300, 7500);
      imageFadeIn(solar_destroyed_6, 300, 7500);

      imageFadeOut(solar_7, 300, 7800);
      imageFadeIn(solar_destroyed_7, 300, 7800);

      imageFadeOut(solar_8, 300, 8100);
      imageFadeIn(solar_destroyed_8, 300, 8100);

      imageFadeOut(solar_9, 300, 8400);
      imageFadeIn(solar_destroyed_9, 300, 8400);

      imageFadeOut(solar_10, 300, 8700);
      imageFadeIn(solar_destroyed_10, 300, 8700);

      imageFadeIn(solar_destroyed_piece, 300, 9000);

      imageFadeOut(wind_1, 300, 9300);
      imageFadeIn(wind_destroyed_1, 300, 9300);

      imageFadeOut(wind_2, 300, 9600);
      imageFadeIn(wind_destroyed_2, 300, 9600);
      imageFadeIn(wind_destroyed_piece_1, 300, 9600);
      imageFadeIn(wind_destroyed_piece_2, 300, 9900);

      imageFadeOut(wind_3, 300, 10200);
      imageFadeIn(wind_destroyed_3, 300, 10200);
      imageFadeIn(wind_destroyed_piece_3, 300, 10200);
      imageFadeIn(wind_destroyed_piece_4, 300, 10200);

      imageFadeOut(worker_back_1, 300, 10500);
      imageFadeIn(worker_back_3, 300, 10500, dispatchAnimEvent);
    },

    Scene12: function () {
      imageFadeOut(robot_2, 300, 1000);
      imageFadeIn(robot_7, 300, 1000);

      imageFadeOut(worker_running_3, 300, 2000);
      imageFadeIn(worker_running_4, 300, 2000);

      imageFadeOut(sky_fog_black, 500, 3000);
      imageFadeIn(sky_fog_purple, 500, 3000);

      imageFadeIn(team_tease_1, 500, 4000, false, path_tease_1);
      imageFadeIn(team_cuzzy_1, 500, 5000, false, path_cuzzy_1);
      imageFadeIn(team_quokka_1, 500, 6000, false, path_quokka_1);
      imageFadeIn(team_villspor_1, 500, 7000, false, path_villspor_1);
      imageFadeIn(team_phate_1, 500, 8000, dispatchAnimEvent, path_phate_1);
    },

    Scene13: function () {
      imageFadeOut(sky_bg_black, 300, 1000);
      imageFadeIn(sky_bg_purple, 300, 1000);

      groundDark(30, 20, 1000);

      imageFadeOut(worker_running_4, 300, 2000);
      imageFadeOut(crown, 300, 2000);
      imageFadeOut(paintball, 300, 2000);
      imageFadeIn(team_mdking_1, 300, 2000, customMDKing, path_mdking_1);

      imageFadeOut(team_tease_1, 300, 3000, false, path_tease_1);
      imageFadeIn(team_tease_2, 300, 3000, false, path_tease_2);

      imageFadeOut(team_villspor_1, 300, 4000, false, path_villspor_1);
      imageFadeIn(team_villspor_2, 300, 4000, false, path_villspor_2);

      imageFadeOut(team_phate_1, 300, 5000, false, path_phate_1);
      imageFadeIn(team_phate_2, 300, 5000, false, path_phate_2);

      imageFadeIn(team_vito_1, 500, 6000, false, path_vito_1);

      imageFadeIn(team_darthwhite_1, 500, 7000, false, path_darthwhite_1);

      imageFadeIn(team_karim_1, 500, 8000, false, path_karim_1);

      imageFadeIn(team_marzo_1, 500, 9000, false, path_marzo_1);

      imageFadeIn(team_stixil_2, 500, 10000, false, path_stixil_2);

      imageFadeIn(hermit_2, 500, 11000, false, path_hermit_2);

      imageFadeOut(robot_4, 300, 12000);
      imageFadeIn(robot_8, 300, 12000);

      imageFadeOut(helmet_back, 300, 13000);
      imageFadeOut(helmet_front, 300, 13000);
      imageFadeOut(spear, 300, 13000);
      imageFadeOut(worker_mill_4, 300, 13000);
      imageFadeIn(team_greek_1, 300, 13000, false, path_greek_1);

      imageFadeOut(worker_back_3, 300, 14000);
      imageFadeIn(worker_back_4, 300, 14000);

      imageFadeOut(worker_face_5, 300, 15000);
      imageFadeOut(fire_helmet_back, 300, 15000);
      imageFadeOut(fire_helmet_front, 300, 15000);
      imageFadeOut(pickaxe, 300, 15000);
      imageFadeIn(team_plums_1, 300, 15000, false, path_plums_1);
    },

    Scene14: function () {
      imageFadeOut(sky_fog_purple, 500, 1000);
      imageFadeIn(sky_fog_blue, 500, 1000);

      imageFadeIn(sky_cloud_1, 1000, 1500);
      imageFadeIn(sky_cloud_2, 1000, 2000);
      imageFadeIn(sky_cloud_3, 1000, 2500);
      imageFadeIn(sky_cloud_4, 1000, 3000);

      imageFadeOut(robot_8, 500, 2000);
      imageFadeIn(robot_gun_3, 500, 2000);

      imageFadeOut(robot_7, 500, 3000);
      imageFadeIn(robot_gun_1, 500, 3000);

      imageFadeOut(worker_back_4, 500, 4000);
      imageFadeOut(team_plums_1, 500, 4000, false, path_plums_1);
      imageFadeIn(team_plums_2, 500, 4000, false, path_plums_2);

      imageFadeOut(robot_5, 500, 5000);
      imageFadeIn(robot_gun_2, 500, 5000);
      imageFadeIn(robot_part_1, 500, 5000);

      imageFadeOut(robot_6, 500, 6000);
      imageFadeIn(robot_part_2, 500, 6000);
      imageFadeIn(robot_part_3, 500, 6000);

      imageFadeOut(team_villspor_2, 500, 7000, false, path_villspor_2);
      imageFadeIn(team_villspor_3, 500, 7000, false, path_villspor_3);

      imageFadeOut(team_greek_1, 500, 8000, false, path_greek_1);
      imageFadeIn(team_greek_2, 500, 8000, false, path_greek_2);

      imageFadeOut(team_mdking_2, 500, 9000, false, path_mdking_2);
      imageFadeIn(team_mdking_3, 500, 9000, false, path_mdking_3);

      imageFadeOut(team_vito_1, 500, 10000, false, path_vito_1);
      imageFadeIn(team_vito_2, 500, 10000, false, path_vito_2);

      imageFadeOut(team_marzo_1, 500, 11000, false, path_marzo_1);
      imageFadeIn(team_marzo_2, 500, 11000, false, path_marzo_2);

      imageFadeOut(team_quokka_1, 500, 12000, false, path_quokka_1);
      imageFadeIn(team_quokka_2, 500, 12000, false, path_quokka_2);

      imageFadeOut(team_phate_2, 500, 13000, false, path_phate_2);
      imageFadeIn(team_phate_3, 500, 13000, false, path_phate_3);

      imageFadeOut(team_cuzzy_1, 500, 14000, false, path_cuzzy_1);
      imageFadeIn(team_cuzzy_2, 500, 14000, false, path_cuzzy_2);

      imageFadeOut(team_karim_1, 500, 15000, false, path_karim_1);
      imageFadeIn(team_karim_2, 500, 15000, false, path_karim_2);

      imageFadeOut(team_darthwhite_1, 500, 16000, false, path_darthwhite_1);
      imageFadeIn(team_darthwhite_2, 500, 16000, false, path_darthwhite_2);

      imageFadeOut(team_tease_2, 500, 17000, false, path_tease_2);
      imageFadeIn(team_tease_3, 500, 17000, false, path_tease_3);

      imageFadeIn(worker_back_5, 500, 18000);

      imageFadeIn(extra_protein, 500, 19000);

      imageFadeIn(beer_1, 500, 19500);
      imageFadeIn(beer_2, 500, 20000, dispatchAnimEvent);
    },

    Scene15: function () {
      imageFadeOut(beer_1, 500, 1000);
      imageFadeOut(beer_2, 500, 2000);

      imageFadeOut(team_mdking_3, 500, 3000, false, path_mdking_3);
      imageFadeIn(team_mdking_4, 500, 3000, false, path_mdking_4);

      imageFadeOut(team_plums_2, 500, 4000, false, path_plums_2);
      imageFadeIn(team_plums_3, 500, 4000, false, path_plums_3);

      imageFadeIn(beer_3, 500, 4500);

      imageFadeOut(worker_back_5, 500, 5500);
      imageFadeIn(worker_back_6, 500, 5500);

      imageFadeOut(sky_bg_purple, 300, 6500);
      imageFadeIn(sky_bg_blue, 300, 6500);
      groundDark(20, 0, 6500);

      imageFadeIn(bird_3, 300, 7000);
      imageFadeIn(bird_2, 300, 7500);
      imageFadeIn(bird_1, 300, 8000, dispatchAnimEvent);
    },

    Scene16: function () {
      imageFadeOut(robot_part_1, 500, 1000);
      imageFadeOut(robot_part_2, 500, 1500);
      imageFadeOut(robot_part_3, 500, 2000);

      imageFadeOut(robot_gun_1, 500, 2500);
      imageFadeOut(robot_gun_2, 500, 3000);
      imageFadeOut(robot_gun_3, 500, 3500);

      imageFadeOut(extra_beer_trash, 500, 4000);

      imageFadeOut(team_greek_2, 500, 5000, false, path_greek_2);
      imageFadeIn(helmet_back, 500, 5000);
      imageFadeIn(helmet_front, 500, 5000);
      imageFadeIn(spear, 500, 5500);

      imageFadeOut(beer_3, 500, 6000);

      imageFadeOut(team_plums_3, 500, 7000, false, path_plums_3);
      imageFadeIn(fire_helmet_back, 500, 7000);
      imageFadeIn(fire_helmet_front, 500, 7000);
      imageFadeIn(pickaxe, 500, 7500);

      imageFadeOut(team_mdking_4, 500, 8500, false, path_mdking_4);
      imageFadeIn(paintball, 500, 8500);
      imageFadeIn(crown, 500, 9000);

      imageFadeOut(worker_back_6, 500, 10000);

      imageFadeIn(rubbe_1, 500, 11000);
      imageFadeIn(rubbe_2, 500, 12000);
      imageFadeIn(rubbe_3, 500, 13000);
      imageFadeIn(rubbe_4, 500, 14000);

      imageFadeOut(team_marzo_2, 500, 15000, false, path_marzo_2);
      imageFadeIn(team_marzo_3, 500, 15000, false, path_marzo_3);

      imageFadeOut(team_quokka_2, 500, 16000, false, path_quokka_2);
      imageFadeIn(team_quokka_3, 500, 16000, false, path_quokka_3);

      imageFadeOut(team_cuzzy_2, 500, 17000, false, path_cuzzy_2);
      imageFadeIn(team_cuzzy_3, 500, 17000, false, path_cuzzy_3);

      imageFadeOut(team_tease_3, 500, 18000, false, path_tease_3);
      imageFadeIn(team_tease_4, 500, 18000, false, path_tease_4);

      imageFadeOut(team_darthwhite_2, 500, 19000, false, path_darthwhite_2);
      imageFadeIn(team_darthwhite_3, 500, 19000, false, path_darthwhite_3);

      imageFadeOut(team_karim_2, 500, 20000, false, path_karim_2);
      imageFadeIn(team_karim_3, 500, 20000, false, path_karim_3);

      imageFadeOut(team_villspor_3, 500, 21000, false, path_villspor_3);
      imageFadeIn(team_villspor_4, 500, 21000, false, path_villspor_4);

      imageFadeOut(team_vito_2, 500, 22000, false, path_vito_2);
      imageFadeIn(team_vito_3, 500, 22000, false, path_vito_3);

      imageFadeOut(team_phate_3, 500, 23000, false, path_phate_3);
      imageFadeOut(extra_protein, 500, 23000);
      imageFadeIn(team_phate_4, 500, 23000, false, path_phate_4);

      imageFadeIn(beer_4, 500, 23500);
      imageFadeIn(beer_5, 500, 24000);
      imageFadeIn(beer_6, 500, 24500, dispatchAnimEvent);
    },

    Scene17: function () {
      imageFadeOut(factory_old_destroyed, 500, 1000);
      imageFadeIn(factory_old, 500, 1000);

      imageFadeOut(solar_destroyed_1, 500, 2000);
      imageFadeOut(solar_destroyed_2, 500, 2300);
      imageFadeOut(solar_destroyed_3, 500, 2600);
      imageFadeOut(solar_destroyed_4, 500, 2900);
      imageFadeOut(solar_destroyed_5, 500, 3200);
      imageFadeOut(solar_destroyed_6, 500, 3500);
      imageFadeOut(solar_destroyed_7, 500, 3800);
      imageFadeOut(solar_destroyed_8, 500, 4100);
      imageFadeOut(solar_destroyed_9, 500, 4400);
      imageFadeOut(solar_destroyed_10, 500, 4700);
      imageFadeOut(solar_destroyed_piece, 500, 5000);

      imageFadeOut(wind_destroyed_piece_1, 500, 6000);
      imageFadeOut(wind_destroyed_piece_2, 500, 6300);
      imageFadeOut(wind_destroyed_piece_3, 500, 6600);
      imageFadeOut(wind_destroyed_piece_4, 500, 6900);

      imageFadeOut(wind_destroyed_1, 500, 7200);
      imageFadeOut(wind_destroyed_2, 500, 7500);
      imageFadeOut(wind_destroyed_3, 500, 7800);

      imageFadeIn(extra_nuclear, 500, 8500);

      imageFadeIn(factory_smoke_white, 500, 9000);

      moveBox(boxes_new_charge, 1500, 4500);
      moveBox(boxes_new_credit, 1500, 4500);

      imageFadeIn(boxes_new_1, 500, 10000);
      imageFadeIn(boxes_new_2, 500, 10300);
      imageFadeIn(boxes_new_3, 500, 10600);
      imageFadeIn(boxes_new_4, 500, 10900);
      imageFadeIn(boxes_new_5, 500, 11200);
      imageFadeIn(boxes_new_6, 500, 11500);
      imageFadeIn(boxes_new_7, 500, 11800);
      imageFadeIn(boxes_new_8, 500, 12100);
      imageFadeIn(boxes_new_9, 500, 12400);
      imageFadeIn(boxes_new_10, 500, 12700);
      imageFadeIn(boxes_new_11, 500, 13000);
      imageFadeIn(boxes_new_12, 500, 13300);
      imageFadeIn(boxes_new_13, 500, 13600);
      imageFadeIn(boxes_new_14, 500, 13900);
      imageFadeIn(boxes_new_15, 500, 14200);
      imageFadeIn(boxes_new_16, 500, 14500);
      imageFadeIn(boxes_new_17, 500, 14800);
      imageFadeIn(boxes_new_18, 500, 15100);
      imageFadeIn(boxes_new_19, 500, 15400);
      imageFadeIn(boxes_new_20, 500, 15700);

      imageFadeOut(team_tease_4, 500, 16000, false, path_tease_4);
      imageFadeIn(team_tease_5, 500, 16000, false, path_tease_5);

      imageFadeOut(beer_4, 500, 16500);
      imageFadeOut(beer_5, 500, 17000);
      imageFadeOut(beer_6, 500, 17500);

      imageFadeOut(team_stixil_2, 500, 18000, false, path_stixil_2);
      imageFadeIn(team_stixil_3, 500, 18000, false, path_stixil_3);

      imageFadeOut(hermit_2, 500, 19000, false, path_hermit_2);
      imageFadeIn(team_hermit_3, 500, 19000, false, path_hermit_3);

      imageFadeOut(team_phate_4, 500, 20000, false, path_phate_4);
      imageFadeIn(team_phate_5, 500, 20000, false, path_phate_5);

      imageFadeIn(extra_protein_2, 500, 20500);

      imageFadeOut(team_villspor_4, 500, 21000, false, path_villspor_4);
      imageFadeIn(team_villspor_5, 500, 21000, false, path_villspor_5);
      imageFadeIn(factory_bike, 500, 21000);

      imageFadeIn(beer_7, 500, 22000);
      imageFadeIn(beer_8, 500, 22500);
      imageFadeIn(beer_9, 500, 23000, dispatchAnimEvent);
    },

    Scene18: function () {
      imageFadeOut(beer_7, 500, 1000);
      imageFadeOut(beer_8, 500, 1500);
      imageFadeOut(beer_9, 500, 2000, fadeInBeers);

      imageFadeOut(factory_smoke_white, 500, 3000);

      imageFadeOut(boxes_new_20, 500, 4000);
      imageFadeOut(boxes_new_19, 500, 4300);
      imageFadeOut(boxes_new_18, 500, 4600);
      imageFadeOut(boxes_new_17, 500, 4900);
      imageFadeOut(boxes_new_16, 500, 5200);
      imageFadeOut(boxes_new_15, 500, 5500);
      imageFadeOut(boxes_new_14, 500, 5800);
      imageFadeOut(boxes_new_13, 500, 6100);
      imageFadeOut(boxes_new_12, 500, 6400);
      imageFadeOut(boxes_new_11, 500, 6700);
      imageFadeOut(boxes_new_10, 500, 7300);
      imageFadeOut(boxes_new_9, 500, 7600);
      imageFadeOut(boxes_new_8, 500, 7900);
      imageFadeOut(boxes_new_7, 500, 8200);
      imageFadeOut(boxes_new_6, 500, 8500);
      imageFadeOut(boxes_new_5, 500, 8800);
      imageFadeOut(boxes_new_4, 500, 9100);
      imageFadeOut(boxes_new_3, 500, 9400);
      imageFadeOut(boxes_new_2, 500, 9700);
      imageFadeOut(boxes_new_1, 500, 10000);

      imageFadeOut(boxes_new_credit, 500, 10300);
      imageFadeOut(boxes_new_charge, 500, 10600);

      imageFadeOut(factory_bike, 500, 11000);

      imageFadeOut(team_cuzzy_3, 500, 12000, false, path_cuzzy_3);
      imageFadeIn(team_cuzzy_4, 500, 12000, false, path_cuzzy_4);

      imageFadeOut(team_quokka_3, 500, 13000, false, path_quokka_3);
      imageFadeIn(team_quokka_4, 500, 13000, false, path_quokka_4);

      imageFadeOut(mill_1, 500, 14000);

      imageFadeOut(factory_old, 500, 15000);
      imageFadeIn(factory_new, 500, 15000);
      imageFadeIn(factory_new_mill, 500, 15000);

      imageFadeOut(team_tease_5, 500, 16000, false, path_tease_5);
      imageFadeIn(team_tease_6, 500, 16000, false, path_tease_6);

      imageFadeOut(team_darthwhite_3, 500, 17000, false, path_darthwhite_3);
      imageFadeIn(team_darthwhite_4, 500, 17000, false, path_darthwhite_4);

      imageFadeOut(team_vito_3, 500, 18000, false, path_vito_3);
      imageFadeIn(team_vito_4, 500, 18000, false, path_vito_4);

      imageFadeOut(team_karim_3, 500, 19000, false, path_karim_3);
      imageFadeIn(team_karim_4, 500, 19000, false, path_karim_4);

      imageFadeOut(team_marzo_3, 500, 20000, false, path_marzo_3);
      imageFadeIn(team_marzo_4, 500, 20000, false, path_marzo_4);

      imageFadeIn(team_gas_1, 500, 21000, false, path_gas_1);

      imageFadeIn(team_ryose_1, 500, 22000, false, path_ryose_1);

      imageFadeIn(team_danield_1, 500, 23000, false, path_danield_1);
    },

    Scene19: function () {
      imageFadeOut(beer_8, 500, 1000);
      imageFadeOut(beer_9, 500, 1500);

      imageFadeOut(team_marzo_4, 500, 2500, false, path_marzo_4);
      imageFadeIn(team_marzo_5, 500, 2500, false, path_marzo_5);

      imageFadeOut(team_vito_4, 500, 3500, false, path_vito_4);
      imageFadeIn(team_vito_5, 500, 3500, false, path_vito_5);

      imageFadeOut(team_darthwhite_4, 500, 4500, false, path_darthwhite_4);
      imageFadeIn(team_darthwhite_5, 500, 4500, false, path_darthwhite_5);

      imageFadeOut(team_ryose_1, 500, 5500, false, path_ryose_1);
      imageFadeIn(team_ryose_2, 500, 5500, false, path_ryose_2);

      imageFadeOut(team_gas_1, 500, 6500, false, path_gas_1);
      imageFadeIn(team_gas_2, 500, 6500, false, path_gas_2);

      imageFadeOut(team_danield_1, 500, 7500, false, path_danield_1);
      imageFadeIn(team_danield_2, 500, 7500, false, path_danield_2);

      imageFadeOut(team_villspor_5, 500, 8500, false, path_villspor_5);
      imageFadeIn(team_villspor_6, 500, 8500, false, path_villspor_6);

      moveBox(factory_foot, 1500, 4500);
      moveBox(factory_arm, 1500, 4500);

      imageFadeIn(worker_back_7, 500, 9500, false, path_you);

      imageFadeIn(beer_10, 500, 10500, dispatchAnimEvent);
    },

    Scene20: function () {
      imageFadeOut(beer_10, 500, 1000);

      imageFadeOut(worker_back_7, 500, 2000);
      imageFadeIn(worker_back_8, 500, 2000);

      imageFadeOut(team_tease_6, 500, 3000, false, path_tease_6);
      imageFadeIn(team_tease_7, 500, 3000, dispatchAnimEvent, path_tease_7);
    },

    Scene21: function () {
      imageFadeOut(team_hermit_3, 500, 1000, false, path_hermit_3);
      imageFadeIn(hermit_2, 500, 1000, false, path_hermit_2);

      imageFadeOut(team_stixil_3, 500, 2000, false, path_stixil_3);
      imageFadeIn(team_stixil_2, 500, 2000, false, path_stixil_2);

      imageFadeOut(team_villspor_6, 500, 3000, false, path_villspor_6);
      imageFadeIn(team_villspor_7, 500, 3000, false, path_villspor_7);

      imageFadeIn(transport_base, 500, 4000);
      imageFadeIn(transport_up, 500, 4000);

      imageFadeOut(team_tease_7, 500, 5000, false, path_tease_7);
      imageFadeIn(team_tease_8, 500, 5000, dispatchAnimEvent, path_tease_8);
    },

    Scene22: function () {
      imageFadeOut(transport_up, 50, 1000);
      imageFadeIn(transport_down, 50, 1000);

      imageFadeIn(transport_green, 500, 1200);

      imageFadeIn(transport_ring_d1, 500, 2000);
      imageFadeIn(transport_ring_f1, 500, 2000);

      imageFadeIn(transport_ring_d2, 500, 2300);
      imageFadeIn(transport_ring_f2, 500, 2300);

      imageFadeIn(transport_ring_d3, 500, 2600);
      imageFadeIn(transport_ring_f3, 500, 2600);

      imageFadeIn(transport_ring_d4, 500, 2900);
      imageFadeIn(transport_ring_f4, 500, 2900, hideCircles);

      imageFadeOut(worker_back_8, 500, 3500, false, path_you);

      imageFadeOut(sky_fog_blue, 500, 6000);
      imageFadeIn(sky_fog_purple, 500, 6000);

      imageFadeOut(team_tease_8, 500, 7000, false, path_tease_8);
      imageFadeIn(team_tease_9, 500, 7000, dispatchAnimEvent, path_tease_9);
    },

    Scene23: function () {
      imageFadeOut(team_vito_5, 500, 1200, false, path_vito_5);
      imageFadeOut(transport_base, 500, 1700);
      imageFadeOut(transport_down, 500, 1700);
      imageFadeOut(transport_green, 500, 1700);

      imageFadeOut(rubbe_3, 500, 2900);
      imageFadeOut(helmet_back, 500, 3400);
      imageFadeOut(helmet_front, 500, 3400);
      imageFadeOut(spear, 500, 3900);

      imageFadeOut(rubbe_2, 500, 5100);
      imageFadeOut(paintball, 500, 5600);
      imageFadeOut(crown, 500, 6100);

      imageFadeOut(rubbe_1, 500, 7300);
      imageFadeOut(rubbe_4, 500, 7800);
      imageFadeOut(fire_helmet_back, 500, 8300);
      imageFadeOut(fire_helmet_front, 500, 8300);
      imageFadeOut(pickaxe, 500, 8800);

      imageFadeOut(team_karim_4, 500, 10000, false, path_karim_4);
      imageFadeOut(suport, 500, 10500);

      imageFadeOut(team_darthwhite_5, 500, 11700, false, path_darthwhite_5);
      imageFadeOut(factory_arm, 500, 12200);

      imageFadeOut(team_marzo_5, 500, 13400, false, path_marzo_5);
      imageFadeOut(team_danield_2, 500, 13900, false, path_danield_2);

      imageFadeOut(team_phate_5, 500, 15100, false, path_phate_5);
      imageFadeOut(extra_protein_2, 500, 15600);

      imageFadeOut(team_quokka_4, 500, 16800, false, path_quokka_4);
      imageFadeOut(team_gas_2, 500, 17300, false, path_gas_2);

      imageFadeOut(team_stixil_2, 500, 18500, false, path_stixil_2);

      imageFadeOut(hermit_2, 500, 19700, false, path_hermit_2);

      imageFadeOut(team_cuzzy_4, 500, 20900, false, path_cuzzy_4);
      imageFadeOut(team_ryose_2, 500, 21400, false, path_ryose_2);

      imageFadeOut(team_villspor_7, 500, 22600, false, path_villspor_7);
      imageFadeOut(factory_foot, 500, 23100);

      imageFadeOut(team_tease_9, 500, 24300, false, path_tease_9);

      imageFadeOut(oni_1, 500, 25500, false, path_oni_1);

      imageFadeOut(ody_1, 500, 26200, false, path_ody_1);

      imageFadeOut(sky_bg_blue, 500, 27400);
      imageFadeIn(sky_bg_purple, 500, 27400);

      groundDark(0, 20, 27400);

      imageFadeOut(bird_2, 500, 28000);

      imageFadeOut(bird_1, 500, 28500);

      imageFadeOut(bird_3, 500, 29000, dispatchAnimEvent);

      imageFadeOut(sky_cloud_1, 500, 25000);
      imageFadeOut(sky_cloud_2, 500, 26000);
      imageFadeOut(sky_cloud_3, 500, 27000);
      imageFadeOut(sky_cloud_4, 500, 28000);
    },

    Scene24: function () {
      makeShadowDarker(1000);

      imageFadeOut(sky_fog_purple, 500, 1000);
      imageFadeIn(sky_fog_black, 500, 1000);

      imageFadeOut(sky_bg_purple, 500, 2000);
      imageFadeIn(sky_bg_black, 500, 2000);

      imageFadeIn(billboard_base, 500, 3000);

      imageFadeIn(bulb_1, 100, 3500);
      imageFadeIn(bulb_2, 100, 3800);
      imageFadeIn(bulb_3, 100, 4100);
      imageFadeIn(bulb_4, 100, 4400);
      imageFadeIn(bulb_5, 100, 4700);
      imageFadeIn(bulb_6, 100, 5000);
      imageFadeIn(bulb_7, 100, 5300);
      imageFadeIn(bulb_8, 100, 5600);
      imageFadeIn(bulb_9, 100, 5900);

      imageFadeIn(bb_logo, 500, 6500);

      imageFadeIn(bb_the, 500, 7000);
      imageFadeIn(bb_cyber, 500, 7500);
      imageFadeIn(bb_creditors, 500, 8000);
      imageFadeIn(bb_green_arrow, 500, 8500);

      imageFadeIn(bb_lend, 500, 9000);
      imageFadeIn(bb_earn, 500, 9500);
      imageFadeIn(bb_liquidate, 500, 10000);

      imageFadeIn(bb_blue_arrow, 500, 10500);

      imageFadeIn(bb_nft_1, 500, 11000, nftAnimation);

      imageFadeIn(billboard_man, 500, 5000, fadeOutWorker);
      imageFadeIn(billboard_note, 500, 6000);

      showLastButtons(11000);
    },
  };

  // END RUN SCENES

  // START Change Scene

  function changeScene() {
    let nextScene = current_scene + 1;
    run["Scene" + current_scene]();

    if (current_scene < 24) {
      prepare["Scene" + nextScene]();
    }
  }

  // END Change Scene

  initDrawing();
};

export const removeHeroListener = () => {
  heroContainer.removeEventListener("animeReady", function () {});
  continueStory = false;
};
