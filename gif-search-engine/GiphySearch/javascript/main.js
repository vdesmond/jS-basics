// Get input
function getInput() {
  var inputText = document.querySelector("input").value;
  console.log(inputText);
  return inputText;
}

function pushImages(input) {
  var container = document.querySelector(".js-container");
  container.innerHTML = input;
}

document.querySelector("button").addEventListener("click", function () {
  var inputText = document.querySelector("input").value;
  console.log(inputText);
  pushImages(inputText);
});

document.querySelector(".js-userinput").addEventListener("keyup", function () {
  var inputText = document.querySelector("input").value;
  console.log(inputText);
  pushImages(inputText);
});
