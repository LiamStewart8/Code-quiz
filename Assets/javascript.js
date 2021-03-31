// Declare variables. What variables do i need?
var startButton = document.getElementById('start-btn')
var container1 = document.getElementById('container1')
//var questionEl = document.getElementById("questions");
//var answersEl = document.getElementsById("answer");
var timeEl = document.getElementById('timer');
var secondsLeft = 10;
// var data = [{
//     question: 'What color is the ocean?',
//     answer: ['Orange', 'Green', 'Blue', 'Yellow']
// }, {
//     question: 'How many tentacles does an octopus have?',
//     answer: ['Four', 'Three', 'Six', 'Eight']
// }, {
//     question: 'How many weeks are in a year?',
//     answer: ['365', '52', '24', '36']
// }



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
// When answer is clicked, question moves on to the next. 
// If question is answered wrong, decriment time by 10 seconds. If question is answered correct, move to next question.
// After all questions are answered, stop timer and prompt input for name and score(time left). This is for high score page.


startButton.addEventListener('click', startGame);