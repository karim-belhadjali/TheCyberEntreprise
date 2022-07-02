export const addBracket = (elem, position) => {
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
};

export const makeTextSpans = (elem, elemText) => {
  let linkElem = elem.querySelector("div");

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
};
