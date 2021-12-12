// create Gameboard object to contain key:value pairs
let GameboardArray = {};
let turnCount = 0;

const gameboard = document.querySelector("#gameboard");

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

  gameboard.classList.remove("disabled");
});

const oButton = document.querySelector("#oBtn");
oButton.addEventListener("click", (e) => {
  playerIcon = "O";
  iconClass = "playerTwoIconStyle";

  let input = document.querySelector("#playerTwoName");
  playerName = input.value;

  gameboard.classList.remove("disabled");
});

// click to play turn: mark square X or O
gameboard.addEventListener("click", (event) => {
  let squareClicked = event.target;

  if (squareClicked.textContent == "") {
    squareClicked.textContent = playerIcon;
    squareClicked.classList.add(iconClass);

    GameboardArray[squareClicked.id] = playerName;
    turnCount++;
  }

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
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["B0"] &&
    GameboardArray["B0"] == GameboardArray["B1"] &&
    GameboardArray["B0"] == GameboardArray["B2"]
  ) {
    playerWhoWon = GameboardArray["B0"];
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["C1"] &&
    GameboardArray["C0"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["C0"];
    announceWinner(playerWhoWon);
  }

  // check for winners in columns
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B0"] &&
    GameboardArray["A0"] == GameboardArray["C0"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["A1"] &&
    GameboardArray["A1"] == GameboardArray["B1"] &&
    GameboardArray["A1"] == GameboardArray["C1"]
  ) {
    playerWhoWon = GameboardArray["A1"];
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["A2"] &&
    GameboardArray["A2"] == GameboardArray["B2"] &&
    GameboardArray["A2"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["A2"];
    announceWinner(playerWhoWon);
  }

  // check for winner diagonally
  if (
    GameboardArray["A0"] &&
    GameboardArray["A0"] == GameboardArray["B1"] &&
    GameboardArray["A0"] == GameboardArray["C2"]
  ) {
    playerWhoWon = GameboardArray["A0"];
    announceWinner(playerWhoWon);
  }

  if (
    GameboardArray["C0"] &&
    GameboardArray["C0"] == GameboardArray["B1"] &&
    GameboardArray["C0"] == GameboardArray["A2"]
  ) {
    playerWhoWon = GameboardArray["C0"];
    announceWinner(playerWhoWon);
  }

  itsATie();
}

// if board contains values in all 9 squares and there's no winner, it's a tie
function itsATie() {
  if (turnCount === 9) {
    announceTie();
  }
}

// announce the winner based on which symbol the consecutive squares contain
const announcement = document.querySelector("#choices");
let whoWon = "";

function announceWinner(winner) {
  announcement.textContent =
    "Congratulations! \r\n " + winner + " is the winner";
  announcement.classList.add("announcement");

  if (playerIcon == "X") {
    announcement.classList.add("playerOneWins");
    gameboard.classList.add("playerOneWins");
    whoWon = "playerOneWins";
  }

  if (playerIcon == "O") {
    announcement.classList.add("playerTwoWins");
    gameboard.classList.add("playerTwoWins");
    whoWon = "playerTwoWins";
  }

  addPlayAgainButton(whoWon);
}

// announce tie if there's no winner
function announceTie() {
  announcement.textContent = "It's a tie...";
  announcement.classList.add("announcement");

  whoWon = "itsATie";
  addPlayAgainButton(whoWon);
}

// create 'Play again?' button to display at game end
function addPlayAgainButton(winningPlayer) {
  const playAgain = document.querySelector("#playAgain");
  const newGameBtn = document.createElement("div");
  newGameBtn.classList.add("newGame");
  newGameBtn.classList.add(winningPlayer);
  newGameBtn.textContent = "Play again?";
  newGameBtn.addEventListener("click", () => {
    document.location.reload();
  });

  playAgain.appendChild(newGameBtn);
}

// eventually: play against computer
// chooses randomly from empty remaining squares (easy)
// eventually: how to make it choose "smarter" (hard)
