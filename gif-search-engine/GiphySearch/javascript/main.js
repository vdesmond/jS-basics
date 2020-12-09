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

var searchGif = document.querySelector("button");
searchGif.addEventListener("click", function () {
  var inputText = document.querySelector("input").value;
  console.log(inputText);
  pushImages(inputText);
});
