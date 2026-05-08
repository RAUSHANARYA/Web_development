document.querySelector("#bgcolor").addEventListener("change", changeBgColor);

function changeBgColor() {
  const color = document.querySelector("#bgcolor").value;

  document.querySelector(".right").style.backgroundColor = color;
}

document
  .querySelector("#hcolor")
  .addEventListener("change", changeHeadingColor);

function changeHeadingColor() {
  const color = document.querySelector("#hcolor").value;

  document.querySelector("#heading").style.color = color;
}

document.querySelector("#pcolor").addEventListener("change", changeParaColor);

function changeParaColor() {
  const color = document.querySelector("#pcolor").value;

  document.querySelector("#para").style.color = color;
}

function reset() {
  window.location.reload();
}

const developer = "Jessica";

function greet() {
  console.log("Hello, " + developer)
}

greet();