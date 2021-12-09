// create an object/class Gameboard containing key:value pairs
const GameboardArray = {};

// players click buttons with X or O to play their turn
let playerIcon = "";

const xButton = document.querySelector("#X");
xButton.addEventListener("click", (e) => {
  playerIcon = "x";
  console.log(e);
});

const oButton = document.querySelector("#O");
oButton.addEventListener("click", (e) => {
  playerIcon = "o";
  console.log(e);
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
    GameboardArray[squareClicked.id] = playerIcon;
  }

  console.log({ GameboardArray });
});

// after each turn check object to see if 3 in a row contain the same
function checkForWinner() {
  for (cell in GameboardArray) {
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
