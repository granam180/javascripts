var person = {
	name: "Travis",
	age: 32,
	city: "Dover"
};

//bracket notation:
console.log(person["age"]);
//dot notation:
console.log(person.age);

//update age
person["age"] += 1;
//update city
person.city = "London";

//retrieve specific name from an object
var myObject = {
	friends: [
		{name:"Malfoy"},
		{name:"Crabbe"},
		{name:"Goyle"}
	],
	color: "baby blue",
	isEvil: true
};
myObject.friends[0].name; //"Malfoy"