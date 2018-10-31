//** MODULE DESIGN PATTERN INTRO
//** Would be done normally on every function/property variable
//** Can help avoid namespace collisions
var game = {}

game.init = function(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

var numSquares = 6; //set a variable for each color set in EASY and HARD mode
var colors = []; //generate random colors
var pickedColor;
var squares = document.querySelectorAll(".square");  //go through each .square divs
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//now that the buttons have the same class, the game can have multiple difficulty modes
var modeButtons = document.querySelectorAll(".mode");


init(); //** RUN CODE AT THE BEGINNING OF PAGE LOAD

function init() {
	//mode buttons event listeners
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//** Change numSquares here for higher difficulty level
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //** TERNARY OPERATOR instead of if/else statement
			reset();
		});
	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i ++){
	//add initial colors to squares
	// squares[i].style.backgroundColor = colors[i]  //** IMPORTANT Firefox fix: use style.backgroundColor to loop through colors.

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//checking clickedColor vs pickedColor
			console.log(clickedColor, pickedColor);
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				// alert("CORRECT!");
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
			    changeColors(clickedColor);
			    h1.style.background = clickedColor;
			} else {
				// alert("WRONG!!");
				this.style.background = "#232232";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

//** RESET BUTTON EVENT HANDLER
function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color dosplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"; //change reset button message
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i ++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
	h1.style.background = 'steelblue';
}

//** EASY BUTTON
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares); //generating 3 colors
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; //display rgb color to guess
// 	for (var i = 0; i < squares.length; i++) { //loop through all the colors and check if there is a color at that index
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i]; //if so, change the color of the FIRST 3
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

//** HARD BUTTON
// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares); //generating 6 colors
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; //display rgb color to guess
// 	for (var i = 0; i < squares.length; i++) { //loop through all the colors and check if there is a color at that index
// 			squares[i].style.backgroundColor = colors[i]; //if so, change the color of the FIRST 3
// 			squares[i].style.display = "block"; //display more squares
// 		}
// });

//** RESET BUTTON CLICK EVENT
resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

//** CHANGE ALL COLORS TO CORRECT PICKED COLOR
function changeColors(color) {
	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}

//** USE MATH.RANDOM & MATH.FLOOR TO PICK A RANDOM WHOLE NUMBER
// Math.floor(Math.random() * 6 + 1);
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "redblue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}