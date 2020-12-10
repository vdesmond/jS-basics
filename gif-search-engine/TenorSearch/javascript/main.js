// Push GIFs to container
function pushGifs(input) {
  var response_objects = JSON.parse(input);
  topGifs = response_objects["results"];
  console.log(topGifs);
  var imageURL = topGifs[3]["media"][0]["tinygif"]["url"];
  console.log(imageURL);
  var container = document.querySelector(".js-container");
  container.innerHTML = '<img src="' + imageURL + '">';
}

// // Capture text in Search box
// // Capture when button pressed
// document.querySelector("button").addEventListener("click", function () {
//   var inputText = document.querySelector("input").value;
//   // pushGifs(inputText);
// });

// //Capture when press "Enter"
// document
//   .querySelector(".js-userinput")
//   .addEventListener("keyup", function (event) {
//     var inputText = document.querySelector("input").value;
//     // Enter key
//     if (event.which == 13) {
//       pushGifs(inputText);
//     }
//   });

var apikey = "4ECYI66WVRAJ";
var lmt = 8;

// test search term
var search_term = "excited";

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
