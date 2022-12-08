import { showPanel } from "./hideCoverPanel";
import { hidePanel } from "./hideCoverPanel";

function createPrompt() {
  const newPrompt = document.createElement("div");
  const bodyContainer = document.querySelector(".bodyContainer");
  const coverPanel = document.querySelector(".coverPanel");
  showPanel();
  newPrompt.classList.add("prompt");

  bodyContainer.appendChild(newPrompt);
  const xImg = document.createElement("img");
  xImg.src = "../img/x.svg";
  newPrompt.appendChild(xImg);
  xImg.addEventListener("click", function () {
    newPrompt.remove();
    hidePanel();
  });
}

export { createPrompt };
