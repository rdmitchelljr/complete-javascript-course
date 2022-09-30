"use strict";
/* Challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsAverage = calcAverage(85, 54, 41).toFixed(0);
const koalasAverage = calcAverage(145, 150, 80).toFixed(0);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No winners`);
  }
}

checkWinner(dolphinsAverage, koalasAverage);

//Challenge 2
// const calcTip = function (bills) {
//   if (bills >= 50 && bills <= 300) {
//     const tip = bills * 0.15;
//     return tip;
//   } else {
//     const tip = bills * 0.2;
//     return tip;
//   }
// };

// Calculates the tip. Between 50 and 300, 15%. Anything else 20%
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [122, 55, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(bills);
console.log(tips);
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];

console.log(
  `The bills are ${bills}. The tips are ${tips}. The totals are ${totals}.`
);

*/
// BMI Calculator

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   combineName: function () {
//     return (this.fullName = `${this.firstName} ${this.lastName}`);
//   },
//   mass: 62,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.BMI = (this.mass / this.height ** 2).toFixed(2));
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   combineName: function () {
//     return (this.fullName = `${this.firstName} ${this.lastName}`);
//   },
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.BMI = (this.mass / this.height ** 2).toFixed(2));
//   },
// };

// john.calcBMI();
// john.combineName();
// mark.calcBMI();
// mark.combineName();

// if (john.BMI > mark.BMI) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}).`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI}).`
//   );
// }

// Calculates the tip. Between 50 and 300, 15%. Anything else 20%
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [
  //   calcTip(bills[0]),
  //   calcTip(bills[1]),
  //   calcTip(bills[bills.length - 1]),
];
const totals = [
  // bills[0] + tips[0],
  // bills[1] + tips[1],
  // bills[bills.length - 1] + tips[tips.length - 1],
];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
  console.log(
    `The bill was \n$${bills[i]}, the tip was \n$${tip}, and the total was \n$${totals}.`
  );
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
