let playerId = 0;
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

const modal = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const configForm = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

const editFirstPlayerBtn = document.getElementById("edit-player-1");
const editSecondPlayerBtn = document.getElementById("edit-player-2");
const cancelBtn = document.getElementById("cancel-btn");

backdrop.addEventListener("click", closePlayerConfig);
cancelBtn.addEventListener("click", closePlayerConfig)

editFirstPlayerBtn.addEventListener("click", openPlayerConfig);
editSecondPlayerBtn.addEventListener("click", openPlayerConfig);

configForm.addEventListener("submit", savePlayerConfig);
