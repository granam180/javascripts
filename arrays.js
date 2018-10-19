console.log('CONNECTED');

//PRINT REVERSE
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([3,6,1,9]);

//**** isUniform() ****

function isUniform(arr){
	var first = arr[0]; //checks first index
	for(var i = 1; i < arr.length; i++){ //loops through each number in the array
		if(arr[i] !== first){
			return false;
		}
	} //if forEach.arr() was used then it would only return true below
	return true;
}

//**** sumArray() ****

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

//**** max() ****

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){ //if number is great than other numbers..then return that number, basically
			max = arr[i];
		}
	}
	return max;
}
