var singyImg = document.getElementById("singyImg");
var singyName = document.getElementById("singyH1");
var screamyImg = document.getElementById("screamyImg");
var screamyName = document.getElementById("screamyH1");
var rappyImg = document.getElementById("rappyImg");
var rappyName = document.getElementById("rappyH1");
singyName.hidden = true;
screamyName.hidden = true;
rappyName.hidden = true;

singyImg.addEventListener("mouseover", function (event) {
  singyName.hidden = false;
});

singyImg.addEventListener("mouseout", function () {
  singyName.hidden = true;
});

screamyImg.addEventListener("mouseover", function () {
  screamyName.hidden = false;
});

screamyImg.addEventListener("mouseout", function () {
  screamyName.hidden = true;
});

rappyImg.addEventListener("mouseover", function () {
  rappyName.hidden = false;
});

rappyImg.addEventListener("mouseout", function () {
  rappyName.hidden = true;
});
