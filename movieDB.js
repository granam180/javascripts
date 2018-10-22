var movies = [
	{
        title: "Shawshank Redemption",
        rating: 4.8,
        hasWatched: true
    },
    {
        title: "Christoper Robin",
        rating: 4.6,
        hasWatched: false
    },
];

movies.forEach( function(movie) {
	// var result = "You have ";		//moved into a function below
	// if(movie.hasWatched){
	// 	result += "watched ";
	// } else {
	// 	result += "not seen ";
	// }
	// //refers only to function element 'movie'
	// result += "\"" + movie.title  + "\" - ";
	// result += movie.rating + " stars";
	// console.log(result);
	console.log(buildString(movie));
});

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	//refers only to function element 'movie'
	result += "\"" + movie.title  + "\" - ";
	result += movie.rating + " stars";
	// console.log(result);
	return result;
}

