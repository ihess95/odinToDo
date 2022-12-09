import { cardConstructor } from "./cardConstructor";
import { createPrompt } from "./newTaskPrompt";
import { preventMultiPrompt } from "./preventMultiPrompt";

cardConstructor(
  "1",
  "Finish this task app",
  "Gotta work on it dude",
  "soon",
  "pretty high",
  "working on it"
);

cardConstructor(
  "2",
  "Finish this task appTwo",
  "Gotta work on it dude",
  "soon",
  "pretty high",
  "working on it"
);

const newTaskBtn = document.createElement("button");
const bodyContainer = document.querySelector(".bodyContainer");
const mainGrid = document.querySelector(".mainGrid");
const leftBar = document.createElement("div");
leftBar.classList.add("leftBar");
// const count = bodyContainer.getElementsByTagName("div").length;
let count = 2;

newTaskBtn.textContent = "Add New Task";
newTaskBtn.classList.add("newTaskBtn");
newTaskBtn.addEventListener("click", function () {
  count++;
  preventMultiPrompt();
  cardConstructor(
    // "card" + count,
    count,
    "Finish this task appTwo",
    "Gotta work on it dude",
    "soon",
    "pretty high",
    "working on it"
  );
});

mainGrid.appendChild(leftBar);
leftBar.appendChild(newTaskBtn);
mainGrid.appendChild(bodyContainer);
