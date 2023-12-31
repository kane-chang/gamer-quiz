// TODO variables - html selectors
var highscoreList = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")


// TODO function - retrieve and display highscore from local storage
function displayHighscores() {
    while (highscoreList.firstChild) {
        highscoreList.removeChild(highscoreList.firstChild)
    };

    if (localStorage.getItem("scores") != null) {
        var highscores = JSON.parse(localStorage.getItem("scores"))
        // console.log(highscores);

        for (let i = 0; i < highscores.length; i++) {
            var newScorer = document.createElement("li")
            newScorer.textContent = highscores[i]
            highscoreList.appendChild(newScorer)
        };
    };
};

displayHighscores()


// TODO function - clear highscore button
clearButton.addEventListener("click", clearHighscore)

function clearHighscore() {
    localStorage.clear()
    displayHighscores()
}
