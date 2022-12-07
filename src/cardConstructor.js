import { todoConst } from "./todoConst";

function cardConstructor(hiddenTitle, title, desc, dueDate, priority, notes) {
  const cardClass = "task" + hiddenTitle;
  const bodyDiv = document.querySelector(".bodyContainer");
  const cardDiv = document.createElement("div");
  const cardTitleDiv = document.createElement("div");
  const cardDescDiv = document.createElement("div");
  const cardInst = new todoConst(title, desc, dueDate, priority, notes);
  cardTitleDiv.textContent = cardInst.cardTitle;
  cardDiv.classList.add(cardClass);
  bodyDiv.appendChild(cardDiv);
  cardDiv.appendChild(cardTitleDiv);
  cardDiv.appendChild(cardDescDiv);
}

export { cardConstructor };
