import { anime } from "react-animejs-wrapper";

export const fixedBotAnimation = () => {
  // START Noise Animation
  function animateTl1(span) {
    var tl = anime.timeline({});

    tl.add({
      targets: span,
      translateX: 3,
      duration: 50,
    })
      .add({
        targets: span,
        translateX: 0,
        duration: 50,
      })
      .add({
        targets: span,
        translateX: 2,
        duration: 50,
      })
      .add({
        targets: span,
        translateX: 0,
        duration: 50,
      });
  }

  function animateTl2(span) {
    var tl = anime.timeline({});

    tl.add({
      targets: span,
      translateX: -2,
      duration: 50,
    })
      .add({
        targets: span,
        translateX: 0,
        duration: 50,
      })
      .add({
        targets: span,
        translateX: -1,
        duration: 50,
      })
      .add({
        targets: span,
        translateX: 0,
        duration: 50,
      });
  }
  // END of Noise Animation

  // START Create 3 identical Span Elements
  function makeTextSpans(elem, elemText) {
    let linkElem = elem.querySelector("a");

    linkElem.innerHTML = "";

    let content1 = document.createTextNode(elemText);
    let content2 = document.createTextNode(elemText);
    let content3 = document.createTextNode(elemText);

    // create indigo
    let indigo1 = document.createElement("span");
    indigo1.classList.add("indigo");
    indigo1.classList.add("indigo_1");
    indigo1.appendChild(content1);

    let indigo2 = document.createElement("span");
    indigo2.classList.add("indigo");
    indigo2.classList.add("indigo_2");
    indigo2.appendChild(content2);

    let indigo3 = document.createElement("span");
    indigo3.classList.add("indigo");
    indigo3.classList.add("indigo_3");
    indigo3.appendChild(content3);

    linkElem.append(indigo1);
    linkElem.append(indigo2);
    linkElem.append(indigo3);
  }
  // END of Create 3 identical Span Elements

  // START Add Bracket
  function addBracket(elem, position) {
    // create bracket
    let bracket = document.createElement("span");
    bracket.classList.add("brackets");
    bracket.classList.add("bracket_" + position);
    let content;
    if (position === "left") {
      content = document.createTextNode("[");
    }

    if (position === "right") {
      content = document.createTextNode("]");
    }

    bracket.appendChild(content);
    elem.append(bracket);
  }
  // END of Add Bracket

  // START Create Fixed Bot Buttons Animation
  function createFixedBotButtons() {
    let btn_elements = document.getElementsByClassName("bottom_btn");

    for (var i = 0; i < btn_elements.length; i++) {
      var elem = btn_elements[i];
      var elemText = elem.textContent;

      addBracket(elem, "left");
      addBracket(elem, "right");

      makeTextSpans(elem, elemText);

      elem.addEventListener(
        "mouseenter",
        function (event) {
          let bracketLeft = this.querySelector(".bracket_left");
          let bracketRight = this.querySelector(".bracket_right");
          var thisElem = this;
          anime({
            targets: bracketLeft,
            translateX: 10,
            duration: 400,
          });

          anime({
            targets: bracketRight,
            translateX: -10,
            duration: 400,
          });

          let linkElem = thisElem.querySelector("a");

          let span1 = linkElem.querySelector("span.indigo_1");
          let span2 = linkElem.querySelector("span.indigo_2");
          let span3 = linkElem.querySelector("span.indigo_3");

          animateTl1(span1);
          animateTl2(span2);
          animateTl1(span3);
        },
        false
      );

      elem.addEventListener(
        "mouseleave",
        function (event) {
          let bracketLeft = this.querySelector(".bracket_left");
          let bracketRight = this.querySelector(".bracket_right");
          anime({
            targets: bracketLeft,
            translateX: 0,
            duration: 400,
          });

          anime({
            targets: bracketRight,
            translateX: 0,
            duration: 400,
          });
        },
        false
      );
    }
  }
  createFixedBotButtons();
  // END of Create Fixed Bot Buttons Animation
};
