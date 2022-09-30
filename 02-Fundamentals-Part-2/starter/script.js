"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;


function logger() {
  console.log("My name is Roderick");
}

//calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return console.log(juice);
}

fruitProcessor(5, 6);

const appleJuice = fruitProcessor(5, 0);
appleJuice;

const appleOrangeJuice = fruitProcessor(2, 4);
appleOrangeJuice;

const num = Number("23");
console.log(num);


//fucntion decleratiion
//function functionName(parameter){body}
const age1 = calcAge1(1988);
console.log(age1);
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

//function expression - uses anonymous (empty) function
const calcage2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcage2(1991);

console.log(age1, age2);


//arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Rod"));



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1988, "Rod"));
console.log(yearsUntilRetirement(1957, "Rod"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//literal
const friends = ["Michael", "Steven", "Peter"];

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
// console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmed", 2037 - 1991, "teacher", friends];
// console.log(jonas);

//exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.table(ages);


const friends = ["Michael", "Steven", "Peter"];

// add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven.");
}

const jonasArray = [
  "Jonas",
  "Schmed",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];


const jonas = {
  firstName: "Jonas",
  lastName: "Schmed",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(`${jonas["first" + nameKey] + " " + jonas["last" + nameKey]}`);
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey)

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmed";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmed",
  birthYear: 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },
  calcAge: function () {
    return (this.age = 2022 - this.birthYear);
  },
  //prettier-ignore
  // getSummary: function () {
  //   this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has
  //   ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  //   return this.summary;
  // },
  getSummary: function () {
    return this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
jonas.calcAge();
jonas.getSummary();

console.log(jonas.summary);


// console.log("Lifting weights repetition 1");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


// const jonas = [
//   "Jonas",
//   "Schmed",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("----ONLY STRINGS----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("----BREAK WITH NUMBER----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  "Jonas",
  "Schmed",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repitition ${rep}`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) {
  console.log(`You rolled a ${dice}`);
} else {
  while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You rolled a ${dice}`);
  }
}
