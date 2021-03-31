# Code-quiz

## Site-Picture

## Summary
    Built a quiz game from scratch using HTML/CSS/Javascript, after you have answered all questions or time has run down to 0 you are promped with a submit page where data will be stored locally.

## Technologies Used
    - HTML - Used for the foundation/structure of the web page.
    - CSS - used for the stlying of the page.
    - Javascript - Used to make the web page interactive.
    - Git - Version control system to track changes to source code.
    - GitHub - Hosts repositroy that can be deployed to GitHub pages.

## Code Snippet
    Here is a code snippet from the Javascript where I state a function that will start the quiz by starting the timer and displaying the first question to answer.
```javascript
    function startGame() {
    var countdown = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!";
        if (secondsLeft === 0) {
            clearInterval(countdown);
            timeEl.textContent = " Time is up! ";
        }
    }, 1000)
    startButton.style.display = "none";
    container1.style.display = "block";
```

# Author Links
[LinkedIn](https://www.linkedin.com/in/liamsctewart/)<br>
[Github](https://github.com/LiamStewart8)<br>
[Deployed Link](https://liamstewart8.github.io/Code-quiz/)