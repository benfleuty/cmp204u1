$(document).ready(function () {
  var albumName = ",,new album name,,";
  var releaseDate = new Date("Jan 1, 2021 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var difference = releaseDate - now;
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
      clearInterval(x);
      document.getElementById("newAlbumReleaseTimer").innerHTML =
        "NEW ALBUM RELEASED";
    }
  }, 1000);
});
