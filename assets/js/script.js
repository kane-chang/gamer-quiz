// TODO variables and quiz questions:
// variables referencing html selectors
var startScreen = document.querySelector("#start-screen");
var questionDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choicesList = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var timeEl = document.querySelector('#time');
var startButton = document.querySelector("#start");

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


var questionNumTracker = 0;  // Keeps track of which question number user is currently on
var timeLeft = 60;  // Total time left, starting from 60 seconds

// TODO function - to display questions and answer options
function displayQuestion() {
  questionTitle.textContent = questionArr[questionNumTracker];  // Set question title in html

  while (choicesList.firstChild) {  // Remove previous answer options, if any
    choicesList.removeChild(choicesList.firstChild);
  };

  for (let j = 0; j < 4; j++) {  // Create buttons for answer options for each question
    var choiceEl = document.createElement("button");
    choiceEl.textContent = answerArr[questionNumTracker][j];
    choicesList.appendChild(choiceEl);
  };

  startScreen.removeAttribute('class:"start"');  // Hides start screen
  startScreen.setAttribute("class", "hide");

  questionDiv.removeAttribute('class:"hide"');  // Displays questions screen
  questionDiv.setAttribute("class", "start");
};


// TODO function - timer that countdowns when start quiz button is clicked
function countdown() {
  var timeInterval = setInterval(function () {
    timeEl.textContent = timeLeft  // Sets time element to reflect total time left
    timeLeft--;  // Deducts 1 from total time left every 1000ms
    if (timeLeft < 1 | questionNumTracker >= questionArr.length) {  // If time/questions run out, stops timer
      timeEl.textContent = timeLeft;
      clearInterval(timeInterval);
      displayEndScreen();  // Triggers end screen
    };
  }, 1000);
};

// TODO function - to check correct answer - reduce timer if wrong
function answerChecker(event) {
  if (event.target.matches("button")) {  // Event delegation to only child button elements
    selectedAnswer = event.target.textContent;  // Stores selected answer 
    console.log(selectedAnswer);
    console.log(correctAnswerArr[questionNumTracker]);
    
    if (selectedAnswer == correctAnswerArr[questionNumTracker]) {  // Checks if selected answer is correct
      console.log("yes!");
    } else {  
      console.log("no!");
      timeLeft -= 10  // Reduces time for wrong answer
    };

    questionNumTracker += 1;  // Moves tracker to next question
    if (questionNumTracker >= questionArr.length) {  // Checks for end of quiz
      console.log("out of questions");
      displayEndScreen()
    } else {
      displayQuestion()
    };
  } 
};


// TODO function - display end screen with score (time left) and input initials
function displayEndScreen() {
  console.log(timeLeft);
  finalScore.textContent = timeLeft  // Updates final score with time left

  questionDiv.removeAttribute('class:"start"');  // Hides questions
  questionDiv.setAttribute("class", "hide");

  endScreen.removeAttribute('class:"hide"');  // Displays end screen
  endScreen.setAttribute("class", "start");
};


// TODO event listeners - start button and answer buttons
startButton.addEventListener("click", countdown);
startButton.addEventListener("click", displayQuestion);
choicesList.addEventListener("click", answerChecker);