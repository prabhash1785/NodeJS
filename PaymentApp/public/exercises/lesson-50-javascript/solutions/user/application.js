
function results(msg) {
	var results = msg + "<br />" + $('#results').html();
	$('#results').html(results);
}
$(document).ready(function() {

	results('hello');
	results('hello, again');
});

function createTable(selector, data ) {
	var table = $('<table><thead></thead><tbody></tbody></table>');

	var tr = $("<tr />");
	$.each(data.headers, function(index, value) {
		tr.append($("<th />").append(value));
	});

	table.find('thead').append(tr);

	$.each(data.info, function(index, user) {
		tr = $("<tr />");
		$.each(user, function(index, value) {
			tr.append($("<td />").append(value));
		})
		table.find('tbody').append(tr);
	})

	$(selector).empty().append(table);
}

function createUserTable(selector, data ) {
	var table = $('<table><thead></thead><tbody></tbody></table>');

	var tr = $("<tr />");
	$.each(data.headers, function(index, value) {
		tr.append($("<th />").append(value));
	});

	tr.append($('<th>Edit</th>'));

	table.find('thead').append(tr);

	$.each(data.info, function(index, user) {
		tr = $("<tr />");
		$.each(data.properties, function(index, value) {
			tr.append($("<td />").append(user[value]));
		})
		tr.append($('<a href="/user/edit?id=' + user.id + '">Edit</a>'));

		table.find('tbody').append(tr);
	})

	$(selector).empty().append(table);
}

function setUserId(id) {
	$.getJSON('/api/currentUser?userId=' + id, function(result) {
		window.location.href = "editUser.html";
	});
	return false;
}

