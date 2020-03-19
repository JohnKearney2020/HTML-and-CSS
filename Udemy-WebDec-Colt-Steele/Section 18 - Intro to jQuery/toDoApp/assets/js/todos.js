// ------------------------------------------------------------------------------------------------
//                            Add an item to the to-do list
// ------------------------------------------------------------------------------------------------
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//13 is the enter key
		var toDoText = $(this).val();
		//create a new li and add to ul
		$('ul').append(`<li><span>X</span> ${toDoText}</li>`);
		$(this).val(''); //this resets the text in the input field
	}
});

// ------------------------------------------------------------------------------------------------
//                            delete a to-do item by clicking on X
// ------------------------------------------------------------------------------------------------
//delete a to-do item by clicking on X
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function(event) {
		$(this).remove(); //we don't need parent again here
	}); //.parent selects the parent, in this case the li tag that encloses our span
	event.stopPropagation(); //this will prevent other events from triggering as a result of this span being clicked
	//in this case, this span is inside an li, and we have seperate event listeners for that li that otherwise will trigger, too
});

// ------------------------------------------------------------------------------------------------
//                            Check off specific to-dos by clicking them
// ------------------------------------------------------------------------------------------------
$('ul').on('click', 'li', function() {
	//we add the on click to the parent ul b/c javascript only allows us to add listeners to items that already exist the first time this code is run
	//so if we just did 'li' it would only work on li items that existed when the page first loaded, not on later ones we add.
	//however, the ul does exists when we first load the page, and we've designated the listener to be on all its children.
	//================================
	//             Easy Way
	//================================

	//instead of all the logic/code below, we can make a class in the .css file and toggle it :)
	$(this).toggleClass('completed');

	//================================
	//            Hard Way
	//================================

	// console.log($(this).css('color')); //the value of the color will be given as an RGB value
	// if ($(this).css('color') == 'rgb(128, 128, 128)') {
	// 	//== 'gray' will not work
	// 	// console.log('it is currently gray');
	// 	// $(this).css('color', 'black'); //make the text black
	// 	// $(this).css('textDecoration', 'none'); //remove the strike-through from the text
	// 	// OR make an object
	// 	//turn black if already gray
	// 	$(this).css({
	// 		color: 'black', //make the text black
	// 		textDecoration: 'none' //remove the strike-through from the text
	// 	});
	// } else {
	// 	//otherwise turn gray
	// 	$(this).css({
	// 		color: 'gray',
	// 		//text-decoration: "line-through", //***Note this will not work b/c Javascript does not allow hyphenated keys, must replace with a camelCase key */
	// 		textDecoration: 'line-through'
	// 	});
	// }
});
