// Get input
function getInput() {
  var inputText = document.querySelector("input").value;
  console.log(inputText);
  return inputText;
}

//Push GIFs to container
function pushGifs(input) {
  var container = document.querySelector(".js-container");
  container.innerHTML = input;
}

// Capture text in Search box
// Capture when button pressed
document.querySelector("button").addEventListener("click", function () {
  var inputText = document.querySelector("input").value;
  console.log(inputText);
  pushGifs(inputText);
});

//Capture when press "Enter"
document
  .querySelector(".js-userinput")
  .addEventListener("keyup", function (event) {
    var inputText = document.querySelector("input").value;
    /*  console.log(event);
    console.log(inputText); */
    // Enter key
    if (event.which == 13) {
      pushGifs(inputText);
    }
  });
