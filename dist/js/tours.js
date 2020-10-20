$(window).on("load", function () {
  class tour {
    constructor(name, year, locations) {
      this.name = name;
      this.year = year;
      this.locations = locations;
    }

    getName() {
      return this.name;
    }
    setName(val) {
      this.name = val;
    }

    getYear() {
      return this.year;
    }
    setYear(val) {
      this.year = val;
    }

    getLocations() {
      return this.locations;
    }
    setLocations(val) {
      this.locations = val;
    }

    getLocation(pos) {
      return this.locations[pos];
    }
  }

  // generate tours
  var tours = [];
  for (let index = 0; index < 10; index++) {
    tours.push(
      new tour("lorem ipsum " + index, 2020 - index, ["dolor", "sit", "amet"])
    );
  }
  var output = "";
  for (let i = 0; i < tours.length; i++) {
    // if odd number render image on left
    if (i % 2) {
      console.log(typeof output);
      output =
        output +
        `
            <div class="row">
        <div class="col-md-8">
        <h2>` +
        tours[i].getName() +
        `</h2>
        <p class="lead">` +
        tours[i].getYear() +
        `, at`;

      for (let j = 0; j < tours[i].locations.length; j++) {
        output =
          output +
          ` <em class="tour-location">` +
          tours[i].getLocation(j) +
          `</em>`;
      }

      output =
        output +
        `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure
            consectetur quis cum,` +
        ` saepe soluta harum quidem sequi. Cupiditate,
            eaque voluptatem facere, exercitationem unde maxime magnam officia
            inventore tenetur esse quidem nesciunt sit explicabo eos ipsa!
            Consectetur impedit, officiis corporis similique facilis possimus
            nemo non asperiores, esse, voluptatibus ipsam sapiente!
          </p>
        </div>
        <div class="col-md-4">
          <img src="https://placehold.it/300" alt="" />
        </div>
      </div>
            `;

      document.getElementById("dynamicContent").innerHTML = output;
    } else {
      output =
        output +
        `
            <div class="row">
        <div class="col-md-4">
          <img src="https://placehold.it/300" alt="" />
        </div>
        <div class="col-md-8">
        <h2>` +
        tours[i].getName() +
        `</h2>
        <p class="lead">` +
        tours[i].getYear() +
        `, at`;

      for (let j = 0; j < tours[i].locations.length; j++) {
        output =
          output +
          ` <em class="tour-location">` +
          tours[i].getLocation(j) +
          `</em>`;
      }

      output =
        output +
        `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure
            consectetur quis cum,` +
        ` saepe soluta harum quidem sequi. Cupiditate,
            eaque voluptatem facere, exercitationem unde maxime magnam officia
            inventore tenetur esse quidem nesciunt sit explicabo eos ipsa!
            Consectetur impedit, officiis corporis similique facilis possimus
            nemo non asperiores, esse, voluptatibus ipsam sapiente!
          </p>
        </div>
      </div>
            `;

      document.getElementById("dynamicContent").innerHTML = output;
    }
  }
});
