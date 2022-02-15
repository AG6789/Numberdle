"use strict";

// Elimination of Duplicates

// function hasDuplicates(arr) {
//   return new Set(arr).size !== arr.length;
// }

// Secret Number
function secretNumberFunction(min, max) {
  // min and max included
  let secNum = Math.floor(Math.random() * (max - min + 1) + min);
  let secArr = Array.from(String(secNum), Number);

  // if (hasDuplicates(secArr)) {
  //   while (hasDuplicates(secArr)) {
  //     secNum = Math.floor(Math.random() * (max - min + 1) + min);
  //     secArr = Array.from(String(secNum), Number);
  //   }
  // }

  return secNum;
}

let secretNumber = secretNumberFunction(1000, 9999);
const secretArray = Array.from(String(secretNumber), Number);

let guessCounter = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  const guessArray = Array.from(String(guess), Number);

  console.log(`--- RESULTS OF GUESS ${guessCounter + 1} --- `);
  for (let i = 0; i < 4; i++) {
    if (JSON.stringify(secretArray) == JSON.stringify(guessArray)) {
      console.log(
        `The number was ${secretNumber}, you got it in just ${guessCounter+1} tries!`
      );
      break;
    }
    if (secretArray.includes(guessArray[i])) {
      if (guessArray[i] === secretArray[i]) {
        console.log(
          `${guessArray[i]} is in the number and in the correct spot.`
        );
      } else {
        console.log(`${guessArray[i]} is in the number but in the wrong spot.`);
      }
    } else {
      console.log(`${guessArray[i]} is not in the number.`);
    }
  }
  guessCounter++;
});

// document.querySelector(".enter").addEventListener("click", function () {});
