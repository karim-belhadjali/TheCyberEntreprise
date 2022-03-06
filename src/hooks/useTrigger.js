import { anime } from "react-animejs-wrapper";

export const noiseTrigger = (...spans) => {
  spans.forEach((span, i) => {
    i % 2 === 0 ? animateTl1(span) : animateTl2(span);
  });
};

const animateTl1 = (span) => {
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
};
const animateTl2 = (span) => {
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
};
