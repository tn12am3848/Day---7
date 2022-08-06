// Rated G: General audiences – All ages admitted.
// Rated PG: Parental guidance suggested – Some material may not be suitable for children.
// Rated PG-13: Parents strongly cautioned – Some material may be inappropriate for children under 13.
// Rated R: Restricted – Under 17 requires accompanying parent or adult guardian.
// Rated NC-17: Adults Only – No one 17 and under admitted.

//       "title": "The conjuring",
//       "year": 2021,
//       "studio": "Warner Bros Pictures",
//       "Budget": "$39 Million",
//       "BoxOffice": "$204 Million",
//       "Rating": "PG13",
//       "Language": "English"

class Movie {
  constructor(title, year, studio, budget, boxoffice, language, rating) {
    this.title = title;
    this.year = year;
    this.studio = studio;
    this.budget = budget;
    this.boxoffice = boxoffice;
    this.language = language;
    this.rating = rating;
  }

  getPg() {
    if (this.rating != null) this.rating = "PG13";
    else this.rating = rating;
  }

  getdetails() {
    return `
    Title : ${this.title}
    year: ${this.year}
    studio: ${this.studio}
    budget: ${this.budget}
    Boxoffice: ${this.boxoffice}
    Language: ${this.language}
    Rating: ${getPg()}`;
  }
}

let film = new Movie(
  "The conjuring",
  2021,
  "Warner Bros Pictures",
  "$39 Million",
  "$204 Million",
  "English"
);
console.log(film.getdetails());
