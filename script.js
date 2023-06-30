function moveButton() {
  var button = document.getElementById("giftButton");
  var maxWidth = window.innerWidth - button.clientWidth;
  var maxHeight = window.innerHeight - button.clientHeight;
  var newLeft = Math.floor(Math.random() * maxWidth);
  var newTop = Math.floor(Math.random() * maxHeight);
  button.style.left = newLeft + "px";
  button.style.top = newTop + "px";
}

function getQueryParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

var name = getQueryParam("name");
var birthdayMessage = document.getElementById("birthdayMessage");

if (name && name !== "null") {
  birthdayMessage.textContent = "Feliz Aniversário, " + name + "!";
} else {
  birthdayMessage.textContent = "Feliz Aniversário!";
}

window.onload = function () {
  document.getElementById("audio").play();
};
