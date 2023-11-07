// TODO quiz questions:
function displayQuestion() {
    var questionList = {
        questionOne: {
            title: "What was Mario's original name?",
            choices: ["Wario", "Plumberman", "Jumpman", "Red M"]
        },
        questionTwo: {
            title: "What is thought to be the first video game?",
            choices: ["Pong", "Space Invaders", "Pac-Man", "Tetris"]
        }
    }

    var startScreen = document.querySelector("#start-screen")
    var questionEl = document.querySelector("#questions")
    var questionTitle = document.querySelector("#question-title")
    var choicesEl = document.querySelector("#choices")
    

    questionTitle.textContent = questionList.questionOne.title
    
    startScreen.removeAttribute('class:"start"')
    startScreen.setAttribute("class", "hide")

    questionEl.removeAttribute('class:"hide"')
    questionEl.setAttribute("class", "start")


    
}

// TODO make a timer that countdowns when start quiz button is clicked

var timeEl = document.getElementById('time')

function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      timeEl.textContent = timeLeft
      timeLeft--;
      if (timeLeft < 0) {
        timeEl.textContent = "0"
        clearInterval(timeInterval)
        // trigger function to display end screen
      }
    }, 1000);
  }

// TODO add questions that display when quiz button is clicked
var startButton = document.querySelector("#start")
startButton.addEventListener("click", countdown)
startButton.addEventListener("click", displayQuestion)



// TODO add clickable answers

// TODO function to check correct answer - reduce timer if wrong

// TODO game ends when all questions answered / timer reach 0

// TODO end screen with score (time left) and input initials