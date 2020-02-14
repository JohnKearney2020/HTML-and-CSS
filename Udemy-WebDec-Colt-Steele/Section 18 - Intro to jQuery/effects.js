//==========================================================================
//                                  Fades
//==========================================================================

// $('#the-button').on('click', function(event) {
// 	$('div').fadeOut(1000, function() {
// 		//the code below won't execute until 1000 ms has passed
// 		console.log('Fadeout done.');
// 		$(this).remove(); //this will actually remove the divs from the page, otherwise they are just hidden
// 	});
// });

// $('#the-button').on('click', function(event) {
// 	$('div').fadeIn(1000, function() {
// 		//the code below won't execute until 1000 ms has passed
// 		console.log('Fadeout done.');
// 	});
// });

// $('#the-button').on('click', function(event) {
// 	$('div').fadeToggle(500);
// });

//==========================================================================
//                                  Slides
//==========================================================================
$('#the-button').on('click', function(event) {
	// $('div').slideDown();
	// $('div').slideUp();
	$('div').slideToggle(1000, function() {
		console.log('slide is done');
		$(this).remove();
	});
});
