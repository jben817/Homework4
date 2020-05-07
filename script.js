var start = document.getElementById("start");
var firstBox = document.getElementById("firstBox")
var quizQuestions = document.getElementById("quizQuestions");
var numberOne = document.getElementById("numberOne");
var timer = document.getElementById("timer");
var answerOne = document.getElementById("btn1");
var answerTwo = document.getElementById("btn2");
var answerThree = document.getElementById("btn3");
var gameOver = document.getElementById("gameOver");
var possibleAnswer = document.getElementById("possibleAnswer");
var rightWrong = document.getElementById("rightWrong");

var questionsArray = [
    { Question: "Arrays are a __________ of data" },
    { Question: "The code inside a function is executed when the function is ____________" },
    { Question: "You can add ________ event handlers to one element." },
];

var arrayLength = questionsArray.length;

var answers = [
    {
        answerOne: "process",
        answerTwo: "deletion",
        answerThree: "collection",
        correct: "btn3",
    },

    {
        answerOne: "invoked",
        answerTwo: "defined",
        answerThree: "created",
        correct: "btn1"
    },

    {
        answerOne: "one",
        answerTwo: "many",
        answerThree: "zero",
        correct: "btn2"
    },

];

var secondsLeft = 20;
var runningQuestion = 0;
var score = 0;
var lastAnswer = answers.length - 1;
var runningAnswer = 0;
var timerInterval;

function renderQuestion() {
    var q = questionsArray[runningQuestion];

    numberOne.innerHTML = q.Question;
}

function renderAnswer() {
    var a = answers[runningQuestion];

    answerOne.innerHTML = a.answerOne;
    answerTwo.innerHTML = a.answerTwo;
    answerThree.innerHTML = a.answerThree;

}


start.addEventListener("click", beginQuiz);
start.addEventListener("click", setTime);

btn1.addEventListener("click", checkAnswer)
btn2.addEventListener("click", checkAnswer)
btn3.addEventListener("click", checkAnswer)


function checkAnswer(event) {
    console.log(event.target.id)
    var userChoice = event.target.id;
    if (userChoice === answers[runningQuestion].correct) {
        document.body.style.backgroundColor = "green";
        document.body.style.transition = "2s";
        alert("RIGHT ANSWER!!")
        score++;
    } else {
        document.body.style.backgroundColor = "red";
        document.body.style.transition = "2s";
        alert("WRONG ANSWER!!");
        score--;

    }

    if (runningQuestion < questionsArray.length - 1) {
        runningQuestion++;
        beginQuiz();
    } else {
        //means the game is over
        endGame();
        clearInterval(timerInterval);

    }

    function resetQuestion() {
        document.body.style.backgroundColor = "black";
        rightWrong.style.display = "none"

    }

    // alert ("correct!")
    //check if right answer
    //increment runningQuestion
}

function beginQuiz() {
    firstBox.style.display = "none";
    renderQuestion()
    renderAnswer()
    quizQuestions.style.display = "block";

}

function endGame() {
    quizQuestions.style.display = "none";
    gameOver.style.display = "block"
    gameOver.innerHTML = ("Game over! Score =" + " " + score)
    document.body.style.backgroundColor = "black";
    document.body.style.transition = "2s";
}


function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer:" + secondsLeft + " seconds left.";

        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            alert("time ran out");
            endGame();
        }

    }, 1000);
}
