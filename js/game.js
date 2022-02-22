function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < gameData.length; i++) {
    for (let j = 0; j < gameData[i].length; j++) {
      gameData[i][j] = 0;

      const gameFieldElement = gameFieldElements[gameBoardIndex];
      gameFieldElement.textContent = "";
      gameFieldElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    showError("You need to enter valid player names!");
    return;
  }

  resetGame();

  gameSection.style.display = "block";
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function closeGameError() {
  gameErrorModal.style.display = "none";
  backdrop.style.display = "none";
}

function checkForWinner() {
  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  activePlayerNameElement.textContent = players[activePlayer].name;
  currentRound++;
}

function selectGameField(event) {
  const gameField = event.target;

  if (gameField.classList.contains("disabled")) {
    showError("Please select an empty field!");
    return;
  } else if (isGameOver) {
    showError("Please start a new game!");
    return;
  }

  gameField.textContent = players[activePlayer].symbol;
  gameField.classList.add("disabled");

  gameData[gameField.dataset.row - 1][gameField.dataset.col - 1] =
    activePlayer + 1;

  const winnerId = checkForWinner();
  if (winnerId !== 0) {
    endGame(winnerId);
    return;
  }

  switchPlayer();
}

function endGame(winnerId) {
  const winnerNameElement = document.getElementById("winner-name");

  isGameOver = true;
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    winnerNameElement.textContent = players[winnerId - 1].name;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}

function showError(errorText) {
  gameErrorModal.style.display = "block";
  gameErrorHeader.textContent = errorText;
  backdrop.style.display = "block";
}
