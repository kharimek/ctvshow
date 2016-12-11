$(document).ready(function() {

	var btn = document.querySelector('.btn');

	btn.addEventListener('click', function() {
		alert("clicked!");
	});

	$.getJSON( "https://api.datamuse.com/words?sp=c", function( data ) {
 		console.log(JSON.parse(data));
 	});

})

