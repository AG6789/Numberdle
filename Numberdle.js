"use strict";

document.querySelector("body").style.backgroundColor = "#222";

for (let i = 0; i < 5; i++) {
  document.querySelector(`.gue${i}`).style.color = "white";
}

document.querySelector(".left").style.color = "white";

const secretArray = [0, 7, 26, 63, 124];
document.querySelector(".tries1").textContent = `Today's starting number is ${secretArray[0]}.`

let guessCounter = 0;
let guessArray = [];
const guesss = document.querySelector(".guess").textContent;

document.querySelector(".check").addEventListener("click", function () {
   guessArray.push(Number(document.querySelector(".guess").value));

 
  if (guessCounter === 0) {
    document.querySelector(`.guesses${guessArray.length - 1}`).textContent =
      guessArray[guessArray.length - 1];
  } else if (guessCounter === 1) {
    document.querySelector(`.guesses${guessArray.length + 4}`).textContent =
      guessArray[guessArray.length - 1];
  } else if (guessCounter === 2) {
    document.querySelector(`.guesses${guessArray.length + 9}`).textContent =
      guessArray[guessArray.length - 1];
  } else if (guessCounter === 3) {
    document.querySelector(`.guesses${guessArray.length + 14}`).textContent =
      guessArray[guessArray.length - 1];
  } else if (guessCounter === 4) {
    document.querySelector(`.guesses${guessArray.length + 19}`).textContent =
      guessArray[guessArray.length - 1];
  }


  if (guessArray.length === 5) {
    console.log(`--- RESULTS OF GUESS ${guessCounter + 1} --- `);

    for (let i = 0; i < 5; i++) {
      if (JSON.stringify(secretArray) == JSON.stringify(guessArray)) {
        document.querySelector(`.gue${guessCounter}`).style.color = "#00FF00	";
        document.querySelector(".tries").textContent = `You got it in ${
          guessCounter + 1
        } tries!`;

        break;
      }
      if (secretArray.includes(guessArray[i])) {
        if (guessArray[i] === secretArray[i]) {
          console.log(
            `${guessArray[i]} is in the series and in the correct spot.`
          );

          if (guessCounter === 0) {
            document.querySelector(`.guesses${i}`).style.color = "#00FF00";
          } else if (guessCounter === 1) {
            document.querySelector(`.guesses${i + 5}`).style.color = "#00FF00";
          } else if (guessCounter === 2) {
            document.querySelector(`.guesses${i + 10}`).style.color = "#00FF00";
          } else if (guessCounter === 3) {
            document.querySelector(`.guesses${i + 15}`).style.color = "#00FF00";
          } else if (guessCounter === 4) {
            document.querySelector(`.guesses${i + 19}`).style.color = "#00FF00";
          }
        } else {
          console.log(
            `${guessArray[i]} is in the series but in the wrong spot.`
          );

          if (guessCounter === 0) {
            document.querySelector(`.guesses${i}`).style.color = "#FFFF00	";
          } else if (guessCounter === 1) {
            document.querySelector(`.guesses${i + 5}`).style.color = "#FFFF00	";
          } else if (guessCounter === 2) {
            document.querySelector(`.guesses${i + 10}`).style.color = "#FFFF00	";
          } else if (guessCounter === 3) {
            document.querySelector(`.guesses${i + 15}`).style.color = "#FFFF00	";
          } else if (guessCounter === 4) {
            document.querySelector(`.guesses${i + 19}`).style.color = "#FFFF00";
          }
        }
      } else {
        console.log(`${guessArray[i]} is not in the series.`);

        if (guessCounter === 0) {
          document.querySelector(`.guesses${i}`).style.color = "#FF0000		";
        } else if (guessCounter === 1) {
          document.querySelector(`.guesses${i + 5}`).style.color = "#FF0000		";
        } else if (guessCounter === 2) {
          document.querySelector(`.guesses${i + 10}`).style.color = "#FF0000		";
        } else if (guessCounter === 3) {
          document.querySelector(`.guesses${i + 15}`).style.color = "#FF0000		";
        } else if (guessCounter === 4) {
          document.querySelector(`.guesses${i + 19}`).style.color = "#FF0000		";
        }
      }
    }
    guessCounter++;

    if (JSON.stringify(secretArray) != JSON.stringify(guessArray)) {
      document.querySelector(".tries").textContent = `${
        5 - guessCounter
      } tries left!`;

      if (guessCounter === 5) {
        document.querySelector(
          ".tries"
        ).textContent = `Sorry, you lost :( Today's series was ${secretArray})`;
      }
    }

    guessArray.splice(0, guessArray.length);
  }
});


