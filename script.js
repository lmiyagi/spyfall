const Pages = {
    Players: 'players',
    Game: 'game'
}

const sectionNumOfPlayers = document.getElementById("sectionNumOfPlayers");
const btnAddPlayer = document.getElementById("btnAddPlayer");
const btnRemovePlayer = document.getElementById("btnRemovePlayer");
const textNumOfPlayers = document.getElementById("textNumOfPlayers");
const btnOkPlayers = document.getElementById("btnOkPlayers");
const mainModal = $('#mainModal');
const mainModalTitle = $('#mainModalTitle');
const mainModalText = $('#mainModalText');


// Number of players ----------------------------------------
var numOfPlayers = 0;

btnAddPlayer.addEventListener("click", function() {
    numOfPlayers++;
    displayNumOfPlayers(numOfPlayers);
});

btnRemovePlayer.addEventListener("click", function() {
    numOfPlayers--;
    displayNumOfPlayers(numOfPlayers);
});

btnOkPlayers.addEventListener("click", function() {
    showModal("Title test", "Test Test Test Test Test Test Test Test Test");
});

function displayNumOfPlayers(numOfPlayers) {
    textNumOfPlayers.innerHTML = numOfPlayers;
}
// ----------------------------------------------------------

function getLocationsFromFile() {
    const req = new XMLHttpRequest();
    req.open('GET', window.location.protocol + '//' + window.location.host + '/locations.txt', false);
    req.send();
 
    return req.responseText.split(/[\n\r]+/);
 }

 function showModal(title, text) {

    mainModalTitle.innerHTML = title
    mainModalText.innerHTML = text
    mainModal.modal('show')

 }