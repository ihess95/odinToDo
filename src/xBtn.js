import { hidePanel } from "./hideCoverPanel";

function xBtn(parentDiv) {
  const xImg = document.createElement("img");
  const parent = document.querySelector(parentDiv);
  xImg.src = "../img/x.svg";
  parent.appendChild(xImg);
  xImg.addEventListener("click", function () {
    parent.remove();
    hidePanel();
  });
}
export { xBtn };
