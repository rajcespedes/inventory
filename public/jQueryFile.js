var dataHolder;

var total = 0;

var grow = 0; 

var sendToBack = [];

function jQueryFile() {

	

	$('#toCapture').change( function() {
	
		$('#precioVenta').val($('#toCapture').val());

	});

	$('i').click(function() {

		$('#toAdd').append(

			"<tr>" +
			`<td id="x${grow++}">${$('#toCapture option:selected').text()}</td>` +
			`<td>${$('#precioVenta').val()}</td>` +
			`<td>${$('#cantidad').val()}</td>` +
			"</tr>"
			
		);

		total += $('#precioVenta').val() * $('#cantidad').val();

		$('#totalSum').text(total);

		sendToBack.push($(`#toCapture option:selected`).text());
		console.log(sendToBack);

	});

	$('#guardarPedido').click(

		function(){

			$.post('/pedido',sendToBack,function(res,textStat){});

		}

		);





}


window.onload = function () {

	jQueryFile();

}



