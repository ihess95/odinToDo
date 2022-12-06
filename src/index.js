import { todoConst } from "./todoConst";

const bodyDiv = document.querySelector(".bodyContainer");
const testDiv = document.createElement("div");
const cardOne = new todoConst("test", "testing", "today", "eh", "testing dude");
testDiv.textContent = cardOne.cardTitle;
testDiv.classList.add("test");
bodyDiv.appendChild(testDiv);
