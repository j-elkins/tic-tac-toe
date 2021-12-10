// create an object/class Gameboard containing key:value pairs
let GameboardArray = {};

// players click buttons with X or O to play their turn
let playerIcon = "";
let playerName = "";
let iconClass = "";

const xButton = document.querySelector("#xBtn");
xButton.addEventListener("click", (e) => {
  playerIcon = "X";
  playerName = "Player One";
  iconClass = "playerOneIconStyle";
});

const oButton = document.querySelector("#oBtn");
oButton.addEventListener("click", (e) => {
  playerIcon = "O";
  playerName = "Player Two";
  iconClass = "playerTwoIconStyle";
});

// click to play turn: mark square X or O
const gameboard = document.querySelector("#gameboard");
gameboard.addEventListener("click", (event) => {
  let squareClicked = event.target;

  if (squareClicked.textContent == "") {
    squareClicked.textContent = playerIcon;
    squareClicked.classList.add(iconClass);
    GameboardArray[squareClicked.id] = playerName;
  }

  console.log({ GameboardArray });
  checkForWinner();
});

// after each turn check object to see if 3 in a row contain the same
let playerWhoWon = "";

function checkForWinner() {
  // check for winners in rows
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["A1"] &&
    GameboardArray["A0"] == GameboardArray["A2"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    console.log(GameboardArray["A0"] + "is the winner");
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["B0"] &&
    GameboardArray["B0"] == GameboardArray["B1"] &&
    GameboardArray["B0"] == GameboardArray["B2"]
  ) {
    playerWhoWon = GameboardArray["B0"];
    console.log(GameboardArray["B0"] + "is the winner");
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["C1"] &&
    GameboardArray["C0"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["C0"];
    console.log(GameboardArray["C0"] + "is the winner");
    announceWinner(playerWhoWon);
  }

  // check for winners in columns
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B0"] &&
    GameboardArray["C0"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    console.log(GameboardArray["A0"] + " is the winner");
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["A1"] &&
    GameboardArray["A1"] == GameboardArray["B1"] &&
    GameboardArray["A1"] == GameboardArray["C1"]
  ) {
    playerWhoWon = GameboardArray["A1"];
    console.log(GameboardArray["A1"] + " is the winner");
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["A2"] &&
    GameboardArray["A2"] == GameboardArray["B2"] &&
    GameboardArray["A2"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["A2"];
    console.log(GameboardArray["A2"] + " is the winner");
    announceWinner(playerWhoWon);
  }

  // check for winner diagonally
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B1"] &&
    GameboardArray["A0"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    console.log(GameboardArray["A0"] + " is the winner");
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["B1"] &&
    GameboardArray["C0"] == GameboardArray["A2"]
  ) {
    playerWhoWon = GameboardArray["C0"];
    console.log(GameboardArray["C0"] + " is the winner");
    announceWinner(playerWhoWon);
  }
}

function itsATie() {
  // if board contains values in all 9 squares and there's no winner
  // announceTie()
}

// if 3 consecutive squares contain the same, game ends
function announceWinner(winner) {
  const announcement = document.querySelector("#choices");
  announcement.textContent = "Congratulations! " + winner + " is the winner";
  announcement.classList.add("announcement");

  if (winner == "Player One") {
    announcement.classList.add("playerOneWins");
    gameboard.classList.add("playerOneWins");
  }

  if (winner == "Player Two") {
    announcement.classList.add("playerTwoWins");
    gameboard.classList.add("playerTwoWins");
  }
}

// if all squares filled but no winner, announce tie

// click 'start' button to begin
// players enter names into input field (or prompt?)

// keep score on the side
// add a 'play again' button
// eventually: play against computer
// chooses randomly from empty remaining squares
// eventually: choose randomly who starts? and/or previous winner?
// eventually: how to make it choose "smarter"
