var soundcloudAPI = {};

soundcloudAPI.init = function () {
  SC.initialize({
    client_id: "cd9be64eeb32d1741c17cb39e41d254d",
  });
};

// Get track
soundcloudAPI.getTrack = function (inputTrack) {
  SC.get("/tracks", {
    q: inputTrack,
  }).then(function (tracks) {
    console.log(tracks);
  });
};

soundcloudAPI.init();
soundcloudAPI.getTrack("Timecop 1983");
