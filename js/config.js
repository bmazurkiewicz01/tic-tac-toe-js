function openPlayerConfig(event) {
    playerId = +event.target.dataset.playerid;

    configModal.style.display = "block";
    backdrop.style.display = "block";
}

function closePlayerConfig() {
    configModal.style.display = "none";
    backdrop.style.display = "none";

    configForm.firstElementChild.classList.remove("error");
    errorOutputElement.textContent = "";
    configForm.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const newPlayerName = data.get("playername").trim();
    
    if(!newPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorOutputElement.textContent = "Please enter a valid name."
        return;
    }

    const playerName = document.getElementById(`player-${playerId}-name`);
    playerName.textContent = newPlayerName;
    players[playerId - 1].name = newPlayerName;
    closePlayerConfig();
}