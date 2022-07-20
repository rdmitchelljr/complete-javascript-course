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

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  fullName: `${this.firstName} ${this.lastName}`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  fullName: `${this.firstName} ${this.lastName}`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

john.calcBMI();
mark.calcBMI();
