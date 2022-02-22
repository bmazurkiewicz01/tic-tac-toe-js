let playerId = 0;
let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
];

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const configModal = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const configForm = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");
const gameSection = document.getElementById("game-section");
const gameErrorModal = document.getElementById("game-error");
const gameErrorHeader = document.querySelector("#game-error h2");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editFirstPlayerBtn = document.getElementById("edit-player-1");
const editSecondPlayerBtn = document.getElementById("edit-player-2");
const cancelBtn = document.getElementById("cancel-btn");
const starNewGameBtn = document.getElementById("btn-start-game");
const okErrorButton = document.getElementById("ok-button");

const gameFieldElements = document.querySelectorAll("#game-board li");


backdrop.addEventListener("click", closePlayerConfig);
cancelBtn.addEventListener("click", closePlayerConfig)

editFirstPlayerBtn.addEventListener("click", openPlayerConfig);
editSecondPlayerBtn.addEventListener("click", openPlayerConfig);

configForm.addEventListener("submit", savePlayerConfig);

starNewGameBtn.addEventListener("click", startNewGame);
okErrorButton.addEventListener("click", closeGameError);
backdrop.addEventListener("click", closeGameError);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener("click", selectGameField);
}
