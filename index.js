let nIntervId;

function changeColor() {
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 250);
  }
}

function flashText() {
  const toggle = document.getElementById("my_box");

  toggle.className = toggle.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  nIntervId = null;
}
document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
