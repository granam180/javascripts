var p1Button = document.querySelector("#p1"); //specify octotorpe for ID when using querySelector
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); //only select spans INSIDE A PARAGRAPH
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

console.log(p1Display);
console.log(p2Display);

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++; //keeping adding scores, until hitting the winning score..
        // console.log(p1Score, winningScore); check score count
        if (p1Score === winningScore) { //if player1 has won
        								//** triple equals will return a String unless Number is specified
        	p1Display.classList.add("winner"); //change winning number to color green
            gameOver = true; //GAME OVER!
        }
        // h1.textContent = p1Score; //this would overwrite both h1 tags
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++; //keeping adding scores, until hitting the winning score..
        if (p2Score === winningScore) { //if player2 has won
        	p2Display.classList.add("winner");
            gameOver = true; //GAME OVER!
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
	reset(); //resets while updating the score
});

function reset () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false; //set gameOver reset to false to end game
}

numInput.addEventListener("change", function() { //change vs click -> a 'change' event will run anytime a value changes
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})

// var input = document.querySelector("input");
// input.value; //displays current value of the input