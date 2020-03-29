var start = document.getElementById("start");
var firstBox = document.getElementById("firstBox")
var quizQuestions = document.getElementById("quizQuestions");
var numberOne = document.getElementById("numberOne");
var timer = document.getElementById("timer");
var answerOne = document.getElementById ("btn1");
var answerTwo = document.getElementById ("btn2");
var answerThree = document.getElementById ("btn3");
var highScore = document.getElementById ("highScore");
var possibleAnswer = document.getElementById("possibleAnswer");

var questionsArray = [
    {Question: "Arrays are a __________ of data"},
    {Question: "The code inside a function is executed when the function is ____________"},
    {Question: "You can add ________ event handlers to one element."},
    ];
    
    var arrayLength = questionsArray.length;
for (var i = 0; i < questionsArray.length; i++) 

var answers = [
    {
    answerOne : "process",
    answerTwo: "deletion",
    answerThree: "collection",
    correct: "btn3",
    },

    {
    answerOne : "invoked",
    answerTwo: "defined",
    answerThree: "created",
    correct: "btn1"
    },

    {
    answerOne : "one",
    answerTwo: "many",
    answerThree: "zero",
    correct: "btn2"
    },
  
];


var runningQuestion = 0;
var score = 0;
var lastAnswer = answers.length-1;
var runningAnswer = 0

function renderQuestion(){
    var q = questionsArray[runningQuestion];

    numberOneinnerHTML = q.numberOne;
}

function renderAnswer (){
    var a = answers [runningAnswer];
    
    answerOne.innerHTML = a.answerOne;
    answerTwo.innerHTML = a.answerTwo;
    answerThree.innerHTML = a.answerThree;
    
    }


start.addEventListener("click", beginQuiz);
btn3.addEventListener("click", function(){
    alert ("correct!")
})



function beginQuiz(){
    firstBox.style.display = "none";
    renderQuestion()
    renderAnswer()
    quizQuestions.style.display = "block";

   
}
