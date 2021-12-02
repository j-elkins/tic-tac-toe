// playerOne chooses X or O

// playerOneTurn: select a square
const gameboard = document.querySelector("#gameboard");
gameboard.addEventListener("click", (event) => {
  console.log(event.target.id);
  //   let squareID = event.target.id;
  let squareClicked = document.querySelector(`#${event.target.id}`);
  squareClicked.textContent = "X";
});
// on click: add chosen character to square innerText / textContent
// if (square is empty) {

// }
// if (playerChoice === X) {
// change innerText to X
// }
// if (playerChoice === O) {
// change innerText to O
// }
// assign value of 1 to that square for playerOne
// assign value of 2 to that square for playerTwo

// if 3 consecutive squares contain the same (X or O) - that player wins

// eventually: play against computer
// chooses randomly from empty remaining squares
// eventually: choose randomly who starts? and/or previous winner?
// eventually: how to make it choose "smarter" ?
