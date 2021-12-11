// create Gameboard object to contain key:value pairs
let GameboardArray = {};

// players click buttons with X or O to play their turn
let playerIcon = "";
let playerName = "";
let iconClass = "";

const xButton = document.querySelector("#xBtn");
xButton.addEventListener("click", (e) => {
  playerIcon = "X";
  iconClass = "playerOneIconStyle";

  let input = document.querySelector("#playerOneName");
  playerName = input.value;
});

const oButton = document.querySelector("#oBtn");
oButton.addEventListener("click", (e) => {
  playerIcon = "O";
  iconClass = "playerTwoIconStyle";

  let input = document.querySelector("#playerTwoName");
  playerName = input.value;
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

  // console.log({ GameboardArray });
  checkForWinner();
});

// after each turn check object to see if there's a winner
// if 3 consecutive squares contain the same symbol, game ends
let playerWhoWon = "";

function checkForWinner() {
  // check for winners in rows
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["A1"] &&
    GameboardArray["A0"] == GameboardArray["A2"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    // console.log(GameboardArray["A0"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  if (
    GameboardArray["B0"] &&
    GameboardArray["B0"] == GameboardArray["B1"] &&
    GameboardArray["B0"] == GameboardArray["B2"]
  ) {
    playerWhoWon = GameboardArray["B0"];
    // console.log(GameboardArray["B0"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["C1"] &&
    GameboardArray["C0"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["C0"];
    // console.log(GameboardArray["C0"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  // check for winners in columns
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B0"] &&
    GameboardArray["A0"] == GameboardArray["C0"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    // console.log(GameboardArray["A0"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  if (
    GameboardArray["A1"] &&
    GameboardArray["A1"] == GameboardArray["B1"] &&
    GameboardArray["A1"] == GameboardArray["C1"]
  ) {
    playerWhoWon = GameboardArray["A1"];
    // console.log(GameboardArray["A1"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  if (
    GameboardArray["A2"] &&
    GameboardArray["A2"] == GameboardArray["B2"] &&
    GameboardArray["A2"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["A2"];
    // console.log(GameboardArray["A2"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  // check for winner diagonally
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B1"] &&
    GameboardArray["A0"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    // console.log(GameboardArray["A0"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["B1"] &&
    GameboardArray["C0"] == GameboardArray["A2"]
  ) {
    playerWhoWon = GameboardArray["C0"];
    // console.log(GameboardArray["C0"] + " is the winner");
    announceWinner(playerWhoWon);
    gameboard.classList.add("disabled");
  }
}

function itsATie() {
  if (
    GameboardArray["AO"] &&
    GameboardArray["A1"] &&
    GameboardArray["A2"] &&
    GameboardArray["B0"] &&
    GameboardArray["B1"] &&
    GameboardArray["B2"] &&
    GameboardArray["C0"] &&
    GameboardArray["C1"] &&
    GameboardArray["C2"]
  ) {
    console.log("All squares full");
  }
  // if board contains values in all 9 squares and there's no winner
  // announceTie()
}

itsATie();

// announce the winner based on which symbol the consecutive squares contain
function announceWinner(winner) {
  const announcement = document.querySelector("#choices");
  announcement.textContent =
    "Congratulations! \r\n " + winner + " is the winner";
  announcement.classList.add("announcement");

  // add a 'play again' button
  const playAgain = document.querySelector("#playAgain");
  const newGameBtn = document.createElement("div");
  newGameBtn.classList.add("newGame");
  newGameBtn.textContent = "Play again?";
  newGameBtn.addEventListener("click", () => {
    document.location.reload();
  });
  playAgain.appendChild(newGameBtn);

  if (playerIcon == "X") {
    announcement.classList.add("playerOneWins");
    gameboard.classList.add("playerOneWins");
    newGameBtn.classList.add("playerOneWins");
  }

  if (playerIcon == "O") {
    announcement.classList.add("playerTwoWins");
    gameboard.classList.add("playerTwoWins");
    newGameBtn.classList.add("playerTwoWins");
  }
}

// eventually: play against computer
// chooses randomly from empty remaining squares
// eventually: choose randomly who starts? and/or previous winner?
// eventually: how to make it choose "smarter"
