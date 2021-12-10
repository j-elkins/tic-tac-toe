// create an object/class Gameboard containing key:value pairs
let GameboardArray = {};

// players click buttons with X or O to play their turn
let playerIcon = "";
let iconClass = "";

const xButton = document.querySelector("#xBtn");
xButton.addEventListener("click", (e) => {
  playerIcon = "X";
  iconClass = "playerOneIconStyle";
});

const oButton = document.querySelector("#oBtn");
oButton.addEventListener("click", (e) => {
  playerIcon = "O";
  iconClass = "playerTwoIconStyle";
});

// click to play turn: mark square X or O
const gameboard = document.querySelector("#gameboard");
gameboard.addEventListener("click", (event) => {
  let squareClicked = event.target;

  if (squareClicked.textContent == "") {
    squareClicked.textContent = playerIcon;
    squareClicked.classList.add(iconClass);
    GameboardArray[squareClicked.id] = playerIcon;
  }

  console.log({ GameboardArray });
  checkForWinner();
});

// hardcode to test...

// GameboardArray = {
//   A0: "X",
//   B0: "X",
//   C0: "X",
// };

// after each turn check object to see if 3 in a row contain the same
function checkForWinner() {
  // check for winners in rows
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["A1"] &&
    GameboardArray["A0"] == GameboardArray["A2"]
  ) {
    console.log(GameboardArray["A0"] + "is the winner");
  }

  if (
    GameboardArray["B0"] &&
    GameboardArray["B0"] == GameboardArray["B1"] &&
    GameboardArray["B0"] == GameboardArray["B2"]
  ) {
    console.log(GameboardArray["B0"] + "is the winner");
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["C1"] &&
    GameboardArray["C0"] == GameboardArray["C2"]
  ) {
    console.log(GameboardArray["C0"] + "is the winner");
  }

  // check for winners in columns
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B0"] &&
    GameboardArray["C0"]
  ) {
    console.log(GameboardArray["A0"] + " is the winner");
  }

  if (
    GameboardArray["A1"] &&
    GameboardArray["A1"] == GameboardArray["B1"] &&
    GameboardArray["A1"] == GameboardArray["C1"]
  ) {
    console.log(GameboardArray["A1"] + " is the winner");
  }

  if (
    GameboardArray["A2"] &&
    GameboardArray["A2"] == GameboardArray["B2"] &&
    GameboardArray["A2"] == GameboardArray["C2"]
  ) {
    console.log(GameboardArray["A2"] + " is the winner");
  }

  // check for winner diagonally
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B1"] &&
    GameboardArray["A0"] == GameboardArray["C2"]
  ) {
    console.log(GameboardArray["A0"] + "is the winner");
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["B1"] &&
    GameboardArray["C0"] == GameboardArray["A2"]
  ) {
    console.log(GameboardArray["C0"] + "is the winner");
  }
}

checkForWinner();
// check each row: if first cell is empty, move to next row b0

// if 3 consecutive squares contain the same, game ends

// congratulate the winner (or tie)

// click 'start' button to begin
// players enter names into input field (or prompt?)

// keep score on the side
// add a 'play again' button
// eventually: play against computer
// chooses randomly from empty remaining squares
// eventually: choose randomly who starts? and/or previous winner?
// eventually: how to make it choose "smarter"
