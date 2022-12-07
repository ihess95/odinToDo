import { cardConstructor } from "./cardConstructor";

cardConstructor(
  "taskApp",
  "Finish this task app",
  "Gotta work on it dude",
  "soon",
  "pretty high",
  "working on it"
);

cardConstructor(
  "taskAppTest",
  "Finish this task appTwo",
  "Gotta work on it dude",
  "soon",
  "pretty high",
  "working on it"
);

const newTaskBtn = document.createElement("button");
const bodyContainer = document.querySelector(".bodyContainer");
// const count = bodyContainer.getElementsByTagName("div").length;
let count = 1;

newTaskBtn.textContent = "Add New Task";
newTaskBtn.addEventListener("click", function () {
  count++;
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

bodyContainer.appendChild(newTaskBtn);
