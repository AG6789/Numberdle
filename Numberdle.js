"use strict";

document.querySelector("body").style.backgroundColor = "#222";

for (let i = 0; i < 5; i++) {
  document.querySelector(`.gue${i}`).style.color = "white";
}

document.querySelector(".left").style.color = "white";

const secretArray = [1, 1, 2, 3, 5];
document.querySelector(
  ".tries1"
).textContent = `Today's Starting Number is ${secretArray[0]}.`;

let guessCounter = 0;
let guess = "";
let gArray = [];
let gArray2 = [];
let counts = [1, 1, 1, 1, 1];
let count = 0;

function countInArray(array, what) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === what) {
      count++;
    }
  }
  return count;
}

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  guess = document.querySelector(".guess").value;
  gArray = guess.split(" ");
  if (gArray.length > 5) {
    gArray.length = 5;
  }
  gArray2 = gArray.map((i) => Number(i));

  for (let i = 0; i < 5; i++) {
    if (String(gArray2[i]) === "NaN") {
      console.log(gArray2[i]);
      document.querySelector(".tries").textContent = "No alphabets allowed 😉";
      gArray2.splice(0, gArray2.length);
      console.log(gArray2);
    }
  }

  for (let i = 0; i < 5; i++) {
    if (countInArray(secretArray, secretArray[i]) !== 1) {
      counts[i] = countInArray(secretArray, secretArray[i]);
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
            document.querySelector(`.guesses${i + 20}`).style.color = "#00FF00";
          }
        } else {
          if (
            counts[i] === countInArray(gArray2, gArray2[i]) ||
            counts[i] > countInArray(gArray2, gArray2[i])
          ) {
            if (guessCounter === 0) {
              document.querySelector(`.guesses${i}`).style.color = "#FFFF00	";
            } else if (guessCounter === 1) {
              console.log("nice");
              document.querySelector(`.guesses${i + 5}`).style.color =
                "#FFFF00	";
            } else if (guessCounter === 2) {
              document.querySelector(`.guesses${i + 10}`).style.color =
                "#FFFF00	";
            } else if (guessCounter === 3) {
              document.querySelector(`.guesses${i + 15}`).style.color =
                "#FFFF00	";
            } else if (guessCounter === 4) {
              document.querySelector(`.guesses${i + 20}`).style.color =
                "#FFFF00";
            }
          } else if (counts[i] < countInArray(gArray2, gArray2[i])) {
            for (let a = 0; a < 5; a++) {
              if (gArray2[a] === gArray2[i]) {
                count++;
                if (count <= counts[0]) {
                  if (guessCounter === 0) {
                    if (
                      document.querySelector(`.guesses${a}`).style.color !==
                      "rgb(0, 255, 0)"
                    ) {
                      document.querySelector(`.guesses${a}`).style.color =
                        "#FFFF00	";
                    }
                  } else if (guessCounter === 1) {
                    if (
                      document.querySelector(`.guesses${a + 5}`).style.color !==
                      "rgb(0, 255, 0)"
                    ) {
                      document.querySelector(`.guesses${a + 5}`).style.color =
                        "#FFFF00	";
                    }
                  } else if (guessCounter === 2) {
                    if (
                      document.querySelector(`.guesses${a + 10}`).style
                        .color !== "rgb(0, 255, 0)"
                    ) {
                      document.querySelector(`.guesses${a + 10}`).style.color =
                        "#FFFF00	";
                    }
                  } else if (guessCounter === 3) {
                    if (
                      document.querySelector(`.guesses${a + 15}`).style
                        .color !== "rgb(0, 255, 0)"
                    ) {
                      document.querySelector(`.guesses${a + 15}`).style.color =
                        "#FFFF00	";
                    }
                  } else if (guessCounter === 4) {
                    if (
                      document.querySelector(`.guesses${a + 20}`).style
                        .color !== "rgb(0, 255, 0)"
                    ) {
                      document.querySelector(`.guesses${a + 20}`).style.color =
                        "#FFFF00";
                    }
                  }
                }
              }
            }

            count = 0;

            if (guessCounter === 0) {
              if (
                document.querySelector(`.guesses${i}`).style.color !==
                  "rgb(255, 255, 0)" &&
                document.querySelector(`.guesses${i}`).style.color !==
                  "rgb(255, 0, 0)" &&
                document.querySelector(`.guesses${i}`).style.color !==
                  "rgb(0, 255, 0)"
              ) {
                document.querySelector(`.guesses${i}`).style.color = "#FF0000";
              }
            } else if (guessCounter === 1) {
              if (
                document.querySelector(`.guesses${i + 5}`).style.color !==
                  "rgb(255, 255, 0)" &&
                document.querySelector(`.guesses${i + 5}`).style.color !==
                  "rgb(255, 0, 0)" &&
                document.querySelector(`.guesses${i + 5}`).style.color !==
                  "rgb(0, 255, 0)"
              ) {
                document.querySelector(`.guesses${i + 5}`).style.color =
                  "#FF0000";
              }
            } else if (guessCounter === 2) {
              if (
                document.querySelector(`.guesses${i + 10}`).style.color !==
                  "rgb(255, 255, 0)" &&
                document.querySelector(`.guesses${i + 10}`).style.color !==
                  "rgb(255, 0, 0)" &&
                document.querySelector(`.guesses${i + 10}`).style.color !==
                  "rgb(0, 255, 0)"
              ) {
                document.querySelector(`.guesses${i + 10}`).style.color =
                  "#FF0000";
              }
            } else if (guessCounter === 3) {
              if (
                document.querySelector(`.guesses${i + 15}`).style.color !==
                  "rgb(255, 255, 0)" &&
                document.querySelector(`.guesses${i + 15}`).style.color !==
                  "rgb(255, 0, 0)" &&
                document.querySelector(`.guesses${i + 15}`).style.color !==
                  "rgb(0, 255, 0)"
              ) {
                document.querySelector(`.guesses${i + 15}`).style.color =
                  "#FF0000";
              }
            } else if (guessCounter === 4) {
              if (
                document.querySelector(`.guesses${i + 20}`).style.color !==
                  "rgb(255, 255, 0)" &&
                document.querySelector(`.guesses${i + 20}`).style.color !==
                  "rgb(255, 0, 0)" &&
                document.querySelector(`.guesses${i + 20}`).style.color !==
                  "rgb(0, 255, 0)"
              ) {
                document.querySelector(`.guesses${i + 20}`).style.color =
                  "#FF0000";
              }
            }
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
          document.querySelector(`.guesses${i + 20}`).style.color = "#FF0000		";
        }
      }
    }
    guessCounter++;

    if (JSON.stringify(secretArray) != JSON.stringify(gArray2)) {
      if (5 - guessCounter !== 1) {
        if (guessCounter <= 5) {
          document.querySelector(".tries").textContent = `${
            5 - guessCounter
          } tries left!`;
        }
      } else {
        document.querySelector(".tries").textContent = `1 try left!`;
      }

      if (guessCounter === 5) {
        document.querySelector(
          ".tries"
        ).textContent = `Aw man, ${secretArray.join(", ")} was the answer!`;
      }
    }
  } else if (gArray2.length < 5) {
    document.querySelector(".tries").textContent = "At least 5 numbers!";
  }

  gArray2.splice(0, gArray2.length);
});
