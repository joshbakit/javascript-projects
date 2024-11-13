const board = document.querySelector(".board");
const square = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const restartGameBtn = document.querySelector(".reset-game-btn");

const player = ["X", "O"];

let currentPlayer = player[0];

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    if (square[i].textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }

    square[i].textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
      message.textContent = `game over! ${currentPlayer} wins the game. restart the game`;
      return;
    }

    if (checkTieResult()) {
      message.textContent = `game tied! please restart`;
      return;
    }

    currentPlayer = currentPlayer === player[0] ? player[1] : player[0];

    message.textContent = `Player ${currentPlayer}'s turn`;
  });
}

function checkWinner() {
  for (let i = 0; i < winningPattern.length; i++) {
    const [a, b, c] = winningPattern[i];
    if (
      square[a].textContent === currentPlayer &&
      square[b].textContent === currentPlayer &&
      square[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTieResult() {
  for (let i = 0; i < square.length; i++) {
    if (square[i].textContent === "") {
      return false;
    }
  }

  return true;
}

function restartGame() {
  for (let i = 0; i < square.length; i++) {
    square[i].textContent = "";
  }

  message.textContent = `X's turn`;
  currentPlayer = player[0];
}

restartGameBtn.addEventListener("click", () => {
  restartGame();
});
