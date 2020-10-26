$(document).ready(function () {
  // Cookit  function
  $.cookit({
    linkUrl: "https://www.jqueryscript.net/privacy/",
  });

  //
  /////////////////////////////////////////////////////////////////////////////////////////////
  // release timer
  /////////////////////////////////////////////////////////////////////////////////////////////
  var albumName = "new album name";
  document.getElementById("newAlbumName").innerHTML =
    "<strong><em>" + albumName + "</em></strong>";
  var releaseDateTimeTime = new Date("Jan 1, 2021 00:00:00").getTime();

  function countdownTimer() {
    setInterval(function () {
      // gets the current date and time
      var currentDateTime = new Date().getTime();
      // calculates and stores the time between now and the release date
      var deltaT = releaseDateTimeTime - currentDateTime;
      /* Calculate individual units of time START */
      // math.floor requried as decimals are produced without it
      var seconds = Math.floor((deltaT % (1000 * 60)) / 1000);
      var minutes = Math.floor((deltaT % (1000 * 60 * 60)) / (1000 * 60));
      var hours = Math.floor(
        (deltaT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var days = Math.floor(deltaT / (1000 * 60 * 60 * 24));
      /* Calculate individual units of time END */
      // Build the resultant string
      var output =
        days +
        " days, " +
        hours +
        " hours, " +
        minutes +
        " minutes, " +
        seconds +
        " seconds!";

      // output the time remaining
      document.getElementById("newAlbumReleaseTimer").innerHTML = output;
      // if the date has not passed, end the funciton
      if (deltaT > 0) return;

      // stop the interval to end the script
      clearInterval();
      // change the announcement banner
      document.getElementById("announcementBanner").innerHTML =
        "<strong>We have released our new album <em>new album name</em>!</strong>";
    }, 1000);
  }

  countdownTimer();
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  //   // set this year for copyright
  document.getElementById("thisYear").innerHTML =
    "<strong>" + new Date().getFullYear() + "</strong>";
});
