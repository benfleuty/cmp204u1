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
      var seconds = (deltaT % (1000 * 60)) / 1000;
      var minutes = (deltaT % (1000 * 60 * 60)) / (1000 * 60);
      var hours = (deltaT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
      var days = deltaT % (1000 * 60 * 60 * 24);
      /* Calculate individual units of time END */
      // Build the resultant string

      var output =
        days +
        "days, " +
        hours +
        "hours, " +
        minutes +
        "minutes, " +
        seconds +
        "seconds ";

      document.getElementById("newAlbumReleaseTimer").innerHTML = output;

      //
    }, 1000);
  }

  countdownTimer();
  /*
  // Update the count down every 1 second
  var generateTimer = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var difference = releaseDateTime - now;
    // alert(difference);
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("newAlbumReleaseTimer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (difference <= 0) {
      clearInterval(generateTimer);
      document.getElementById("newAlbumReleaseTimer").innerHTML =
        "NEW ALBUM RELEASED";
    }
  }, 1000);*/
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  //   // set this year for copyright
  document.getElementById("thisYear").innerHTML =
    "<strong>" + new Date().getFullYear() + "</strong>";
});
