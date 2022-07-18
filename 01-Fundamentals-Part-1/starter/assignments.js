// Values and Variables
let country = "Czech Republic";
const continent = "Europe";
let population = 10.7;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "English";

//Basic operators
console.log(
  "The amount of people in each half of the country if the each half contained a half of the whole population:" +
    " " +
    population / 2
);
population++;
console.log(population);

let populationFinland = 6;
console.log(population > populationFinland);
console.log(population < 33);

// String and template literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

if (population >= 33) {
  console.log(`The ${country}'s population is above average`);
} else {
  console.log(
    `The ${country}'s population is ${33 - population} million below average.`
  );
}

// Type Conversion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

/*
// Equality Operators
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbours);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}
*/

// Logical Operators

if (population < 50 && language === "English" && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

language = "chinese";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${country}'s population is ${population >= 33 ? "above" : "below"} average!'`
);
