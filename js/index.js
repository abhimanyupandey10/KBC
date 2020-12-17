var questions;
var currentLevel = 1;
var questionIndex = -1;
var questionPassed = 0;
var chalpadiTime = 45000;

var currentQuestion;

const totalQuestions = 16;

// call function init() when window is loaded
//window.onLoad = init;

// called when all html tags are ready
/*
$(document).ready(function () {
    init();
});
*/

$(function () {
    init();
});

function init() {
    loadQuestions();
}

function loadQuestions() {
    $.ajax({
        url: 'data/questions.json',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            questions = result;
            console.log(questions);
        }
    });
}

function startGame() {
    $("#welcome").fadeOut(2000);

    //questionIndex = getQuestionIndex(currentLevel);
    //loadQuestion(questionIndex);

    $("#game").fadeIn(3000);
}

function submitAnswer() {

}

function loadQuestion() {

}

function finsishGame() {

}