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
let population = [10.7, 30, 3, 329];
