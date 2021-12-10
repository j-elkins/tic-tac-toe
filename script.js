// create an object/class Gameboard containing key:value pairs
const GameboardArray = {};

// players click buttons with X or O to play their turn
let playerIcon = "";
let iconStyle = "";

const xButton = document.querySelector("#X");
xButton.addEventListener("click", (e) => {
  playerIcon = "X";
  iconStyle =
    "text-shadow: 0 0 4px rgb(210, 1, 116), 0 0 7px rgb(255, 0, 174);";
});

const oButton = document.querySelector("#O");
oButton.addEventListener("click", (e) => {
  playerIcon = "O";
  iconStyle =
    "text-shadow: 0 0 4px rgb(250, 129, 0), 0 0 7px rgb(255, 183, 0), 0 0 7px rgb(255, 183, 0)";
});

// select a square, click to play turn
// keys are square ids, values are "" until filled with X or O
// at the start of the game all values are ""
const gameboard = document.querySelector("#gameboard");
gameboard.addEventListener("click", (event) => {
  // console.log(event.target.id);
  let squareClicked = event.target;

  if (squareClicked.textContent == "") {
    squareClicked.textContent = playerIcon;
    squareClicked.style.cssText = iconStyle;
    GameboardArray[squareClicked.id] = playerIcon;
  }

  console.log({ GameboardArray });
  // checkForWinner();
});

// after each turn check object to see if 3 in a row contain the same
function checkForWinner() {
  for (cell in GameboardArray) {
    // check each row: if first cell not empty, move to next column a2
    if (a1 !== "") {
      if (a2 !== "") {
        if (a3 !== "") {
          // check if a1, a2, a3 have the same mark
          // if (a1 === a2 === a3) {
          congratulateWinner();
          // } // else move on to b1
        }
      } // else if a2 empty, move to b1
      // if a1 empty, move to next row b1
    } else if (b1 !== "") {
      if (b2 !== "") {
        if (b3 !== "") {
          // check if b1, b2, b3 have the same mark
          // if (b1 === b2 === b3) {
          congratulateWinner();
          // } // else move on to c1
        }
      } // else if b2 empty, move to c1
      // if b1 empty, move to next row c1
    } else if (c1 !== "") {
      if (c2 !== "") {
        if (c3 !== "") {
          // check if c1, c2, c3 have the same mark
          // if (c1 === c2 === c3) {
          congratulateWinner();
          // } // else back to a1 and check each column:
        }
      }
    }

    if (a1) {
    }
  }
}

// if 3 consecutive squares contain the same, game ends

// congratulate the winner (or tie)

// click 'start' button to begin
// players enter names into input field (or prompt?)

// keep score on the side
// add a 'play again' button
// eventually: play against computer
// chooses randomly from empty remaining squares
// eventually: choose randomly who starts? and/or previous winner?
// eventually: how to make it choose "smarter" ?
