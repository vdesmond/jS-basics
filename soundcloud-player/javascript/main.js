// Create SoundCloud API
var soundcloudAPI = {};

//Initialize API with clientID from SoundCloud
soundcloudAPI.init = function () {
  SC.initialize({
    client_id: "cd9be64eeb32d1741c17cb39e41d254d",
  });
};

// Embed iframe in playlist given song link
soundcloudAPI.embediFrame = function (songLink) {
  SC.oEmbed(songLink, {
    auto_play: true,
  }).then(function (embed) {
    console.log("oEmbed response: ", embed);
    var playlistColumn = document.querySelector(".js-inner-playlist");
    var songBox = document.createElement("div");
    songBox.innerHTML = embed.html;
    songBox.classList.add("js-songbox");
    playlistColumn.insertBefore(songBox, playlistColumn.firstChild);
    localStorage.setItem("key", playlistColumn.innerHTML);
  });
};

// Render cards given tracks object
soundcloudAPI.renderCards = function (tracks) {
  //For each track in tracks
  tracks.forEach(function (track) {
    // Get song link, title and image link
    var songLink = track.permalink_url;
    var songTitle = track.title;
    var songAlbumArt = track.artwork_url.replace("-large", "-t500x500");

    // Get search results div
    var searchResults = document.querySelector(".js-search-results");

    // cardDiv div
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    searchResults.appendChild(cardDiv);

    // Image div
    var imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    cardDiv.appendChild(imageDiv);
    var imageElement = document.createElement("img");
    imageElement.classList.add("image-img");
    imageDiv.appendChild(imageElement);
    imageElement.setAttribute("src", songAlbumArt);

    // Content div
    var contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    cardDiv.appendChild(contentDiv);
    var headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    contentDiv.appendChild(headerDiv);
    var titleLink = document.createElement("a");
    titleLink.setAttribute("href", songLink);
    titleLink.setAttribute("target", "_blank");
    titleLink.innerHTML = songTitle;
    headerDiv.appendChild(titleLink);

    // Button div
    var buttonDiv = document.createElement("div");
    buttonDiv.classList.add(
      "js-button",
      "bottom",
      "ui",
      "bottom",
      "attached",
      "button"
    );
    cardDiv.appendChild(buttonDiv);

    // Icon inside button
    var addIcon = document.createElement("i");
    addIcon.classList.add("add", "icon");
    buttonDiv.appendChild(addIcon);

    // Span inside button
    addSpan = document.createElement("span");
    addSpan.classList.add("add");
    addSpan.innerHTML = "Add to playlist";
    buttonDiv.appendChild(addSpan);

    // Listen for click to embed iframe
    buttonDiv.addEventListener("click", function () {
      soundcloudAPI.embediFrame(songLink);
    });
  });
};

// Get track given search term
soundcloudAPI.getTrack = function (searchTerm) {
  SC.get("/tracks", {
    limit: 10,
    q: searchTerm,
  }).then(function (tracks) {
    console.log(tracks);
    soundcloudAPI.renderCards(tracks);
  });
};

soundcloudAPI.init();
soundcloudAPI.getTrack("Timecop 1983");

// Loading previously saved playlists
var playlistColumn = document.querySelector(".js-inner-playlist");
playlistColumn.innerHTML = localStorage.getItem("key");

// Clear localstorage if clicked
var clearPlaylist = document.querySelector(".js-clear-playlist");
clearPlaylist.addEventListener("click", function () {
  localStorage.clear();
  playlistColumn.innerHTML = null;
});
