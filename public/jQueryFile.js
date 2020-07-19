



var dataHolder;

function jQueryFile() {


	$('#toCapture').change( function() {
	
		$('#precioVenta').val($('#toCapture').val());

	});

	$('i').click(function() {

		$('#toAdd').append(

			"<tr>" +
			`<td>${$('#toCapture option:selected').text()}</td>` +
			`<td>${$('#precioVenta').val()}</td>` +
			`<td>${$('#cantidad').val()}</td>` +
			"</tr>"
			
			);


	});



}


window.onload = function () {

	jQueryFile();

}



