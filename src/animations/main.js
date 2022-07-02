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

export const shibaSwapAnimation = () => {
  // START Buy On ShibaSwap Init
  var shibaswap_buy = document.getElementsByClassName("shibaswap_buy")[0];
  var shibaswap_text = document.getElementsByClassName("shibaswap_text")[0];
  anime({
    targets: shibaswap_buy,
    right: "270px",
    easing: "easeInOutQuad",
    duration: 500,
    delay: 3000,
  });

  anime({
    targets: shibaswap_text,
    opacity: 1,
    easing: "easeInOutQuad",
    duration: 500,
    delay: 3000,
  });

  // END Buy On ShibaSwap Init

  // START Buy On ShibaSwap Animation

  let linkElemShiba = document.getElementsByClassName("disabledhref")[0];

  linkElemShiba.addEventListener(
    "mouseenter",
    function (event) {
      noiseShibaSwap();
    },
    false
  );

  function noiseShibaSwap() {
    let span1 = linkElemShiba.querySelector("span.text_p1");
    let span2 = linkElemShiba.querySelector("span.text_p2");
    let span3 = linkElemShiba.querySelector("span.text_p3");

    animateTl1(span1);
    animateTl2(span2);
    animateTl1(span3);
  }

  // END of Buy On ShibaSwap Animation
};

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
