"use strict";

//functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

let czechRepublic = describeCountry("The Czech Republic", "10.7", "Prague");
let unitedStates = describeCountry("The USA", "329", "Washington D.C");
let finland = describeCountry("Finland", "6", "Helsinki");

//function declaration vs expression
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

czechRepublic = percentageOfWorld1(10.7);
unitedStates = percentageOfWorld1(329);
finland = percentageOfWorld1(6);

console.log(czechRepublic);
console.log(unitedStates);
console.log(finland);

const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(2);
};

console.log(percentageOfWorld2(1123));

//arrow functions
const percentageOfWorld3 = (population) => {
  return ((population / 7900) * 100).toFixed(2);
};

console.log(percentageOfWorld3(6900));

//function in a function
const describePopulation = function (country, population) {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};
console.log(describePopulation("Czechia", 10.7));

//introduction to arrays
let population = [10.7, 329, 32, 6];
console.log(population.length === 4);

const percentages = [
  percentageOfWorld2(population[0]),
  percentageOfWorld2(population[1]),
  percentageOfWorld2(population[2]),
  percentageOfWorld2(population[population.length - 1]),
];
console.log(percentages);

// Methods

const usaNeighbours = ["Canada", "Mexico"];
// welcome utopia
usaNeighbours.push("Utopia");
//farewell utopia
usaNeighbours.pop();

if (!usaNeighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

usaNeighbours[usaNeighbours.indexOf("Mexico")] = "THE MOON";
console.log(usaNeighbours);

//Intro to objects

const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "english",
  population: 329,
  neighbours: ["Canada", "Mexico"],
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
  describe: function () {
    return (this.description = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`);
  },
};

// //dot vs bracket
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`
// );

// //Increase population
// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry["population"]);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.description);
