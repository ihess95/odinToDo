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
  if (newTaskBtn.classList.contains("clicked")) {
    console.log("test");
  } else {
    createPrompt();
  }
  newTaskBtn.classList.add("clicked");
  setTimeout(function ha() {
    newTaskBtn.classList.remove("clicked");
  }, 1000);
});

const switchFolderBtn = document.createElement("button");
switchFolderBtn.textContent = "Future Tasks";
const switchProjectBtn = document.createElement("button");
switchProjectBtn.textContent = "Other Projects";

mainGrid.appendChild(leftBar);
leftBar.appendChild(newTaskBtn);
leftBar.appendChild(switchFolderBtn);
leftBar.appendChild(switchProjectBtn);
mainGrid.appendChild(bodyContainer);
