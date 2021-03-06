let startBtn = document.querySelector('#start');
let timerDisplay = document.querySelector('#timer');
let allQuestionsBox = document.querySelector("#allQuestionsBox");
let question = document.querySelector("#question");
let options = document.querySelector("#options");
let userScoreName = document.querySelector("#userScoreName");
let userScore = document.querySelector("userScore");
let userScoreSubmit = document.querySelector("#userScoreSubmit");
let countDown = 75;
let timerInterval;
let orderedQuestion;
let questionCounter = 0;
let userScoreDisplay = document.querySelector("#userScore");
let welcomeMessage = document.querySelector("#welcome-message");
let answeredRight = document.querySelector("#right-message");
let answeredWrong = document.querySelector("#wrong-message");
// start code quiz game
function startGame() {
    timerInterval = setInterval(timeRun, 1000);
    //run function to ask questions

    askQuestionFunc();
    welcomeMessage.style.visibility = "hidden";
    startBtn.style.visibility = "hidden";
}

function askQuestionFunc() {
    orderedQuestion = allQuestions[questionCounter];

    question.textContent = orderedQuestion.question;

    orderedQuestion.options.forEach(function (option) {
        let optionsBtn = document.createElement("button");
        optionsBtn.setAttribute('value', option);
        optionsBtn.addEventListener("click", askQuestionClick);
        optionsBtn.textContent = option;

        options.appendChild(optionsBtn);
        optionsBtn.className = "my-options-btn";
    });
}

function askQuestionClick(e) {

    if ((e.target.value) === orderedQuestion.rightAnswer) {
        console.log("correct")
        
        
    } else {
        console.log("false");
  
        
    }

    questionCounter++;

    if (questionCounter === allQuestions.length) {
        stopGame();
    } else {
        options.innerHTML = '';

        askQuestionFunc();
    }
}

function stopGame() {
    clearInterval(timerInterval);
    userScoreDisplay.removeAttribute("class");
    options.style.visibility = "hidden";
    question.style.visibility = "hidden";


}

function timeRun() {
    countDown--;
    timerDisplay.textContent = `Time ${ countDown }`

    if (countDown === 0) {
        clearInterval(timerInterval);
    }
}


startBtn.addEventListener('click', startGame);