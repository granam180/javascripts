window.setTimeout(function() {
    var todos = ["DRIVE"];

    var input = prompt("What would you like to do?");

    // if(input === "list") {
    // 	console.log(todos)
    // } elseif(input === "new"){
    //ask for new todo
    // 	var newToDo = prompt("Enter new todo");
    //add to todos array
    // 	todos.push(newToDo);

    // }
    //move contition into while loop, keep running until the user QUITS
    while (input !== "quit") {
    	//HANDLE INPUT
        if (input === "list") {
        	listToDos();
        	//refactored to a function
        } else if(input === "new") {  //**IMPORTANT**  else if, not elseif!!
        	addToDo();
        	//refactored to a function
        } else if(input === "delete"){
        	deleteToDo();
			//refactored to a function
        }
        //ask again for new input
        input = prompt("What would you like to do? /n NEW, LIST, DELETE OR QUIT?");
    }
    console.log("OK, YOU QUIT THE APP");

    function listToDos() {
        //loop through each todo
        console.log("**********");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
        // console.log(todos) leaving this here qould just print out list in ARRAY form
    }

    function addToDo() {
        //ask for new todo
        var newToDo = prompt("Enter new todo");
        //add to todos array
        todos.push(newToDo);
        console.log('Added new todo');
    }

    function deleteToDo() {
    	//as for index of todo to be deleted
    	var index = prompt("Enter index of todo to delete");
    	//delete that todo
    	//splice()
    	todos.splice(index,1);// delete 1 item from the index
    	console.log('Deleted todo');
    }
}, 500);