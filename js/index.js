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

    loadQuestion();

    $("#game").fadeIn(3000);
}

function getQuestionIndex() {
    // First question index in array is 0, hence we start with 0
    let counter = -1;

    // Loop through all questions 
    for (let i = 0; i < questions.length; i++) {
        ++counter;
        console.log(currentLevel + ' , ' + question.level + ' , ' + counter + ' , ' + questionIndex);
        // If question level matches with our current level
        if (questions[i].level == currentLevel) {
            if (counter > questionIndex) {
                questionIndex = counter;
                return counter;
            }
        }
    }

    // We did not find any question
    return -1;
}

function loadQuestion() {
    let currentQuestion = null;
    questionIndex = getQuestionIndex();
    console.log('>> ' + questionIndex);
    if (questionIndex > -1) {
        let counter = -1;

        // Find question for this index
        questions.forEach(question => {
            ++counter;

            // If question level matches with our current level
            if (counter == questionIndex) {
                console.log(question);
                currentQuestion = question;
            }
        });

        if (currentQuestion != null)
            showQuestion(currentQuestion);
        else
            $("#message").html('No more question').fadeIn(1000);
    } else
        $("#message").html('No more question').fadeIn(1000);

    let counter = -1;


    // No question found
    return null;
}

function showQuestion(question) {
    console.log('showing');
    $("#question").html(question.question);
    $("#option1 > span").html(question.options[0].text);
    $("#option2 > span").html(question.options[1].text);
    $("#option3 > span").html(question.options[2].text);
    $("#option4 > span").html(question.options[3].text);
}

function checkAnswer() {
    // Write logic for checking answer

    loadQuestion();
}

function finishGame() {

}