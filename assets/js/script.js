// TODO quiz questions:

// variables referencing html selectors
var startScreen = document.querySelector("#start-screen");
var questionDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choicesList = document.querySelector("#choices");

// quiz questions and answers
var questionArr = ["What was Mario's original name?",
  "What is thought to be the first video game?",
  "What is the hardest block to mine in Minecraft?",
  "What is the best-selling arcade cabinet video game of all time?",
  "Which God confronts Kratos at the end of God of War (2018)?"
];

var answerArr = [
  ["Wario", "Plumberman", "Jumpman", "Red M"],
  ["Pong", "Space Invaders", "Pac-Man", "Tetris"],
  ["Obsidian", "Ancient Debris", "Diamond", "Emerald"],
  ["Space Invaders", "Pac-man", "Street Fighter", "NBA Jam"],
  ["Jupiter", "Ares", "Zeus", "Thor"]
];

var correctAnswerArr = [
  "Jumpman",
  "Pong",
  "Obsidian",
  "Pac-man",
  "Thor"
];


var questionNumTracker = 0;


function displayQuestion() {
  questionTitle.textContent = questionArr[questionNumTracker]; // Set question title

  // while (choicesList.firstChild) {
  //   choicesList.removeChild(choicesList.firstChild);
  // }

  for (let j = 0; j < 4; j++) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = answerArr[questionNumTracker][j];
    choicesList.appendChild(choiceEl);
  };


  startScreen.removeAttribute('class:"start"');
  startScreen.setAttribute("class", "hide");

  questionDiv.removeAttribute('class:"hide"');
  questionDiv.setAttribute("class", "start");



  questionNumTracker += 1;

};


  // questionTitle.textContent = questionList.questionOne.title
  // for (let i = 0; i < questionList.questionOne.choices.length; i++) {
  //   var choiceEl = document.createElement("button")
  //   choiceEl.textContent = questionList.questionOne.choices[i]
  //   choicesList.appendChild(choiceEl)
  // }


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