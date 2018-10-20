//push/pop
var colors = ["red", "orange", "blue", "yellow", "green"]
colors.push("indigo"); //ADDS to the array
colors.pop(); //returns the last element in the array that it REMOVES

//shift/unshift
colors.unshift("infared") //ADDS to the BEGINNING of the array
//var colors = ["infared", "red", "orange", "blue", "yellow", "green"]
colors.shift(); //returns the REMOVED element
//var colors = ["red", "orange", "blue", "yellow", "green"]

//indexOf
colors.indexOf("red") //0, not 5 -> first instance
colors.indexOf("orange") //0
colors.indexOf("magenta") //-1
//var colors = ["red", "orange", "blue", "yellow", "green", "red"]

//slice -> copy parts of an array
//var colors = ["red", "orange", "blue", "yellow", "green", "red"]
colors.slice(1, 3); //prints 'orange', 'blue'

//check MDN for built-in methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//ARRAY ITERATION -- forEach vs for loop
var colors = ["red", "orange", "blue", "yellow", "green"]
for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

//calling a function inside of an array with forEach method
colors.forEach(function(x){
	console.log("color: " + x);
});

function printColor(color) {
	console.log('************');
	console.log(color);
	console.log('************');
}

//colors.forEach(printColor);

//**** MORE ON ForEach -- built-in way of iterating over an array ****

var colors = ["red", "orange", "yellow"];

function myForEach(arr, func){
	//loop through the array
	for(var i = 0; i < arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
}
//myForEach(colors, alert);  //**** ALERT
myForEach(colors, function(color){  //**** PRINT TO CONSOLE
	console.log(color);
});
