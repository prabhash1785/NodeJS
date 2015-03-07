
function results(msg) {
	var results = msg + "<br />" + $('#results').html();
	$('#results').html(results);
}
$(document).ready(function() {

	results('hello');
	results('hello, again');
});