function hidePanel() {
  const coverPanel = document.querySelector(".coverPanel");
  coverPanel.classList.add("hidden");
}

function showPanel() {
  const coverPanel = document.querySelector(".coverPanel");
  coverPanel.classList.remove("hidden");
}

export { showPanel };
export { hidePanel };
