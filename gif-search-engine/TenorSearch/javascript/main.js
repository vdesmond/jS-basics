// Push GIFs to container given API response
function pushGifs(input) {
  var response_objects = JSON.parse(input);
  topGifs = response_objects["results"];
  topGifs.forEach(function (element) {
    console.log(element["media"][0]["tinygif"]["url"]);
    var imageURL = element["media"][0]["tinygif"]["url"];

    container.innerHTML +=
      '<img src="' + imageURL + '" class="container-image">';
  });
}

// Load GIFs given search term
function loadGIFs(search_term) {
  // using default locale of en_US
  var search_url =
    "https://api.tenor.com/v1/search?q=" +
    search_term +
    "&key=" +
    apikey +
    "&limit=" +
    lmt;

  // AJAX Request from Tenor
  var tenorAJAXCall = new XMLHttpRequest();
  tenorAJAXCall.open("GET", search_url);
  tenorAJAXCall.send();

  // Push rquested GIFs to container
  tenorAJAXCall.addEventListener("load", function (event) {
    var data = event.target.response;
    pushGifs(data);
  });
}

// Set Credentials and GIF limits
var apikey = "4ECYI66WVRAJ"; // Your API Key Here
var lmt = 32;

// Set container
var container = document.querySelector(".js-container");

// Capture text in Search box
// Load when button pressed
document.querySelector("button").addEventListener("click", function () {
  let inputText = document.querySelector("input").value;
  container.innerHTML = null;
  loadGIFs(inputText);
});

//Load when press "Enter"
document
  .querySelector(".js-userinput")
  .addEventListener("keyup", function (event) {
    let inputText = document.querySelector("input").value;
    // Enter key
    if (event.which == 13) {
      container.innerHTML = null;
      loadGIFs(inputText);
    }
  });
