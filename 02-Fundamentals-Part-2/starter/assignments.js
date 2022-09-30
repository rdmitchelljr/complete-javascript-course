"use strict";

// //functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// let czechRepublic = describeCountry("The Czech Republic", "10.7", "Prague");
// let unitedStates = describeCountry("The USA", "329", "Washington D.C");
// let finland = describeCountry("Finland", "6", "Helsinki");

// //function declaration vs expression
// // function percentageOfWorld1(population) {
// //   return ((population / 7900) * 100).toFixed(2);
// // }

// czechRepublic = percentageOfWorld1(10.7);
// unitedStates = percentageOfWorld1(329);
// finland = percentageOfWorld1(6);

// console.log(czechRepublic);
// console.log(unitedStates);
// console.log(finland);

// const percentageOfWorld2 = function (population) {
//   return ((population / 7900) * 100).toFixed(2);
// };

// console.log(percentageOfWorld2(1123));

// //arrow functions
// const percentageOfWorld3 = (population) => {
//   return ((population / 7900) * 100).toFixed(2);
// };

// console.log(percentageOfWorld3(6900));

// //function in a function
// const describePopulation = function (country, population) {
//   return `${country} has ${population} million people which is about ${percentageOfWorld1(
//     population
//   )}% of the world.`;
// };
// console.log(describePopulation("Czechia", 10.7));

// //introduction to arrays
// // let populations = [10.7, 329, 32, 6];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld2(populations[0]),
//   percentageOfWorld2(populations[1]),
//   percentageOfWorld2(populations[2]),
//   percentageOfWorld2(populations[populations.length - 1]),
// ];
// console.log(percentages);

// // Methods

// const usaNeighbours = ["Canada", "Mexico"];
// // welcome utopia
// usaNeighbours.push("Utopia");
// //farewell utopia
// usaNeighbours.pop();

// if (!usaNeighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// usaNeighbours[usaNeighbours.indexOf("Mexico")] = "THE MOON";
// console.log(usaNeighbours);

// //Intro to objects

// const myCountry = {
//   country: "USA",
//   capital: "Washington DC",
//   language: "english",
//   population: 329,
//   neighbours: ["Canada", "Mexico"],
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length > 0 ? false : true;
//     return this.isIsland;
//   },
//   describe: function () {
//     return (this.description = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`);
//   },
// };

// // //dot vs bracket
// // console.log(
// //   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`
// // );

// // //Increase population
// // myCountry.population += 2;
// // console.log(myCountry.population);

// // myCountry["population"] -= 2;
// // console.log(myCountry["population"]);

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.description);

//for loop
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting.`);
// }

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages);
// console.log(percentages2);

//looping backwards and loops in loops
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(listOfNeighbours[i][y]);
//   }
// }
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

let populations = [10.7, 329, 32, 6];
const percentages2 = [];
const percentages3 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
// console.log(percentages);
// console.log(percentages2);

let i = 0;

while (populations.length > percentages3.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

while (populations.length > percentages3.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
