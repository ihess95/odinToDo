import { todoConst } from "./todoConst";

function cardConstructor(title, desc, dueDate, priority, notes) {
  const bodyDiv = document.querySelector(".bodyContainer");
  const cardDiv = document.createElement("div");
  const cardTitleDiv = document.createElement("div");
  const cardDescDiv = document.createElement("div");
  const cardOne = new todoConst(title, desc, dueDate, priority, notes);
  cardTitleDiv.textContent = cardOne.cardTitle;
  cardDiv.classList.add("test");
  bodyDiv.appendChild(cardDiv);
  cardDiv.appendChild(cardTitleDiv);
  cardDiv.appendChild(cardDescDiv);
}

export { cardConstructor };
