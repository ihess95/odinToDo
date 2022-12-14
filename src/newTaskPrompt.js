import { showPanel } from "./hideCoverPanel";
import { hidePanel } from "./hideCoverPanel";
import { xBtn } from "./xBtn";

function createPrompt() {
  function NewCardInput(title, desc, date, priority) {
    (this.title = title),
      (this.desc = desc),
      (this.date = date),
      (this.priority = priority);
  }
  const newPrompt = document.createElement("div");
  const bodyContainer = document.querySelector(".bodyContainer");
  const titleField = document.createElement("textarea");
  titleField.textContent = "Task Title goes here...";
  titleField.classList.add("titleField");

  const descField = document.createElement("textarea");
  descField.textContent = "Task Description goes here...";
  descField.classList.add("descField");

  const dateField = document.createElement("textarea");
  dateField.textContent = "Due date goes here...";
  dateField.classList.add("dateField");

  const priorityBtnCont = document.createElement("div");

  let priorityField = "";

  function priority(input) {
    priorityField = btn.textContent;
  }
  const lowBtn = document.createElement("button");
  lowBtn.textContent = "Low Priority";
  lowBtn.classList.add("lowBtn");
  lowBtn.addEventListener("click", priority(lowBtn));
  const midBtn = document.createElement("button");
  midBtn.textContent = "Medium Priority";
  midBtn.classList.add("midBtn");
  midBtn.addEventListener("click", priority(midBtn));
  const hiBtn = document.createElement("button");
  hiBtn.textContent = "High Priority";
  hiBtn.classList.add("hiBtn");
  hiBtn.addEventListener("click", priority(hiBtn));

  priorityBtnCont.classList.add("priorityBtnCont");

  const confOrDeny = document.createElement("div");
  confOrDeny.classList.add("confOrDeny");
  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "Create Task";
  confirmBtn.classList.add("confirmBtn");
  confirmBtn.addEventListener("click", function () {
    // const newTitle = titleField.value
    const newCard = new NewCardInput(
      titleField.value,
      descField.value,
      dateField.value,
      priorityField
    );
    console.log(newCard);
  });
  const denyBtn = document.createElement("button");
  denyBtn.textContent = "Cancel";
  denyBtn.classList.add("denyBtn");
  denyBtn.addEventListener("click", function () {
    newPrompt.remove();
    hidePanel();
  });

  showPanel();
  newPrompt.classList.add("prompt");

  bodyContainer.appendChild(newPrompt);

  newPrompt.appendChild(titleField);
  newPrompt.appendChild(descField);
  newPrompt.appendChild(dateField);
  newPrompt.appendChild(priorityBtnCont);
  newPrompt.appendChild(confOrDeny);

  priorityBtnCont.appendChild(lowBtn);
  priorityBtnCont.appendChild(midBtn);
  priorityBtnCont.appendChild(hiBtn);

  confOrDeny.appendChild(confirmBtn);
  confOrDeny.appendChild(denyBtn);

  const xImg = document.createElement("img");
  xImg.classList.add("xImg");
  xImg.src = "../img/x.svg";
  newPrompt.appendChild(xImg);
  xImg.addEventListener("click", function () {
    newPrompt.remove();
    hidePanel();
  });
}

export { createPrompt };
