var dataHolder;

var total = 0;

var grow = 0; 

var sendToBack = [];

var toCut = [];

var cantidadHolder = [];

var precioHolder = [];

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

		toCut = $(`#toCapture option:selected`).text();

		sendToBack.push(toCut.slice(1));

		cantidadHolder.push($('#cantidad').val());

		precioHolder.push($('#precioVenta').val());


		console.log(sendToBack);
		console.log(cantidadHolder);

	});

	$('#guardarPedido').click( 

		

		function(){

			$.post('http://localhost:3000/pedido/',{sendToBack, cantidadHolder},function(data,status){});

		}

		);





}


window.onload = function () {

	jQueryFile();

}



