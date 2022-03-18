"use strict";

document.querySelector("body").style.backgroundColor = "#222";

for (let i = 0; i < 5; i++) {
  document.querySelector(`.gue${i}`).style.color = "white";
}

document.querySelector(".left").style.color = "white";

const secretArray = [0, 7, 26, 63, 124];
document.querySelector(
  ".tries1"
).textContent = `Today's Starting Number is ${secretArray[0]}.`;

let guessCounter = 0;
let guess = "";
let gArray = [];
let gArray2 = [];

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  guess = document.querySelector(".guess").value;
  gArray = guess.split(" ");
  gArray2 = gArray.map((i) => Number(i));

  if (gArray.length > 5) {
    gArray.length = 5
  }
  
  for (let i = 0; i < 5; i++) {
    if (String(gArray2[i]) === "NaN") {
      console.log(gArray2[i]);
      document.querySelector(".tries").textContent = "No alphabets allowed 😉";
      gArray2.splice(0, gArray2.length);
      console.log(gArray2);
    }
  }

  if (gArray2.length === 5) {
    if (guessCounter === 0) {
      for (let i = 0; i < gArray2.length; i++) {
        document.querySelector(`.guesses${i}`).textContent = gArray2[i];
      }
    } else if (guessCounter === 1) {
      for (let i = 0; i < gArray2.length; i++) {
        document.querySelector(`.guesses${i + 5}`).textContent = gArray2[i];
      }
    } else if (guessCounter === 2) {
      for (let i = 0; i < gArray2.length; i++) {
        document.querySelector(`.guesses${i + 10}`).textContent = gArray2[i];
      }
    } else if (guessCounter === 3) {
      for (let i = 0; i < gArray2.length; i++) {
        document.querySelector(`.guesses${i + 15}`).textContent = gArray2[i];
      }
    } else if (guessCounter === 4) {
      for (let i = 0; i < gArray2.length; i++) {
        document.querySelector(`.guesses${i + 20}`).textContent = gArray2[i];
      }
    }

    console.log(`--- RESULTS OF GUESS ${guessCounter + 1} --- `);

    for (let i = 0; i < 5; i++) {
      if (JSON.stringify(secretArray) == JSON.stringify(gArray2)) {
        document.querySelector(`.gue${guessCounter}`).style.color = "#00FF00	";
        document.querySelector(".tries").textContent = `You got it in ${
          guessCounter + 1
        } tries! ✅`;

        break;
      }
      if (secretArray.includes(gArray2[i])) {
        if (gArray2[i] === secretArray[i]) {

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

    if (JSON.stringify(secretArray) != JSON.stringify(gArray2)) {
      document.querySelector(".tries").textContent = `${
        5 - guessCounter
      } tries left!`;

      if (guessCounter === 5) {
        document.querySelector(
          ".tries"
        ).textContent = `❌ Sorry, you lost. Today's series was ${secretArray}`;
      }
    }
  }

  gArray2.splice(0, gArray2.length);
});
