import { todoConst } from "./todoConst";

function cardConstructor(hiddenTitle, title, desc, dueDate, priority, notes) {
  const cardClass = "task" + hiddenTitle;
  const coverPanel = document.querySelector(".coverPanel");
  const bodyDiv = document.querySelector(".bodyContainer");
  const cardDiv = document.createElement("div");
  const cardTitleDiv = document.createElement("div");
  cardTitleDiv.classList.add("title");
  const cardDescDiv = document.createElement("div");
  cardDescDiv.classList.add("desc");
  const cardDueDateDiv = document.createElement("div");
  cardDueDateDiv.classList.add("dueDate");
  const cardPriorityDiv = document.createElement("div");
  cardPriorityDiv.classList.add("priority");
  const cardNotesDiv = document.createElement("div");
  cardNotesDiv.classList.add("notes");
  const cardInst = new todoConst(title, desc, dueDate, priority, notes);
  cardTitleDiv.textContent = cardInst.cardTitle;
  cardDescDiv.textContent = cardInst.cardDesc;
  cardDueDateDiv.textContent = cardInst.cardDueDate;
  cardPriorityDiv.textContent = cardInst.cardPriority;
  cardNotesDiv.textContent = cardInst.cardDesc;
  cardDiv.classList.add(cardClass);
  cardDiv.appendChild(cardTitleDiv);
  cardDiv.appendChild(cardDescDiv);
  cardDiv.appendChild(cardDueDateDiv);
  cardDiv.appendChild(cardPriorityDiv);
  cardDiv.appendChild(cardNotesDiv);
  bodyDiv.appendChild(cardDiv);
  cardDiv.addEventListener("click", function () {
    if (cardDiv.classList.contains("active")) {
      cardDiv.classList.remove("active");
      coverPanel.classList.remove("hidden");
    } else {
      cardDiv.classList.add("active");
      coverPanel.classList.add("hidden");
    }
  });
}

export { cardConstructor };
