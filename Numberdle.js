"use strict";

// User Guess
// const guess = Number(document.querySelector(".guess").value);

const guess = prompt("What is your guess?");
const guessArray = Array.from(String(guess), Number);

// Elimination of Duplicates

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

// Secret Number
function secretNumberFunction(min, max) {
  // min and max included
  let secNum = Math.floor(Math.random() * (max - min + 1) + min);
  let secArr = Array.from(String(secNum), Number);

  if (hasDuplicates(secArr)) {
    while (hasDuplicates(secArr)) {
      secNum = Math.floor(Math.random() * (max - min + 1) + min);
      secArr = Array.from(String(secNum), Number);
    }
  }

  return secNum;
}

let secretNumber = secretNumberFunction(1000, 9999);
const secretArray = Array.from(String(secretNumber), Number);

for (let i = 0; i < 4; i++) {
  if (secretArray.includes(guessArray[i])) {
    if (guessArray[i] === secretArray[i]) {
      console.log(`${guessArray[i]} is in the number and in the correct spot.`);
    } else {
      console.log(`${guessArray[i]} is in the number but in the wrong spot.`);
    }
  } else {
    console.log(`${guessArray[i]} is not in the number.`);
  }
}

console.log(guessArray, secretArray);

// document.querySelector(".enter").addEventListener("click", function () {});
