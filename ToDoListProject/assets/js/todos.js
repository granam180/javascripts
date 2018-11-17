// Check Of Specific Todos By Clicking -- SHORT VERSION

$("ul").on("click", "li", function() {  // when an li is clicked inside this ul, run code
	$(this).toggleClass("completed");  // use .on() instead of .click() to run on all FUTURE elements, not just existing elements
})

// Check Of Specific Todos By Clicking -- LONG VERSION

// $('li').click(function() {
	// if li is gray
	// console.log($(this).css('color'));
	// if($(this).css('color') === 'rgb(128, 128, 128)') {
	// 	//turn it black
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// }
	//else
	// else {
		// $(this).css('color', 'grey');
		// $(this).css('text-decoration', 'line-through');
		// turn it gray
// 		$(this).css({
// 			color: 'gray',
// 			textDecoration: 'line-through'
// 		});
// 	}
// });

// Click on X to delete Todo

$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	e.stopPropagation(); // ** STOPS THE EVENT FROM 'BUBBLING' UP, li:ul:div:body
});

// Input functionality

$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {  // ENTER 'charCode' is #13
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); // acts as a setter rather than a getter
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});
