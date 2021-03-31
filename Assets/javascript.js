// Declare variables. What variables do i need?
var startButton = document.getElementById('start-btn');
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var timeEl = document.getElementById('timer');
var secondsLeft = 60;




// When you click Start Game, timer starts counting down and first question is displayed.
function startGame() {
    var countdown = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!";
        if(secondsLeft === 0) {
            clearInterval(countdown);
            timeEl.textContent = " Time is up! ";
        }
    }, 1000)
    startButton.style.display = "none";
    container1.style.display = "block";
}

function selectAnswer(event) {
console.log(event.target.dataset.answer)
// If answer is true or false, hide this question and show the next.
    container1.style.display = "none"
    container2.style.display = "block"
// If answer is false, decrement time by 20 seconds.
    if(event.target.dataset.answer === "false") {
        secondsLeft = secondsLeft - 20;
        timeEl.textContent = secondsLeft + " seconds left!";
    }


}

function selectAnswer2(event) {
    container2.style.display = "none"
    container3.style.display = "block"
    if(event.target.dataset.answer === "false") {
        secondsLeft = secondsLeft - 20;
        timeEl.textContent = secondsLeft + " seconds left!";
    }
}

function selectAnswer3(event) {
    container3.style.display = "none"
    container4.style.display = "block"
    if(event.target.dataset.answer === "false") {
        secondsLeft = secondsLeft - 20;
        timeEl.textContent = secondsLeft + " seconds left!";
    }
}

function selectAnswer4(event) {
    container4.style.display = "none"
    window.location.replace("./highscore.html");
    if(event.target.dataset.answer === "false") {
        secondsLeft = secondsLeft - 20;
        timeEl.textContent = secondsLeft + " seconds left!";
    }
}


//window.location.replace("./highscore.html");
//score = secondsleft 
// When answer is clicked, question moves on to the next. 
// If question is answered wrong, decriment time by 10 seconds. If question is answered correct, move to next question.
// After all questions are answered, stop timer and prompt input for name and score(time left). This is for high score page.


answer4.addEventListener('click', function(event){
    selectAnswer4(event);
} )


answer3.addEventListener('click', function(event){
    selectAnswer3(event);
} )


answer2.addEventListener('click', function(event){
    selectAnswer2(event);
} )

answer1.addEventListener('click',function(event){
    selectAnswer(event);
} )
startButton.addEventListener('click', startGame);