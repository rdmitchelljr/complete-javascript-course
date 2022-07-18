"use strict";
//Challenge 1
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
